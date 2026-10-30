import { Chess } from "chess.js";
import {
  all,
  one,
  run,
  setting,
  enqueue,
  claimJob,
  recoverJobs,
  setSetting,
} from "./db.ts";
import { cachedFetch } from "./providers.ts";
import { importGame, queueAnalysis } from "./importer.ts";
import { Engine, defaults, explain } from "./engine.ts";
import { loss, playUci } from "../shared/chess.ts";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
let stop = false;
let active: Engine | undefined;
process.on("SIGTERM", () => {
  stop = true;
  active?.close();
});
process.on("SIGINT", () => {
  stop = true;
  active?.close();
});
function check(id: string) {
  if (one("SELECT cancel FROM jobs WHERE id=?", id)?.cancel)
    throw new Error("CANCELLED");
}
export async function processJob(job: any) {
  if (job.kind === "import") {
    const owner = job.payload.owner;
    const archive = await cachedFetch(
      `https://api.chess.com/pub/player/${owner}/games/archives`,
      3600000,
    );
    const urls = [...archive.data.archives].sort();
    run("UPDATE jobs SET total=? WHERE id=?", urls.length, job.id);
    const cp = {
      index: 0,
      imported: 0,
      duplicates: 0,
      excluded: 0,
      excludedByReason: {} as Record<string, number>,
      failures: [] as any[],
      ...job.checkpoint,
    };
    for (let i = cp.index; i < urls.length; i++) {
      check(job.id);
      const url = urls[i];
      if (
        !new RegExp(
          `^https://api\\.chess\\.com/pub/player/${owner}/games/\\d{4}/\\d{2}$`,
          "i",
        ).test(url)
      )
        throw new Error("Неверный адрес архива.");
      const archive = await cachedFetch(url, 3600000);
      for (const game of archive.data.games.sort(
        (a: any, b: any) => a.end_time - b.end_time,
      )) {
        check(job.id);
        try {
          const result = importGame(game.pgn, owner, game, "chess.com");
          if (result.excluded) {
            cp.excluded++;
            cp.excludedByReason[result.excluded] =
              (cp.excludedByReason[result.excluded] || 0) + 1;
          } else if (result.duplicate) cp.duplicates++;
          else cp.imported++;
        } catch (e) {
          cp.failures.push({
            archive: url,
            game: game.url,
            error: String(e).slice(0, 200),
          });
        }
      }
      cp.index = i + 1;
      run(
        "UPDATE jobs SET progress=?,checkpoint=? WHERE id=?",
        i + 1,
        JSON.stringify(cp),
        job.id,
      );
    }
    for (const g of all(
      "SELECT id FROM games WHERE owner=? AND analysis_status='pending' ORDER BY date,id",
      owner,
    ))
      queueAnalysis(g.id, setting("analysis", defaults));
    setSetting("lastSync", Date.now());
    return cp;
  }
  if (job.kind === "analysis" || job.kind === "position") {
    const engine = new Engine();
    active = engine;
    try {
      await engine.init();
      if (job.kind === "position") {
        const { fen, moves, start, nodes } = job.payload;
        return await engine.search(
          fen,
          nodes,
          undefined,
          start ? { start, moves } : undefined,
        );
      }
      const { gameId, settings } = job.payload;
      const s = { ...defaults, ...settings };
      const game = one("SELECT * FROM games WHERE id=?", gameId);
      if (!game) throw new Error("Партия не найдена.");
      const moves = all(
        "SELECT * FROM moves WHERE game_id=? ORDER BY ply",
        gameId,
      );
      run("UPDATE games SET analysis_status='running' WHERE id=?", gameId);
      const own = moves.filter((m) => m.color === game.color);
      run("UPDATE jobs SET total=? WHERE id=?", own.length, job.id);
      const settingsKey = JSON.stringify({ engine: engine.engine, ...s });
      let done = 0;
      for (const m of own) {
        check(job.id);
        const cached = one(
          "SELECT settings_key FROM analysis WHERE game_id=? AND ply=?",
          gameId,
          m.ply,
        );
        if (cached?.settings_key === settingsKey) {
          done++;
          continue;
        }
        const history = {
          start: moves[0].fen,
          moves: moves.filter((x) => x.ply < m.ply).map((x) => x.uci),
        };
        let pair = await engine.compare(
          m.fen,
          m.uci,
          s.mode === "deep" ? s.deepNodes : s.screenNodes,
          history,
        );
        let metric = loss(pair.best.score, pair.played.score, s.thresholds);
        let deep = s.mode === "deep";
        if (!deep && metric.severity) {
          check(job.id);
          pair = await engine.compare(m.fen, m.uci, s.deepNodes, history);
          metric = loss(pair.best.score, pair.played.score, s.thresholds);
          deep = true;
        }
        let recommendation = pair.best.bestmove;
        try {
          recommendation = playUci(new Chess(m.fen), recommendation).san;
        } catch {}
        const result = {
          ...metric,
          ...pair,
          deep,
          recommendation,
          explanation: metric.severity
            ? explain(metric, m.san, recommendation)
            : null,
          settings: s,
        };
        run(
          "INSERT OR REPLACE INTO analysis VALUES(?,?,?,?)",
          gameId,
          m.ply,
          settingsKey,
          JSON.stringify(result),
        );
        if (metric.severity)
          run(
            "INSERT OR IGNORE INTO review(game_id,ply,due) VALUES(?,?,?)",
            gameId,
            m.ply,
            Date.now(),
          );
        else run("DELETE FROM review WHERE game_id=? AND ply=?", gameId, m.ply);
        run("UPDATE jobs SET progress=? WHERE id=?", ++done, job.id);
      }
      run("UPDATE games SET analysis_status='complete' WHERE id=?", gameId);
      return { positions: done, engine: engine.engine };
    } finally {
      engine.close();
      active = undefined;
    }
  }
  throw new Error("Неизвестный тип задания.");
}
async function main() {
  console.log("Chess worker ready; concurrency=1");
  while (!stop) {
    recoverJobs();
    const job = claimJob();
    if (!job) {
      await sleep(1000);
      continue;
    }
    const heartbeat = setInterval(
      () => run("UPDATE jobs SET heartbeat=? WHERE id=?", Date.now(), job.id),
      10000,
    );
    try {
      const result = await processJob(job);
      check(job.id);
      run(
        "UPDATE jobs SET status='complete',result=?,heartbeat=? WHERE id=?",
        JSON.stringify(result),
        Date.now(),
        job.id,
      );
    } catch (e) {
      const cancelled = String(e).includes("CANCELLED");
      const retry = !cancelled && job.attempts < 2;
      run(
        "UPDATE jobs SET status=?,error=?,available=? WHERE id=?",
        cancelled ? "cancelled" : retry ? "queued" : "failed",
        cancelled
          ? null
          : (e instanceof Error ? e.message : String(e)).slice(0, 500),
        Date.now() + 10000 * 2 ** job.attempts,
        job.id,
      );
      if (job.kind === "analysis")
        run(
          "UPDATE games SET analysis_status=? WHERE id=?",
          cancelled ? "cancelled" : retry ? "queued" : "failed",
          job.payload.gameId,
        );
    } finally {
      clearInterval(heartbeat);
    }
  }
}
if (process.argv[1]?.endsWith("worker.ts"))
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
