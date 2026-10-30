import { one, run } from "./db.ts";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
let chain = Promise.resolve();
let last = 0;
export async function cachedFetch(
  url: string,
  ttl: number,
  headers: Record<string, string> = {},
) {
  const old = one("SELECT * FROM provider_cache WHERE key=?", url);
  if (old && old.expires > Date.now())
    return { data: JSON.parse(old.body), fetched: old.fetched, cached: true };
  const request = async () => {
    await sleep(Math.max(0, last + 1100 - Date.now()));
    let response: Response | undefined;
    for (let attempt = 0; attempt < 4; attempt++) {
      last = Date.now();
      response = await fetch(url, {
        headers: {
          "User-Agent":
            process.env.PROVIDER_USER_AGENT ||
            "RodniyChess/1.0 (https://rodniy.com; personal chess study)",
          ...headers,
          ...(old?.etag ? { "If-None-Match": old.etag } : {}),
          ...(old?.modified ? { "If-Modified-Since": old.modified } : {}),
        },
        signal: AbortSignal.timeout(30000),
      });
      if (response.status !== 429 && response.status < 500) break;
      await sleep(
        Math.max(
          response.status === 429 ? 60000 : 2000 * 2 ** attempt,
          Number(response.headers.get("retry-after") || 0) * 1000,
        ),
      );
    }
    if (!response) throw new Error("Нет ответа от поставщика данных.");
    if (response.status === 304 && old) {
      run(
        "UPDATE provider_cache SET expires=? WHERE key=?",
        Date.now() + ttl,
        url,
      );
      return { data: JSON.parse(old.body), fetched: old.fetched, cached: true };
    }
    if (!response.ok)
      throw new Error(
        response.status === 404
          ? "Пользователь или архив не найден."
          : response.status === 401 || response.status === 403
            ? url.includes("chess.com")
              ? "Chess.com отклонил запрос. Возможна защита от автоматических запросов; попробуйте позже или загрузите PGN."
              : "Lichess отклонил доступ. Проверьте серверный токен."
            : `Поставщик данных временно недоступен (${response.status}).`,
      );
    if (!response.headers.get("content-type")?.includes("json"))
      throw new Error(
        "Поставщик вернул страницу проверки вместо данных. Повторите позже или используйте PGN.",
      );
    const data = await response.json();
    const now = Date.now();
    const maxAge =
      Number(
        response.headers.get("cache-control")?.match(/max-age=(\d+)/)?.[1] || 0,
      ) * 1000;
    run(
      "INSERT OR REPLACE INTO provider_cache VALUES(?,?,?,?,?,?)",
      url,
      JSON.stringify(data),
      response.headers.get("etag"),
      response.headers.get("last-modified"),
      now + Math.max(ttl, maxAge),
      now,
    );
    return { data, fetched: now, cached: false };
  };
  const result = chain.then(request);
  chain = result.then(
    () => undefined,
    () => undefined,
  );
  return result;
}
export function username(input: string) {
  let value = input.trim();
  if (value.includes("://")) {
    const u = new URL(value);
    if (!["chess.com", "www.chess.com"].includes(u.hostname))
      throw new Error("Нужна ссылка на профиль Chess.com.");
    value = u.pathname.split("/").filter(Boolean).at(-1) || "";
  }
  if (!/^[a-zA-Z0-9_-]{2,50}$/.test(value))
    throw new Error("Проверьте имя пользователя Chess.com.");
  return value.toLowerCase();
}
export const ratings = [0, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2500];
export const speeds = [
  "ultraBullet",
  "bullet",
  "blitz",
  "rapid",
  "classical",
  "correspondence",
];
export async function explorer(fen: string, rs: number[], ss: string[]) {
  if (!process.env.LICHESS_TOKEN)
    throw new Error(
      "Для статистики Lichess добавьте токен в настройках сервера.",
    );
  const p = new URLSearchParams({
    variant: "standard",
    fen,
    ratings: rs.join(","),
    speeds: ss.join(","),
    moves: "30",
    topGames: "0",
    recentGames: "0",
  });
  const result = await cachedFetch(
    "https://explorer.lichess.org/lichess?" + p,
    86400000,
    { Authorization: `Bearer ${process.env.LICHESS_TOKEN}` },
  );
  const d = result.data;
  const total = d.white + d.draws + d.black;
  const moves = d.moves.map((m: any) => ({
    ...m,
    count: m.white + m.draws + m.black,
    frequency: total ? (m.white + m.draws + m.black) / total : 0,
  }));
  return {
    ...result,
    data: {
      ...d,
      moves,
      total,
      other: Math.max(
        0,
        total - moves.reduce((n: number, m: any) => n + m.count, 0),
      ),
      filters: { ratings: rs, speeds: ss },
    },
  };
}
