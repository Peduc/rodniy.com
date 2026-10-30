import express from "express";
import { randomBytes, createHash, timingSafeEqual } from "node:crypto";
import { resolve } from "node:path";
import { Chess } from "chess.js";
import { z } from "zod";
import {
  all,
  one,
  run,
  setting,
  setSetting,
  enqueue,
  addLine,
  rebuildEdges,
  transaction,
} from "./db.ts";
import { defaults } from "./engine.ts";
import { username, explorer, ratings, speeds } from "./providers.ts";
import { importGame, queueAnalysis } from "./importer.ts";
import {
  statistics,
  gameFilter,
  repertoireLinks,
  practicePriorities,
} from "./analytics.ts";
import {
  splitPgn,
  replay,
  uci,
  positionKey,
  schedule,
  playUci,
  repertoirePgn,
} from "../shared/chess.ts";
export const app = express();
app.disable("x-powered-by");
app.enable("strict routing");
app.use(express.json({ limit: "12mb" }));
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "same-origin");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; font-src 'self'; frame-ancestors 'none'",
  );
  next();
});
const api = express.Router();
const sessionHash = (s: string) => createHash("sha256").update(s).digest("hex");
api.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  if (!["GET", "HEAD", "OPTIONS"].includes(req.method) && req.headers.origin) {
    const allowed = process.env.APP_ORIGIN || "http://127.0.0.1:5173";
    if (req.headers.origin !== allowed)
      return res.status(403).json({ error: "Недопустимый источник запроса." });
  }
  next();
});
const attempts = new Map<string, { count: number; until: number }>();
api.get("/session", (req, res) => {
  const token = req.headers.cookie?.match(/(?:^|; )chess_session=([^;]+)/)?.[1];
  res.json({
    authenticated:
      !!token &&
      !!one(
        "SELECT token FROM sessions WHERE token=? AND expires>?",
        sessionHash(token),
        Date.now(),
      ),
    configured: !!process.env.OWNER_PASSWORD,
  });
});
api.post("/login", (req, res) => {
  const ip = req.ip || "local";
  const a = attempts.get(ip);
  if (a && a.until > Date.now() && a.count >= 10)
    return res
      .status(429)
      .json({ error: "Слишком много попыток. Повторите через 15 минут." });
  const password = process.env.OWNER_PASSWORD;
  if (!password)
    return res
      .status(503)
      .json({ error: "Владелец ещё не настроил пароль на сервере." });
  const candidate =
    typeof req.body.password === "string" ? req.body.password : "";
  if (
    !timingSafeEqual(
      Buffer.from(sessionHash(candidate)),
      Buffer.from(sessionHash(password)),
    )
  ) {
    attempts.set(ip, {
      count: a && a.until > Date.now() ? a.count + 1 : 1,
      until: Date.now() + 900000,
    });
    return res.status(401).json({ error: "Неверный пароль." });
  }
  attempts.delete(ip);
  const token = randomBytes(32).toString("hex");
  run("DELETE FROM sessions WHERE expires<?", Date.now());
  run(
    "INSERT INTO sessions VALUES(?,?)",
    sessionHash(token),
    Date.now() + 7 * 86400000,
  );
  res.cookie("chess_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/chess",
    maxAge: 7 * 86400000,
  });
  res.json({ ok: true });
});
api.use((req, res, next) => {
  const token = req.headers.cookie?.match(/(?:^|; )chess_session=([^;]+)/)?.[1];
  if (
    !token ||
    !one(
      "SELECT token FROM sessions WHERE token=? AND expires>?",
      sessionHash(token),
      Date.now(),
    )
  )
    return res.status(401).json({ error: "Войдите в личную мастерскую." });
  next();
});
api.post("/logout", (req, res) => {
  const token = req.headers.cookie?.match(/(?:^|; )chess_session=([^;]+)/)?.[1];
  if (token) run("DELETE FROM sessions WHERE token=?", sessionHash(token));
  res.clearCookie("chess_session", { path: "/chess" });
  res.json({ ok: true });
});
const settingsSchema = z
  .object({
    screenNodes: z.number().int().min(1000).max(1000000),
    deepNodes: z.number().int().min(1000).max(5000000),
    mode: z.enum(["screen", "deep"]),
    thresholds: z.object({
      inaccuracy: z.number().min(10).max(1000),
      mistake: z.number().min(20).max(2000),
      blunder: z.number().min(30).max(5000),
    }),
  })
  .refine(
    (x) =>
      x.deepNodes >= x.screenNodes &&
      x.thresholds.inaccuracy < x.thresholds.mistake &&
      x.thresholds.mistake < x.thresholds.blunder,
  );
api.get("/settings", (req, res) =>
  res.json({
    analysis: setting("analysis", defaults),
    owner: setting("owner", ""),
    lichessConfigured: !!process.env.LICHESS_TOKEN,
    lastSync: setting("lastSync", null),
    worker: one("SELECT MAX(heartbeat) AS last FROM jobs")?.last,
  }),
);
api.put("/settings", (req, res) => {
  const settings = settingsSchema.parse(req.body.analysis);
  setSetting("analysis", settings);
  if (req.body.owner) setSetting("owner", username(req.body.owner));
  res.json({ ok: true });
});
api.post("/import", (req, res) => {
  const owner = username(z.string().parse(req.body.owner));
  const active = one(
    "SELECT id FROM jobs WHERE kind='import' AND status IN ('queued','running')",
  );
  if (active) return res.json(active);
  setSetting("owner", owner);
  res.status(202).json({ id: enqueue("import", { owner }) });
});
api.post("/import/pgn", (req, res) => {
  const input = z
    .object({ owner: z.string(), pgn: z.string().min(1).max(10000000) })
    .parse(req.body);
  const owner = username(input.owner);
  const results = splitPgn(input.pgn).map((pgn) => {
    try {
      return importGame(pgn, owner);
    } catch {
      return { error: "Некорректный PGN: проверьте заголовки и ходы." };
    }
  });
  setSetting("owner", owner);
  for (const g of all(
    "SELECT id FROM games WHERE analysis_status='pending' ORDER BY date,id",
  ))
    queueAnalysis(g.id, setting("analysis", defaults));
  res.json({ results });
});
api.get("/jobs", (req, res) =>
  res.json(
    all("SELECT * FROM jobs ORDER BY created DESC LIMIT 100").map((j) => ({
      ...j,
      payload: JSON.parse(j.payload),
      checkpoint: JSON.parse(j.checkpoint),
      result: j.result ? JSON.parse(j.result) : null,
    })),
  ),
);
api.post("/jobs/:id/cancel", (req, res) => {
  run(
    "UPDATE jobs SET cancel=1,status=CASE WHEN status='queued' THEN 'cancelled' ELSE status END WHERE id=? AND status IN ('queued','running')",
    req.params.id,
  );
  res.json({ ok: true });
});
api.post("/jobs/:id/retry", (req, res) => {
  run(
    "UPDATE jobs SET cancel=0,status='queued',attempts=0,error=NULL,available=0 WHERE id=? AND status IN ('failed','cancelled')",
    req.params.id,
  );
  res.json({ ok: true });
});
api.get("/practice-priorities", (req, res) => res.json(practicePriorities()));
api.get("/stats", (req, res) => res.json(statistics(req.query)));
api.get("/games", (req, res) => {
  const f = gameFilter(req.query);
  if (req.query.phase) {
    f.sql +=
      " AND EXISTS (SELECT 1 FROM moves m WHERE m.game_id=g.id AND m.color=g.color AND m.phase=?)";
    f.args.push(req.query.phase);
  }
  if (req.query.category) {
    f.sql +=
      " AND EXISTS (SELECT 1 FROM analysis a WHERE a.game_id=g.id AND json_extract(a.result,'$.category')=?)";
    f.args.push(req.query.category);
  }

  res.json({
    items: all(
      `SELECT g.*, (SELECT count(*) FROM analysis a WHERE a.game_id=g.id) AS analyzed FROM games g WHERE ${f.sql} ORDER BY g.date DESC LIMIT 100 OFFSET ?`,
      ...f.args,
      Math.max(0, Number(req.query.offset) || 0),
    ),
    total: one(`SELECT count(*) AS n FROM games g WHERE ${f.sql}`, ...f.args).n,
  });
});
api.get("/games/:id", (req, res) => {
  const g = one("SELECT * FROM games WHERE id=?", req.params.id);
  if (!g) return res.status(404).json({ error: "Партия не найдена." });
  res.json({
    ...g,
    moves: all(
      "SELECT m.*,a.result FROM moves m LEFT JOIN analysis a ON a.game_id=m.game_id AND a.ply=m.ply WHERE m.game_id=? ORDER BY m.ply",
      g.id,
    ).map((m) => ({ ...m, analysis: m.result ? JSON.parse(m.result) : null })),
    links: repertoireLinks(g.id),
  });
});
api.post("/games/:id/analyze", (req, res) => {
  if (!one("SELECT id FROM games WHERE id=?", req.params.id))
    return res.status(404).json({ error: "Партия не найдена." });
  res.json({ id: queueAnalysis(req.params.id, setting("analysis", defaults)) });
});
api.post("/position", (req, res) => {
  const b = z
    .object({
      fen: z.string(),
      nodes: z.number().int().min(1000).max(5000000),
      gameId: z.string().optional(),
      ply: z.number().int().optional(),
    })
    .parse(req.body);
  new Chess(b.fen);
  let history = {};
  if (b.gameId && b.ply) {
    const moves = all(
      "SELECT * FROM moves WHERE game_id=? AND ply<=? ORDER BY ply",
      b.gameId,
      b.ply,
    );
    if (moves.at(-1)?.fen !== b.fen)
      throw new Error("Позиция не соответствует партии.");
    history = {
      start: moves[0].fen,
      moves: moves.slice(0, -1).map((m) => m.uci),
    };
  }
  res.json({ id: enqueue("position", { ...b, ...history }) });
});
api.get("/review", (req, res) => {
  const f = gameFilter(req.query);
  let extra = "";
  const args = [...f.args];
  if (req.query.phase) {
    extra += " AND m.phase=?";
    args.push(req.query.phase);
  }
  if (req.query.category) {
    extra += " AND json_extract(a.result,'$.category')=?";
    args.push(req.query.category);
  }
  res.json(
    all(
      `SELECT g.id AS gameId,g.date,g.opponent,g.color,g.opening,g.url,m.*,a.result,r.due,r.attempts FROM review r JOIN games g ON g.id=r.game_id JOIN moves m ON m.game_id=r.game_id AND m.ply=r.ply JOIN analysis a ON a.game_id=r.game_id AND a.ply=r.ply WHERE ${f.sql}${extra} ORDER BY r.due,g.date LIMIT 200`,
      ...args,
    ).map((m) => ({ ...m, analysis: JSON.parse(m.result) })),
  );
});
api.post("/review/:id/:ply", (req, res) => {
  const r = one(
    "SELECT * FROM review WHERE game_id=? AND ply=?",
    req.params.id,
    Number(req.params.ply),
  );
  if (!r) return res.status(404).json({ error: "Позиция не найдена." });
  const b = z
    .object({ correct: z.boolean(), assisted: z.boolean() })
    .parse(req.body);
  const s = schedule(r, b.correct, b.assisted);
  run(
    "UPDATE review SET due=?,streak=?,interval=?,attempts=attempts+1 WHERE game_id=? AND ply=?",
    s.due,
    s.streak,
    s.interval,
    req.params.id,
    Number(req.params.ply),
  );
  res.json(s);
});
api.get("/repertoires", (req, res) =>
  res.json(
    all("SELECT * FROM repertoires").map((r) => ({
      ...r,
      lineCount: one(
        "SELECT count(*) AS n FROM lines WHERE repertoire_id=?",
        r.id,
      ).n,
      trained: one(
        "SELECT count(*) AS n FROM training WHERE repertoire_id=?",
        r.id,
      ).n,
      due: one(
        "SELECT count(*) AS n FROM training WHERE repertoire_id=? AND due<=?",
        r.id,
        Date.now(),
      ).n,
    })),
  ),
);
api.get("/repertoires/:id", (req, res) => {
  const r = one("SELECT * FROM repertoires WHERE id=?", req.params.id);
  if (!r) return res.status(404).json({ error: "Дебют не найден." });
  res.json({
    ...r,
    totalLines: one(
      "SELECT count(*) AS n FROM lines WHERE repertoire_id=?",
      r.id,
    ).n,
    lines: all(
      "SELECT l.*,t.attempts,t.unaided,t.last FROM lines l LEFT JOIN line_training t ON t.line_id=l.id WHERE repertoire_id=? ORDER BY l.rowid LIMIT 100 OFFSET ?",
      r.id,
      Math.max(0, Number(req.query.offset) || 0),
    ).map((l) => ({ ...l, moves: JSON.parse(l.moves) })),
    edges: all("SELECT * FROM repertoire_edges WHERE repertoire_id=?", r.id),
    training: all("SELECT * FROM training WHERE repertoire_id=?", r.id),
    positionNotes: all(
      "SELECT * FROM position_notes WHERE repertoire_id=?",
      r.id,
    ),
  });
});
api.put("/repertoires/:id", (req, res) => {
  run(
    "UPDATE repertoires SET notes=? WHERE id=?",
    z.string().max(20000).parse(req.body.notes),
    req.params.id,
  );
  res.json({ ok: true });
});
api.post("/repertoires/:id/lines", (req, res) => {
  const b = z
    .object({
      name: z.string().min(1).max(200),
      pgn: z.string().max(100000),
      notes: z.string().max(20000).default(""),
    })
    .parse(req.body);
  const ids = transaction(() =>
    repertoirePgn(b.pgn).map((line, i) =>
      addLine(
        req.params.id,
        b.name + (i ? " " + (i + 1) : ""),
        line.moves,
        [b.notes, line.notes].filter(Boolean).join("\n"),
      ),
    ),
  );
  res.json({ ids });
});
api.delete("/lines/:id", (req, res) => {
  const line = one("SELECT * FROM lines WHERE id=?", req.params.id);
  if (!line) return res.status(404).json({ error: "Вариант не найден." });
  transaction(() => {
    run("DELETE FROM lines WHERE id=?", line.id);
    rebuildEdges(line.repertoire_id);
  });
  res.json({ ok: true });
});
api.put("/lines/:id", (req, res) => {
  run(
    "UPDATE lines SET notes=? WHERE id=?",
    z.string().max(20000).parse(req.body.notes),
    req.params.id,
  );
  res.json({ ok: true });
});
api.put("/repertoires/:id/position", (req, res) => {
  const b = z
    .object({ fen: z.string(), notes: z.string().max(20000) })
    .parse(req.body);
  run(
    "INSERT OR REPLACE INTO position_notes VALUES(?,?,?)",
    req.params.id,
    positionKey(b.fen),
    b.notes,
  );
  res.json({ ok: true });
});
api.put("/repertoires/:id/preferred", (req, res) => {
  const b = z.object({ fen: z.string(), uci: z.string() }).parse(req.body);
  const key = positionKey(b.fen);
  if (
    !one(
      "SELECT * FROM repertoire_edges WHERE repertoire_id=? AND position=? AND uci=?",
      req.params.id,
      key,
      b.uci,
    )
  )
    throw new Error("Сначала добавьте ход в вариант.");
  transaction(() => {
    run(
      "UPDATE repertoire_edges SET preferred=0 WHERE repertoire_id=? AND position=?",
      req.params.id,
      key,
    );
    run(
      "UPDATE repertoire_edges SET preferred=1 WHERE repertoire_id=? AND position=? AND uci=?",
      req.params.id,
      key,
      b.uci,
    );
  });
  res.json({ ok: true });
});
api.get("/repertoires/:id/pgn", (req, res) => {
  res
    .type("application/x-chess-pgn")
    .attachment(req.params.id + ".pgn")
    .send(
      all("SELECT * FROM lines WHERE repertoire_id=?", req.params.id)
        .map((l) => {
          const c = new Chess();
          c.setHeader("Event", l.name);
          for (const m of JSON.parse(l.moves)) playUci(c, m);
          if (l.notes) c.setComment(l.notes);
          return c.pgn();
        })
        .join("\n\n"),
    );
});
api.get("/explorer", async (req, res) => {
  const fen = z.string().parse(req.query.fen);
  new Chess(fen);
  const rs = String(req.query.ratings || "1600,1800,2000")
    .split(",")
    .map(Number);
  const ss = String(req.query.speeds || "blitz,rapid,classical").split(",");
  if (
    !rs.length ||
    rs.some((r) => !ratings.includes(r)) ||
    ss.some((s) => !speeds.includes(s))
  )
    throw new Error("Неверный фильтр Lichess.");
  res.json(await explorer(fen, rs, ss));
});
api.post("/training", (req, res) => {
  const b = z
    .object({
      id: z.string().uuid(),
      repertoireId: z.string(),
      fen: z.string(),
      played: z.string(),
      assisted: z.boolean(),
      lineId: z.string().optional(),
    })
    .parse(req.body);
  const key = positionKey(b.fen);
  const c = new Chess(b.fen);
  const repertoire = one(
    "SELECT color FROM repertoires WHERE id=?",
    b.repertoireId,
  );
  if (!repertoire || c.turn() !== repertoire.color)
    throw new Error("Сейчас ход соперника.");
  playUci(c, b.played);
  const correct = !!one(
    "SELECT 1 FROM repertoire_edges WHERE repertoire_id=? AND position=? AND uci=?",
    b.repertoireId,
    key,
    b.played,
  );
  const prior = one(
    "SELECT * FROM training WHERE repertoire_id=? AND position=?",
    b.repertoireId,
    key,
  );
  const s = schedule(prior, correct, b.assisted);
  transaction(() => {
    if (one("SELECT id FROM training_events WHERE id=?", b.id)) return;
    run(
      "INSERT INTO training_events VALUES(?,?,?,?,?,?,?,?)",
      b.id,
      b.repertoireId,
      key,
      b.lineId || null,
      b.played,
      Number(correct),
      Number(b.assisted),
      Date.now(),
    );
    run(
      "INSERT INTO training VALUES(?,?,?,?,?,?,?,?,?,?) ON CONFLICT(repertoire_id,position) DO UPDATE SET attempts=attempts+1,mistakes=mistakes+excluded.mistakes,unaided=unaided+excluded.unaided,assisted=assisted+excluded.assisted,streak=excluded.streak,interval=excluded.interval,due=excluded.due,last=excluded.last",
      b.repertoireId,
      key,
      1,
      Number(!correct),
      Number(correct && !b.assisted),
      Number(b.assisted),
      s.streak,
      s.interval,
      s.due,
      Date.now(),
    );
  });
  res.json({ correct, ...s });
});
api.post("/training/line", (req, res) => {
  const b = z
    .object({ lineId: z.string(), unaided: z.boolean() })
    .parse(req.body);
  if (!one("SELECT id FROM lines WHERE id=?", b.lineId))
    throw new Error("Вариант не найден.");
  run(
    "INSERT INTO line_training VALUES(?,1,?,?) ON CONFLICT(line_id) DO UPDATE SET attempts=attempts+1,unaided=unaided+excluded.unaided,last=excluded.last",
    b.lineId,
    Number(b.unaided),
    Date.now(),
  );
  res.json({ ok: true });
});
api.get("/export", (req, res) => {
  const tables = [
    "settings",
    "games",
    "moves",
    "analysis",
    "repertoires",
    "lines",
    "repertoire_edges",
    "position_notes",
    "training",
    "training_events",
    "line_training",
    "review",
  ];
  res.attachment("rodniy-chess-export.json").json({
    version: 1,
    exported: new Date().toISOString(),
    tables: Object.fromEntries(
      tables.map((t) => [t, all("SELECT * FROM " + t)]),
    ),
  });
});
app.use("/chess/api", api);
app.get("/", (req, res) => res.redirect(302, "/chess/"));
app.get("/chess", (req, res) => res.redirect(302, "/chess/"));
app.use("/chess", express.static(resolve("dist/chess")));
app.get("/health", (req, res) => res.json({ ok: true }));
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error(err.message);
    res
      .status(
        err instanceof z.ZodError
          ? 400
          : err.message?.includes("Lichess")
            ? 503
            : 400,
      )
      .json({
        error:
          err instanceof z.ZodError
            ? "Проверьте введённые значения."
            : err.message?.match(/[а-яА-Я]/)
              ? err.message
              : "Не удалось выполнить запрос. Проверьте данные и повторите.",
      });
  },
);
if (process.argv[1]?.endsWith("index.ts")) {
  if (
    process.env.NODE_ENV === "production" &&
    (!process.env.OWNER_PASSWORD ||
      process.env.OWNER_PASSWORD.length < 16 ||
      !process.env.APP_ORIGIN?.startsWith("https://"))
  )
    throw new Error(
      "Production requires a strong OWNER_PASSWORD and HTTPS APP_ORIGIN.",
    );
  app.listen(
    Number(process.env.PORT) || 3000,
    process.env.HOST || "127.0.0.1",
    () =>
      console.log(
        "Chess server: http://127.0.0.1:" +
          (process.env.PORT || 3000) +
          "/chess/",
      ),
  );
}
