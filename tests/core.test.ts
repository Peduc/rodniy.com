import { test, after } from "node:test";
import assert from "node:assert/strict";
import { Chess } from "chess.js";
import { randomUUID } from "node:crypto";
process.env.DATABASE_PATH =
  "/tmp/rodniy-validation/test-" + randomUUID() + ".sqlite";
const {
  repertoirePgn,
  positionKey,
  playUci,
  replay,
  whiteScore,
  loss,
  weighted,
  schedule,
  splitPgn,
} = await import("../shared/chess.ts");
const { repertoires } = await import("../shared/repertoires.ts");
const { db, one, all, run, enqueue, claimJob, recoverJobs } =
  await import("../server/db.ts");
const { importGame } = await import("../server/importer.ts");
const { statistics } = await import("../server/analytics.ts");
const pgn =
  '[Event "Fixture"]\n[Date "2025.01.01"]\n[White "owner"]\n[Black "opponent"]\n[Result "0-1"]\n\n1. f3 e5 2. g4 Qh4# 0-1';
test("all eight seeded repertoires replay legally and keep gambits distinct", () => {
  assert.equal(repertoires.length, 8);
  for (const r of repertoires)
    for (const line of r.lines) {
      const c = new Chess();
      for (const san of line.split(" ")) c.move(san);
    }
  assert.ok(one("SELECT id FROM repertoires WHERE id='goring'"));
  assert.ok(one("SELECT id FROM repertoires WHERE id='danish'"));
});
test("PGN replay, mate, draw, castling, en passant and underpromotion", () => {
  assert.ok(replay(pgn).chess.isCheckmate());
  const castle = new Chess();
  ["e4", "e5", "Nf3", "Nc6", "Bc4", "Nf6", "O-O"].forEach((m) =>
    castle.move(m),
  );
  assert.equal(castle.get("g1")?.type, "k");
  const ep = new Chess();
  ["e4", "a6", "e5", "d5"].forEach((m) => ep.move(m));
  assert.ok(ep.move("exd6").isEnPassant());
  assert.equal(ep.get("d5"), undefined);
  const prom = new Chess("7k/P7/8/8/8/8/8/7K w - - 0 1");
  assert.equal(playUci(prom, "a7a8n").promotion, "n");
  assert.ok(prom.isInsufficientMaterial());
  const stale = new Chess("7k/5Q2/6K1/8/8/8/8/8 b - - 0 1");
  assert.ok(stale.isStalemate());
  assert.throws(() => new Chess().move("e5"));
});
test("evaluation perspective and distinct mate transitions", () => {
  assert.deepEqual(whiteScore({ type: "cp", value: 120 }, "b"), {
    type: "cp",
    value: -120,
  });
  assert.equal(
    loss({ type: "cp", value: 120 }, { type: "cp", value: -100 }).cpLoss,
    220,
  );
  assert.equal(
    loss({ type: "mate", value: 3 }, { type: "cp", value: 900 }).category,
    "missed-mate",
  );
  assert.equal(
    loss({ type: "cp", value: -400 }, { type: "mate", value: -4 }).category,
    "allowed-mate",
  );
  assert.equal(
    loss({ type: "mate", value: 3 }, { type: "mate", value: 5 }).category,
    null,
  );
  assert.equal(
    loss({ type: "mate", value: -3 }, { type: "mate", value: -5 }).cpLoss,
    null,
  );
});
test("import deduplicates, excludes unfinished/variants and counts only owner moves", () => {
  const first = importGame(pgn, "owner");
  assert.ok(first.id);
  assert.equal(importGame(pgn, "owner").duplicate, true);
  assert.equal(
    importGame(pgn, "owner", { rules: "chess960" }).excluded,
    "unsupported-variant",
  );
  assert.equal(
    importGame(pgn.replaceAll("0-1", "*"), "owner").excluded,
    "unfinished",
  );
  assert.equal(importGame(pgn, "someone").excluded, "different-owner");
  assert.equal(
    one("SELECT player_moves FROM games WHERE id=?", first.id).player_moves,
    2,
  );
  assert.equal(all("SELECT * FROM games").length, 1);
  assert.equal(splitPgn(pgn + "\n\n" + pgn).length, 2);
});
test("durable jobs recover stale leases, preserve checkpoint and cancellation", () => {
  const id = enqueue("import", { owner: "owner" });
  const j = claimJob();
  assert.equal(j.id, id);
  run(
    "UPDATE jobs SET heartbeat=?,checkpoint=? WHERE id=?",
    Date.now() - 120000,
    '{"index":3}',
    id,
  );
  recoverJobs();
  assert.equal(one("SELECT status FROM jobs WHERE id=?", id).status, "queued");
  assert.equal(claimJob().checkpoint.index, 3);
});
test("weighted selection preserves empirical proportions and zero-count exclusion", () => {
  const xs = [
    { id: "a", weight: 1 },
    { id: "b", weight: 3 },
    { id: "zero", weight: 0 },
  ];
  assert.equal(weighted(xs, () => 0)?.id, "a");
  assert.equal(weighted(xs, () => 0.25)?.id, "b");
  let n = 0;
  for (let i = 0; i < 400; i++)
    if (weighted(xs, () => i / 400)?.id === "b") n++;
  assert.equal(n, 300);
  assert.equal(weighted([{ weight: 0 }]), undefined);
});
test("transpositions normalize clocks but preserve castling and legal en passant", () => {
  const a = new Chess(),
    b = new Chess();
  ["Nf3", "Nf6", "g3", "g6"].forEach((m) => a.move(m));
  ["g3", "g6", "Nf3", "Nf6"].forEach((m) => b.move(m));
  assert.equal(positionKey(a.fen()), positionKey(b.fen()));
  assert.notEqual(
    positionKey(a.fen()),
    positionKey(a.fen().replace("KQkq", "-")),
  );
  const ep = new Chess();
  ["e4", "a6", "e5", "d5"].forEach((m) => ep.move(m));
  assert.notEqual(
    positionKey(ep.fen()),
    positionKey(ep.fen().replace("d6", "-")),
  );
});
test("assisted completion never counts as unaided recall", () => {
  const now = 1000;
  assert.equal(schedule(undefined, true, false, now).interval, 1);
  assert.equal(schedule({ interval: 3, streak: 2 }, true, true, now).streak, 0);
  assert.equal(schedule(undefined, false, false, now).due, 601000);
});
test("statistical denominator is analyzed owner moves, including partial coverage", () => {
  const g = all("SELECT * FROM games")[0];
  run(
    "INSERT INTO analysis VALUES(?,?,?,?)",
    g.id,
    1,
    "test",
    JSON.stringify({ severity: "mistake", category: "evaluation-loss" }),
  );
  const s = statistics({});
  assert.equal(s.moves, 2);
  assert.equal(s.analyzed, 1);
  assert.equal(s.series[0].rate, 100);
  assert.equal(s.series[0].coverage, 0.5);
  assert.equal(s.weaknesses[0].trend, "insufficient");
});
test("recursive PGN alternatives and branch comments stay legal", () => {
  const result = repertoirePgn(
    "1. e4 e5 (1... c5 2. Nf3 {Сицилианская ветка} (2. Nc3)) 2. Nf3 Nc6 *",
  );
  assert.equal(result.length, 3);
  assert.ok(result.some((r) => r.moves.join(" ") === "e2e4 c7c5 g1f3"));
  assert.ok(result.some((r) => r.notes.includes("Сицилианская")));
  assert.throws(() => repertoirePgn("1. e4 (1. d4"));
});
after(() => db.close());
