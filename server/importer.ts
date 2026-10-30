import { identifyOpening } from "../shared/openings.ts";
import { createHash } from "node:crypto";
import { replay, uci } from "../shared/chess.ts";
import { one, run, transaction, enqueue } from "./db.ts";
export function importGame(
  pgn: string,
  owner: string,
  raw: any = {},
  source = "pgn",
) {
  if (raw.rules && raw.rules !== "chess")
    return { excluded: "unsupported-variant" };
  const { headers: h, moves } = replay(pgn);
  if (h.Variant && !["Standard", "Chess"].includes(h.Variant))
    return { excluded: "unsupported-variant" };
  if (!["1-0", "0-1", "1/2-1/2"].includes(h.Result))
    return { excluded: "unfinished" };
  const white = h.White || raw.white?.username || "",
    black = h.Black || raw.black?.username || "";
  const color =
    white.toLowerCase() === owner.toLowerCase()
      ? "w"
      : black.toLowerCase() === owner.toLowerCase()
        ? "b"
        : null;
  if (!color) return { excluded: "different-owner" };
  const url = raw.url || (/^https?:\/\//.test(h.Link || "") ? h.Link : null);
  const id = createHash("sha256")
    .update(
      url ||
        JSON.stringify([
          h.Date,
          h.UTCTime,
          white,
          black,
          h.Result,
          moves.map(uci),
        ]),
    )
    .digest("hex");
  if (one("SELECT id FROM games WHERE id=?", id))
    return { id, duplicate: true };
  const d = raw.end_time
    ? new Date(raw.end_time * 1000).toISOString()
    : /^\d{4}\.\d{2}\.\d{2}$/.test(h.UTCDate || h.Date || "")
      ? `${(h.UTCDate || h.Date).replaceAll(".", "-")}T${/^\d{2}:\d{2}:\d{2}$/.test(h.UTCTime || "") ? h.UTCTime : "00:00:00"}Z`
      : "1970-01-01T00:00:00Z";
  const rating = Number(color === "w" ? h.WhiteElo : h.BlackElo) || null,
    opponentRating = Number(color === "w" ? h.BlackElo : h.WhiteElo) || null;
  const tc = raw.time_control || h.TimeControl || "?";
  const seconds = Number(tc.split("+")[0]);
  const timeClass =
    raw.time_class ||
    (tc.includes("/")
      ? "daily"
      : !Number.isFinite(seconds)
        ? "other"
        : seconds < 180
          ? "bullet"
          : seconds < 600
            ? "blitz"
            : "rapid");
  transaction(() => {
    run(
      "INSERT INTO games(id,source,url,pgn,date,owner,color,opponent,white,black,rating,opponent_rating,result,time_class,time_control,opening,plies,player_moves) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      id,
      source,
      url,
      pgn,
      d,
      owner,
      color,
      color === "w" ? black : white,
      white,
      black,
      rating,
      opponentRating,
      h.Result,
      timeClass,
      tc,
      identifyOpening(moves)?.name || h.ECO || "Не определён",
      moves.length,
      moves.filter((m) => m.color === color).length,
    );
    moves.forEach((m, i) => {
      const pieces = m.before.split(" ")[0].replace(/[^qrbnQRBN]/g, "").length;
      run(
        "INSERT INTO moves VALUES(?,?,?,?,?,?,?)",
        id,
        i + 1,
        m.before,
        uci(m),
        m.san,
        m.color,
        i < 20 ? "opening" : pieces <= 6 ? "endgame" : "middlegame",
      );
    });
  });
  return { id, duplicate: false };
}
export function queueAnalysis(gameId: string, settings: any) {
  const active = one(
    "SELECT id FROM jobs WHERE kind='analysis' AND json_extract(payload,'$.gameId')=? AND status IN ('queued','running')",
    gameId,
  );
  if (active) return active.id;
  run("UPDATE games SET analysis_status='queued' WHERE id=?", gameId);
  return enqueue("analysis", { gameId, settings });
}
