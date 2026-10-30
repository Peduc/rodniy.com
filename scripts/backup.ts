import { DatabaseSync, backup } from "node:sqlite";
import { resolve } from "node:path";
const target = process.argv[2];
if (!target)
  throw new Error(
    "Usage: node --import tsx scripts/backup.ts /absolute/backup.sqlite",
  );
const db = new DatabaseSync(
  resolve(process.env.DATABASE_PATH || "data/chess.sqlite"),
);
await backup(db, target);
db.close();
console.log("Consistent SQLite backup created.");
