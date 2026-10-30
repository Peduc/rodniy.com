import { openingReferences } from "../shared/openings.ts";
import { all, one } from "./db.ts";
import { positionKey, playUci } from "../shared/chess.ts";
import { Chess } from "chess.js";
export function gameFilter(q: Record<string, any>) {
  const clauses = ["1=1"];
  const args: any[] = [];
  for (const [key, column] of Object.entries({
    color: "g.color",
    time: "g.time_class",
    opening: "g.opening",
  }))
    if (q[key]) {
      clauses.push(column + "=?");
      args.push(q[key]);
    }
  if (q.from) {
    clauses.push("g.date>=?");
    args.push(q.from);
  }
  if (q.to) {
    clauses.push("g.date<=?");
    args.push(q.to + "T23:59:59Z");
  }
  return { sql: clauses.join(" AND "), args };
}
export function statistics(q: Record<string, any>) {
  const f = gameFilter(q);
  let extra = "";
  const args = [...f.args];
  if (q.phase) {
    extra += " AND m.phase=?";
    args.push(q.phase);
  }
  const rows = all(
    `SELECT g.id,g.date,g.time_class,m.ply,a.result FROM games g JOIN moves m ON m.game_id=g.id LEFT JOIN analysis a ON a.game_id=m.game_id AND a.ply=m.ply WHERE ${f.sql} AND m.color=g.color${extra} ORDER BY g.date`,
    ...args,
  );
  const months: Record<string, any> = {};
  const groups: Record<string, any> = {};
  for (const r of rows) {
    const month = r.date.slice(0, 7);
    const bucket = (months[month] ||= {
      month,
      moves: 0,
      analyzed: 0,
      mistakes: 0,
      severe: 0,
      gameIds: new Set<string>(),
    });
    bucket.moves++;
    bucket.gameIds.add(r.id);
    if (!r.result) continue;
    bucket.analyzed++;
    const a = JSON.parse(r.result);
    if (a.severity && (!q.category || a.category === q.category)) {
      bucket.mistakes++;
      if (a.severity === "blunder") bucket.severe++;
      const k = a.category;
      groups[k] ||= { category: k, count: 0, examples: [] };
      groups[k].count++;
      if (groups[k].examples.length < 8)
        groups[k].examples.push({ gameId: r.id, ply: r.ply });
    }
  }
  const series = Object.values(months).map((m) => ({
    ...m,
    games: m.gameIds.size,
    gameIds: [...m.gameIds],
    rate: m.analyzed ? (100 * m.mistakes) / m.analyzed : 0,
    coverage: m.moves ? m.analyzed / m.moves : 0,
  }));
  const days = Math.max(7, Math.min(365, Number(q.days) || 90));
  const end = q.to ? Date.parse(q.to + "T23:59:59Z") : Date.now();
  const recent = rows.filter(
    (r) =>
      Date.parse(r.date) > end - days * 86400000 && Date.parse(r.date) <= end,
  );
  const older = rows.filter(
    (r) =>
      Date.parse(r.date) > end - 2 * days * 86400000 &&
      Date.parse(r.date) <= end - days * 86400000,
  );
  const summarize = (rs: any[], cat: string) => {
    const analyzed = rs.filter((r) => r.result);
    const count = analyzed.filter((r) => {
      const a = JSON.parse(r.result);
      return a.severity && a.category === cat;
    }).length;
    return {
      moves: rs.length,
      analyzed: analyzed.length,
      count,
      rate: analyzed.length ? (count / analyzed.length) * 100 : 0,
      coverage: rs.length ? analyzed.length / rs.length : 0,
    };
  };
  const weaknesses = Object.values(groups).map((g) => {
    const a = summarize(older, g.category),
      b = summarize(recent, g.category);
    const enough =
      !!q.time &&
      a.analyzed >= 200 &&
      b.analyzed >= 200 &&
      a.coverage >= 0.9 &&
      b.coverage >= 0.9;
    let trend = "insufficient";
    if (enough) {
      trend =
        b.count === 0
          ? "not-observed"
          : a.count === 0 && b.count >= 3
            ? "emerging"
            : b.rate < a.rate * 0.7
              ? "improving"
              : "persistent";
    }
    return { ...g, older: a, recent: b, trend };
  });
  return {
    games: new Set(rows.map((r) => r.id)).size,
    moves: rows.length,
    analyzed: rows.filter((r) => r.result).length,
    mistakes: series.reduce((s, m) => s + m.mistakes, 0),
    series,
    weaknesses,
    days,
  };
}
export function repertoireLinks(gameId: string) {
  const game = one("SELECT * FROM games WHERE id=?", gameId);
  const moves = all("SELECT * FROM moves WHERE game_id=? ORDER BY ply", gameId);
  return all("SELECT * FROM repertoires WHERE color=?", game.color).flatMap(
    (r) => {
      const paths = all("SELECT * FROM lines WHERE repertoire_id=?", r.id);
      let best: any;
      let matched = 0;
      let firstMatch = 0;
      let deviation: number | null = null;
      let mistakes = 0;
      for (const l of paths) {
        const c = new Chess();
        const positions = new Map<string, number>();
        JSON.parse(l.moves).forEach((u: string, i: number) => {
          playUci(c, u);
          if (i >= 2) positions.set(positionKey(c.fen()), i + 1);
        });
        let score = 0;
        let first = 0;
        for (const m of moves) {
          if (positions.has(positionKey(m.fen))) {
            score++;
            if (!first) first = m.ply;
          }
        }
        if (score > matched) {
          matched = score;
          best = l;
          firstMatch = first;
        }
      }
      // Require a named opening position, not merely a shared first move.
      const reference = openingReferences.filter((o) => o.id === r.id);
      const recognized = moves.some((m) =>
        reference.some((o) => o.position === positionKey(m.fen)),
      );
      if (!best || !recognized) return [];
      for (const m of moves.filter(
        (m) => m.color === game.color && m.ply >= firstMatch,
      )) {
        const choices = all(
          "SELECT uci FROM repertoire_edges WHERE repertoire_id=? AND position=?",
          r.id,
          positionKey(m.fen),
        );
        if (
          choices.length &&
          !choices.some((x) => x.uci === m.uci) &&
          !deviation
        )
          deviation = m.ply;
        const a = one(
          "SELECT result FROM analysis WHERE game_id=? AND ply=?",
          gameId,
          m.ply,
        );
        if (choices.length && a && JSON.parse(a.result).severity) mistakes++;
      }
      return [
        {
          id: r.id,
          name: r.name,
          lineId: best.id,
          followed: matched,
          deviation,
          mistakes,
        },
      ];
    },
  );
}
export function practicePriorities() {
  const totals: Record<string, any> = {};
  for (const g of all(
    "SELECT game_id, count(*) AS n FROM review GROUP BY game_id ORDER BY n DESC LIMIT 200",
  )) {
    for (const l of repertoireLinks(g.game_id)) {
      if (!l.mistakes) continue;
      const k = l.lineId;
      totals[k] ||= { ...l, games: 0, mistakes: 0 };
      totals[k].games++;
      totals[k].mistakes += l.mistakes;
    }
  }
  return Object.values(totals).sort((a, b) => b.mistakes - a.mistakes);
}
