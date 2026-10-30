import { test, after } from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { once } from "node:events";
import { Chess } from "chess.js";
process.env.DATABASE_PATH =
  "/tmp/rodniy-validation/integration-" + randomUUID() + ".sqlite";
process.env.OWNER_PASSWORD = "integration-test-only-password";
const { app } = await import("../server/index.ts");
const { one, all, run, db, claimJob } = await import("../server/db.ts");
const { processJob } = await import("../server/worker.ts");
const { Engine } = await import("../server/engine.ts");
const { positionKey, playUci } = await import("../shared/chess.ts");
const server = app.listen(0, "127.0.0.1");
await once(server, "listening");
const base =
  "http://127.0.0.1:" + (server.address() as any).port + "/chess/api";
let cookie = "";
async function request(path: string, body?: any, method?: string) {
  const r = await fetch(base + path, {
    method: method || (body ? "POST" : "GET"),
    headers: {
      ...(body ? { "Content-Type": "application/json" } : {}),
      ...(cookie ? { Cookie: cookie } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (r.headers.get("set-cookie"))
    cookie = r.headers.get("set-cookie")!.split(";")[0];
  return { status: r.status, data: await r.json() };
}
test("root redirects once and chess page serves a real application", async () => {
  const origin = base.replace("/chess/api", "");
  const root = await fetch(origin + "/", { redirect: "manual" });
  assert.equal(root.status, 302);
  assert.equal(root.headers.get("location"), "/chess/");
  const bare = await fetch(origin + "/chess", { redirect: "manual" });
  assert.equal(bare.status, 302);
  const page = await fetch(origin + "/chess/");
  assert.equal(page.status, 200);
  assert.match(await page.text(), /Родной ход/);
});
test("private API, authenticated PGN import, real Stockfish worker, review, export and deduplication", async () => {
  assert.equal((await request("/games")).status, 401);
  assert.equal((await request("/login", { password: "wrong" })).status, 401);
  assert.equal(
    (await request("/login", { password: process.env.OWNER_PASSWORD })).status,
    200,
  );
  const pgn =
    '[Event "Integration"]\n[White "owner"]\n[Black "opponent"]\n[Date "2026.01.01"]\n[Result "0-1"]\n\n1. f3 e5 2. g4 Qh4# 0-1';
  const imported = await request("/import/pgn", { owner: "owner", pgn });
  assert.equal(imported.status, 200);
  const id = imported.data.results[0].id;
  assert.ok(id);
  const job = claimJob();
  assert.equal(job.kind, "analysis");
  const result = await processJob(job);
  assert.equal(result.positions, 2);
  assert.match(result.engine, /Stockfish/);
  const game = (await request("/games/" + id)).data;
  assert.equal(game.analysis_status, "complete");
  assert.ok(game.moves[2].analysis);
  assert.equal(game.moves[2].analysis.category, "allowed-mate");
  assert.equal(game.moves[2].analysis.played.score.type, "mate");
  assert.ok(game.moves[2].analysis.played.score.value < 0);
  assert.equal(game.moves[2].analysis.cpLoss, null);
  const review = (await request("/review")).data;
  assert.ok(review.some((x: any) => x.gameId === id && x.ply === 3));
  assert.equal(
    (await request("/import/pgn", { owner: "owner", pgn })).data.results[0]
      .duplicate,
    true,
  );
  const exp = await request("/export");
  assert.equal(exp.data.tables.games.length, 1);
  assert.equal(exp.data.tables.analysis.length, 2);
  assert.equal(exp.data.tables.sessions, undefined);
  assert.equal(
    (await request("/review/" + id + "/3", { correct: true, assisted: false }))
      .data.interval,
    1,
  );
});
test("opening editor, alternatives, transpositions, durable training and PGN export", async () => {
  const rep = (await request("/repertoires/ponziani")).data;
  assert.ok(rep.lines.length >= 2);
  const c = new Chess();
  const train = {
    id: randomUUID(),
    repertoireId: "ponziani",
    fen: c.fen(),
    played: "e2e4",
    assisted: false,
    lineId: rep.lines[0].id,
  };
  assert.equal((await request("/training", train)).data.correct, true);
  await request("/training", train);
  assert.equal(
    one(
      "SELECT attempts FROM training WHERE repertoire_id=? AND position=?",
      "ponziani",
      positionKey(c.fen()),
    ).attempts,
    1,
  );
  const wrong = await request("/training", {
    ...train,
    id: randomUUID(),
    played: "d2d4",
  });
  assert.equal(wrong.data.correct, false);
  await request("/repertoires/ponziani/lines", {
    name: "Test alternative",
    pgn: "1. d4 d5 2. Nf3 Nf6 *",
  });
  assert.equal(
    (await request("/training", { ...train, id: randomUUID(), played: "d2d4" }))
      .data.correct,
    true,
  );
  await request("/repertoires/ponziani/lines", {
    name: "Transpose A",
    pgn: "1. Nf3 Nf6 2. g3 g6 3. Bg2 *",
  });
  await request("/repertoires/ponziani/lines", {
    name: "Transpose B",
    pgn: "1. g3 g6 2. Nf3 Nf6 3. Bg2 *",
  });
  const a = new Chess(),
    b = new Chess();
  ["Nf3", "Nf6", "g3", "g6"].forEach((m) => a.move(m));
  ["g3", "g6", "Nf3", "Nf6"].forEach((m) => b.move(m));
  await request("/training", {
    ...train,
    id: randomUUID(),
    fen: a.fen(),
    played: "f1g2",
  });
  await request("/training", {
    ...train,
    id: randomUUID(),
    fen: b.fen(),
    played: "f1g2",
    assisted: true,
  });
  const record = one(
    "SELECT * FROM training WHERE repertoire_id=? AND position=?",
    "ponziani",
    positionKey(a.fen()),
  );
  assert.equal(record.attempts, 2);
  assert.equal(record.unaided, 1);
  assert.equal(record.assisted, 1);
  assert.equal(record.streak, 0);
  const pgn = await fetch(base + "/repertoires/ponziani/pgn", {
    headers: { Cookie: cookie },
  });
  assert.equal(pgn.status, 200);
  assert.match(await pgn.text(), /Test alternative/);
});
test("engine legal principal variation, terminal positions, black perspective and repeatable cache", async () => {
  const engine = new Engine();
  try {
    await engine.init();
    const c = new Chess();
    ["f3", "e5", "g4"].forEach((m) => c.move(m));
    const before = c.fen();
    const result = await engine.search(before, 20000);
    assert.equal(result.score.type, "mate");
    assert.ok(result.score.value > 0);
    assert.equal(result.bestmove, "d8h4");
    for (const m of result.pv) playUci(c, m);
    assert.ok(c.isCheckmate());
    const cached = await engine.search(before, 20000);
    assert.deepEqual(cached, result);
    const terminal = await engine.search(c.fen(), 20000);
    assert.equal(terminal.score.type, "mate");
    assert.equal(terminal.bestmove, "(none)");
  } finally {
    engine.close();
  }
});
after(async () => {
  server.close();
  db.close();
});
