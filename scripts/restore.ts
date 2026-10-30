import { DatabaseSync } from "node:sqlite";
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
const source = process.argv[2],
  target = resolve(process.env.DATABASE_PATH || "data/chess.sqlite");
if (!source)
  throw new Error(
    "Usage: stop web and worker, then node --import tsx scripts/restore.ts /absolute/backup.sqlite",
  );
if (existsSync(target))
  throw new Error(
    "Refusing to overwrite existing database. Move it aside deliberately, including WAL/SHM, before restore.",
  );
const db = new DatabaseSync(source, { readOnly: true });
const integrity = db.prepare("PRAGMA integrity_check").get();
db.close();
if (integrity?.integrity_check !== "ok")
  throw new Error("Backup failed integrity check.");
copyFileSync(source, target);
console.log("Database restored. Start the web and worker services.");
