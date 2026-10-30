import { DatabaseSync } from "node:sqlite";
import { mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { Chess } from "chess.js";
import { randomUUID } from "node:crypto";
import { lineNotes } from "../shared/line-notes.ts";
import { repertoires } from "../shared/repertoires.ts";
import { positionKey, uci, playUci } from "../shared/chess.ts";
const path = resolve(process.env.DATABASE_PATH || "data/chess.sqlite");
mkdirSync(dirname(path), { recursive: true });
export const db = new DatabaseSync(path);
db.exec(
  "PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000;",
);
db.exec(
  readFileSync(
    new URL("../migrations/001_initial.sql", import.meta.url),
    "utf8",
  ),
);
export const all = (sql: string, ...args: any[]) =>
  db.prepare(sql).all(...args) as any[];
export const one = (sql: string, ...args: any[]) =>
  db.prepare(sql).get(...args) as any;
export const run = (sql: string, ...args: any[]) =>
  db.prepare(sql).run(...args);
export function transaction<T>(f: () => T): T {
  db.exec("BEGIN IMMEDIATE");
  try {
    const x = f();
    db.exec("COMMIT");
    return x;
  } catch (e) {
    db.exec("ROLLBACK");
    throw e;
  }
}
export function setting(key: string, fallback: any) {
  const row = one("SELECT value FROM settings WHERE key=?", key);
  return row ? JSON.parse(row.value) : fallback;
}
export function setSetting(key: string, value: any) {
  run(
    "INSERT OR REPLACE INTO settings VALUES(?,?)",
    key,
    JSON.stringify(value),
  );
}
export function rebuildEdges(id: string) {
  run("DELETE FROM repertoire_edges WHERE repertoire_id=?", id);
  for (const l of all("SELECT * FROM lines WHERE repertoire_id=?", id)) {
    const c = new Chess();
    for (const move of JSON.parse(l.moves)) {
      const key = positionKey(c.fen());
      playUci(c, move);
      run(
        "INSERT OR IGNORE INTO repertoire_edges VALUES(?,?,?,0)",
        id,
        key,
        move,
      );
    }
  }
}
export function addLine(id: string, name: string, moves: string[], notes = "") {
  const c = new Chess();
  for (const m of moves) playUci(c, m);
  const lineId = randomUUID();
  run(
    "INSERT INTO lines VALUES(?,?,?,?,?)",
    lineId,
    id,
    name,
    JSON.stringify(moves),
    notes,
  );
  rebuildEdges(id);
  return lineId;
}
if (!setting("seeded", false))
  transaction(() => {
    for (const r of repertoires) {
      run(
        "INSERT OR IGNORE INTO repertoires VALUES(?,?,?,?,?)",
        r.id,
        r.name,
        r.english,
        r.color,
        r.notes,
      );
      r.lines.forEach((line, i) => {
        const c = new Chess();
        const moves = line.split(" ").map((s) => uci(c.move(s)));
        addLine(
          r.id,
          `Вариант ${i + 1}`,
          moves,
          lineNotes[r.id]?.[i] || r.notes,
        );
      });
    }
    setSetting("seeded", true);
  });
export function enqueue(kind: string, payload: any) {
  const id = randomUUID();
  run(
    "INSERT INTO jobs(id,kind,payload,created) VALUES(?,?,?,?)",
    id,
    kind,
    JSON.stringify(payload),
    Date.now(),
  );
  return id;
}
export function recoverJobs(now = Date.now()) {
  return run(
    "UPDATE jobs SET status=CASE WHEN cancel=1 THEN 'cancelled' ELSE 'queued' END,heartbeat=NULL WHERE status='running' AND heartbeat<?",
    now - 90000,
  );
}
export function claimJob() {
  return transaction(() => {
    const j = one(
      "SELECT * FROM jobs WHERE status='queued' AND available<=? AND cancel=0 ORDER BY created,rowid LIMIT 1",
      Date.now(),
    );
    if (j) {
      run(
        "UPDATE jobs SET status='running',attempts=attempts+1,heartbeat=? WHERE id=?",
        Date.now(),
        j.id,
      );
      return {
        ...j,
        payload: JSON.parse(j.payload),
        checkpoint: JSON.parse(j.checkpoint),
      };
    }
  });
}
