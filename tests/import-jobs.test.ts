import { test, after } from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
process.env.DATABASE_PATH =
  "/tmp/rodniy-validation/import-" + randomUUID() + ".sqlite";
const { db, all, one, run, enqueue, claimJob, recoverJobs } =
  await import("../server/db.ts");
const { processJob } = await import("../server/worker.ts");
const original = globalThis.fetch;
const owner = "fixture-owner";
const pgn = (month: string) =>
  `[Event "Import fixture"]\n[White "${owner}"]\n[Black "opponent"]\n[Date "2025.${month}.01"]\n[Result "0-1"]\n\n1. f3 e5 2. g4 Qh4# 0-1`;
const months = ["01", "02"];
const calls: string[] = [];
let failSecond = true;
globalThis.fetch = async (input: any) => {
  const url = String(input);
  calls.push(url);
  if (url.endsWith("/archives"))
    return Response.json({
      archives: months
        .slice()
        .reverse()
        .map(
          (m) => `https://api.chess.com/pub/player/${owner}/games/2025/${m}`,
        ),
    });
  const month = url.split("/").at(-1)!;
  if (month === "02" && failSecond)
    throw new Error("Simulated connection interruption");
  return Response.json({
    games: [
      {
        rules: "chess",
        pgn: pgn(month),
        url: `https://www.chess.com/game/live/fixture-${month}`,
        end_time: Date.parse(`2025-${month}-01T00:00:00Z`) / 1000,
      },
      { rules: "chess960", pgn: "unsupported" },
    ],
  });
};
test("import checkpoint survives interruption and resumes in chronological order", async () => {
  const id = enqueue("import", { owner });
  const job = claimJob();
  assert.equal(job.id, id);
  await assert.rejects(processJob(job), /interruption/);
  assert.equal(all("SELECT * FROM games").length, 1);
  const saved = one("SELECT * FROM jobs WHERE id=?", id);
  assert.equal(JSON.parse(saved.checkpoint).index, 1);
  run("UPDATE jobs SET heartbeat=? WHERE id=?", Date.now() - 100000, id);
  recoverJobs();
  failSecond = false;
  const resumed = claimJob();
  const result = await processJob(resumed);
  assert.equal(result.imported, 2);
  assert.equal(result.excluded, 2);
  const imported = all("SELECT date FROM games ORDER BY rowid");
  assert.ok(imported[0].date < imported[1].date);
  assert.equal(calls.filter((x) => x.endsWith("/01")).length, 1);
  run("UPDATE jobs SET status='complete' WHERE id=?", id);
  const queued = all(
    "SELECT payload FROM jobs WHERE kind='analysis' ORDER BY created,rowid",
  ).map((j) => JSON.parse(j.payload).gameId);
  assert.equal(queued[0], one("SELECT id FROM games ORDER BY date LIMIT 1").id);
  const again = {
    id: enqueue("import", { owner }),
    kind: "import",
    payload: { owner },
    checkpoint: {},
  };
  const sync = await processJob(again);
  assert.equal(sync.imported, 0);
  assert.equal(sync.duplicates, 2);
  assert.equal(all("SELECT * FROM games").length, 2);
});
test("cancelled jobs are not reclaimed as work", () => {
  run("UPDATE jobs SET status='complete'");
  const id = enqueue("analysis", { gameId: "unused" });
  run(
    "UPDATE jobs SET status='running',cancel=1,heartbeat=? WHERE id=?",
    Date.now() - 100000,
    id,
  );
  recoverJobs();
  assert.equal(
    one("SELECT status FROM jobs WHERE id=?", id).status,
    "cancelled",
  );
  assert.equal(claimJob(), undefined);
});
after(() => {
  globalThis.fetch = original;
  db.close();
});
