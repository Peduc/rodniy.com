import { performance } from "node:perf_hooks";
import { Chess } from "chess.js";
import { Engine } from "../server/engine.ts";
const c = new Chess();
const fixtures = [
  ["e4"],
  ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "Bg5", "Be7", "e3", "O-O"],
  ["f3", "e5", "g4"],
];
const engine = new Engine();
try {
  await engine.init();
  const results = [];
  for (const moves of fixtures) {
    c.reset();
    for (const m of moves) c.move(m);
    const start = performance.now();
    const result = await engine.search(c.fen(), 20000);
    results.push({
      fen: c.fen(),
      elapsedMs: Math.round(performance.now() - start),
      ...result,
    });
  }
  console.log(
    JSON.stringify(
      {
        runtime: process.version,
        platform: process.platform,
        arch: process.arch,
        results,
      },
      null,
      2,
    ),
  );
} finally {
  engine.close();
}
