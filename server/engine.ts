import { spawn, ChildProcessWithoutNullStreams } from "node:child_process";
import { createInterface } from "node:readline";
import { readdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve } from "node:path";
import { Chess } from "chess.js";
import { one, run } from "./db.ts";
import { type Score, loss, uci } from "../shared/chess.ts";
export type Settings = {
  screenNodes: number;
  deepNodes: number;
  mode: "screen" | "deep";
  thresholds: { inaccuracy: number; mistake: number; blunder: number };
};
export const defaults: Settings = {
  screenNodes: 20000,
  deepNodes: 200000,
  mode: "screen",
  thresholds: { inaccuracy: 50, mistake: 100, blunder: 200 },
};
export type Search = {
  score: Score;
  depth: number;
  nodes: number;
  pv: string[];
  bestmove: string;
  engine: string;
  budget: number;
  elapsed: number;
};
export class Engine {
  child: ChildProcessWithoutNullStreams;
  listeners = new Set<(s: string) => void>();
  engine = "";
  dead = false;
  constructor() {
    const dir = resolve("node_modules/stockfish/src");
    const file = readdirSync(dir).find(
      (f) => /^stockfish-.*single.*\.js$/.test(f) && !f.includes("lite"),
    );
    if (!file) throw new Error("Файл Stockfish не найден.");
    this.child = spawn(process.execPath, [resolve(dir, file)], {
      stdio: "pipe",
    });
    const rl = createInterface({ input: this.child.stdout });
    rl.on("line", (s) => this.listeners.forEach((fn) => fn(s)));
    this.child.on("error", () => {
      this.dead = true;
      this.listeners.forEach((fn) => fn("ENGINE_EXIT"));
    });
    this.child.stdin.on("error", () => {});
    this.child.on("exit", () => {
      this.dead = true;
      this.listeners.forEach((fn) => fn("ENGINE_EXIT"));
    });
    this.child.stderr.on("data", () => {});
  }
  send(s: string) {
    this.child.stdin.write(s + "\n");
  }
  wait(end: (s: string) => boolean, action: () => void, timeout = 120000) {
    return new Promise<void>((resolve, reject) => {
      if (this.dead) {
        reject(new Error("Процесс Stockfish недоступен."));
        return;
      }
      const timer = setTimeout(() => {
        this.listeners.delete(fn);
        this.child.kill();
        reject(new Error("Истекло время ожидания Stockfish."));
      }, timeout);
      const fn = (s: string) => {
        if (end(s) || s === "ENGINE_EXIT") {
          clearTimeout(timer);
          this.listeners.delete(fn);
          s === "ENGINE_EXIT"
            ? reject(new Error("Процесс Stockfish завершился."))
            : resolve();
        }
      };
      this.listeners.add(fn);
      action();
    });
  }
  async init() {
    const fn = (s: string) => {
      if (s.startsWith("id name ")) this.engine = s.slice(8);
    };
    this.listeners.add(fn);
    await this.wait(
      (s) => s === "uciok",
      () => this.send("uci"),
    );
    this.listeners.delete(fn);
    this.send("setoption name Hash value 64");
    this.send("setoption name Threads value 1");
    await this.wait(
      (s) => s === "readyok",
      () => this.send("isready"),
    );
  }
  async search(
    fen: string,
    nodes: number,
    root?: string,
    history?: { start: string; moves: string[] },
  ): Promise<Search> {
    const key = createHash("sha256")
      .update(
        JSON.stringify({
          fen,
          history,
          engine: this.engine,
          package: JSON.parse(
            readFileSync("node_modules/stockfish/package.json", "utf8"),
          ).version,
          nodes,
          root,
          hash: 64,
          threads: 1,
        }),
      )
      .digest("hex");
    const cached = one("SELECT result FROM engine_cache WHERE key=?", key);
    if (cached) return JSON.parse(cached.result);
    const c = new Chess(fen);
    if (c.isCheckmate() || c.isStalemate() || c.isInsufficientMaterial())
      return {
        score: { type: c.isCheckmate() ? "mate" : "cp", value: 0 },
        depth: 0,
        nodes: 0,
        pv: [],
        bestmove: "(none)",
        engine: this.engine,
        budget: nodes,
        elapsed: 0,
      };
    this.send("ucinewgame");
    await this.wait(
      (s) => s === "readyok",
      () => this.send("isready"),
    );
    this.send(
      history
        ? `position fen ${history.start} moves ${history.moves.join(" ")}`
        : `position fen ${fen}`,
    );
    let result: Search = {
      score: { type: "cp", value: 0 },
      depth: 0,
      nodes: 0,
      pv: [],
      bestmove: "",
      engine: this.engine,
      budget: nodes,
      elapsed: 0,
    };
    let seen = false;
    const started = Date.now();
    const fn = (s: string) => {
      const score = s.match(/score (cp|mate) (-?\d+)/);
      if (score && !s.includes("bound")) {
        seen = true;
        result.score = {
          type: score[1] as "cp" | "mate",
          value: Number(score[2]),
        };
        result.depth = Number(s.match(/depth (\d+)/)?.[1] || 0);
        result.nodes = Number(s.match(/nodes (\d+)/)?.[1] || 0);
        result.pv = s.includes(" pv ")
          ? s.split(" pv ")[1].trim().split(" ")
          : [];
      }
      if (s.startsWith("bestmove")) result.bestmove = s.split(" ")[1];
    };
    this.listeners.add(fn);
    try {
      await this.wait(
        (s) => s.startsWith("bestmove"),
        () =>
          this.send(`go nodes ${nodes}${root ? " searchmoves " + root : ""}`),
      );
    } finally {
      this.listeners.delete(fn);
    }
    if (!seen) throw new Error("Stockfish не вернул точную оценку.");
    result.elapsed = Date.now() - started;
    run(
      "INSERT OR REPLACE INTO engine_cache VALUES(?,?,?)",
      key,
      JSON.stringify(result),
      Date.now(),
    );
    return result;
  }
  async compare(
    fen: string,
    played: string,
    nodes: number,
    history?: { start: string; moves: string[] },
  ) {
    const best = await this.search(fen, nodes, undefined, history);
    const actual =
      best.bestmove === played
        ? best
        : await this.search(fen, nodes, played, history);
    return { best, played: actual };
  }
  close() {
    this.child.kill();
  }
}
export function explain(
  result: ReturnType<typeof loss>,
  played: string,
  recommended: string,
) {
  if (result.category === "missed-mate")
    return `После ${played} форсированный мат, найденный движком, не подтверждается. Проверьте ${recommended} и продолжение.`;
  if (result.category === "allowed-mate")
    return `После ${played} движок находит форсированный мат соперника. Альтернатива: ${recommended}.`;
  return `При одинаковом лимите узлов ход ${played} уступает ${recommended} на ${((result.cpLoss || 0) / 100).toFixed(2)} пешки по оценке движка. Причина позиционной потери автоматически не установлена.`;
}
