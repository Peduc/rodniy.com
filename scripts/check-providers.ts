export {};
// This command makes real provider requests. It never imports sample games into the personal database.
const owner = process.argv[2];
if (!owner || !/^[a-zA-Z0-9_-]{2,50}$/.test(owner))
  throw new Error("Usage: npm run check:providers -- CHESS_COM_USERNAME");
const headers = {
  "User-Agent":
    process.env.PROVIDER_USER_AGENT ||
    "RodniyChess/1.0 (https://rodniy.com; personal chess study)",
};
for (const [name, url, extra] of [
  [
    "Chess.com archives",
    `https://api.chess.com/pub/player/${owner.toLowerCase()}/games/archives`,
    {},
  ],
  [
    "Lichess explorer",
    "https://explorer.lichess.org/lichess?variant=standard&speeds=rapid&ratings=1600&moves=2",
    process.env.LICHESS_TOKEN
      ? { Authorization: `Bearer ${process.env.LICHESS_TOKEN}` }
      : {},
  ],
] as [string, string, Record<string, string>][]) {
  try {
    const r = await fetch(url, {
      headers: { ...headers, ...extra },
      signal: AbortSignal.timeout(30000),
    });
    console.log(name, `HTTP ${r.status}`, r.headers.get("content-type"));
    if (r.ok && r.headers.get("content-type")?.includes("json")) {
      const d = await r.json();
      console.log(
        name === "Chess.com archives"
          ? { archives: d.archives.length }
          : { sample: d.white + d.draws + d.black, moves: d.moves.length },
      );
    } else process.exitCode = 1;
  } catch (e) {
    console.error(name, e instanceof Error ? e.message : String(e));
    process.exitCode = 1;
  }
}
