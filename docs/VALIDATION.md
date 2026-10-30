# Validation evidence

Date: 2026-10-30. Environment: macOS arm64, Node 26.3.1. Production target: Node 24 container on one Linux VPS.

## Automated

`npm run build`: TypeScript check and Vite production build passed. Browser JS approximately 319 kB / 100 kB gzip; Stockfish stays on the server. Root static redirect and CNAME generated in `dist`.

`npm test`: **16 tests passed**, including:

- all eight opening seed sets legally replayed;
- PGN replay, castling, en passant, knight promotion, checkmate, stalemate and insufficient material;
- mover/white score perspective and separate positive/negative mate transitions;
- completed-game deduplication, unsupported/unfinished exclusion, correct owner move count;
- stale job leases and preserved import checkpoints;
- chronological multi-archive import interrupted between months, then resumed without duplicating games;
- cancelled jobs do not restart;
- normalized statistical denominator and partial coverage;
- deterministic frequency selection with a 1:3 sample;
- transpositions, castling and en-passant identity distinctions;
- assisted recall separation and spaced intervals;
- nested PGN variations and branch comments;
- root → `/chess/` redirect without a loop;
- authenticated HTTP PGN import → **real Stockfish** analysis → forced-mate error → review → export;
- legal repertoire alternatives, duplicate-event idempotence, persistent progress and PGN export;
- **real Stockfish** black-to-move forced mate, legal PV, terminal response and exact cache reuse.

Tests store unique fixture databases under `/tmp/rodniy-validation`, not the owner's application database. Provider-response fixtures are test fixtures, not displayed as real imports. Live integration status is listed separately below.

`git diff --check`: passed before delivery.

## Manual browser checks

- Local production build opened through `/chess/`; owner login succeeded.
- Overview empty state displayed zero real games, not fabricated analytics.
- Ponziani single-line training: `e4 e5 Nf3 Nc6 c3 Nf6 d4 Nxe4 d5 Ne7`; own moves accepted, opponent moves automatic, explicit line end shown, one full completion persisted.
- Reload preserved five trained owner positions and completion data in the disposable preview database.
- During an active fresh session, the prepared `1. e4` button was absent and the plan was hidden until a hint.
- Navigation from training to repertoire/map succeeded. Layout checked at default desktop size and 390×844 mobile viewport; viewport restored afterward.
- Live Lichess unavailable state clearly requested server token; no sample statistics were fabricated.

Temporary preview uses a separate disposable test database. Its test password is not a production credential and is not stored in tracked configuration.

## Backup/restore

Ran `scripts/backup.ts` against the preview database, restored it to a new file with `scripts/restore.ts`, and queried it. All five trained positions persisted. Restore refuses to overwrite an existing database and verifies SQLite integrity.

## Engine timing smoke sample

Cold uncached searches, Stockfish 17.1 WASM full single thread, 64 MB hash, 20,000-node budget:

| Synthetic position | Search wall time | Last completed iteration depth | Reported nodes |
| --- | ---: | ---: | ---: |
| After 1.e4 | 56 ms | 11 | 16,637 |
| Queen's Gambit development fixture | 41 ms | 10 | 18,157 |
| Black to move with mate in one | 7 ms | 245 | 7,351 |

These tiny synthetic positions are an engine-startup/correctness smoke test, **not a representative archive benchmark**. Easy forced-mate depth illustrates why depth is not a uniform quality measure. Startup, database writes, double searches and deeper passes add time. No complete-archive estimate is made. Benchmark real owner PGNs on the target VPS before estimating time or provisioning for throughput.

## Real provider verification

- `rodniy.com`: HTTP 200 from GitHub Pages before changes; current live deployment left unchanged.
- Chess.com official `/pub/player/erik/games/archives` and `/pub/player/erik/games/2025/01`: network reached the provider, but it returned a Cloudflare “Just a moment” challenge instead of JSON. A successful live archive import could not be verified in this environment. No bypass was attempted.
- Lichess current official explorer schema fetched from `lichess-org/api`; hostname is `explorer.lichess.org`, OAuth2 bearer token required. A real unauthenticated request returned HTTP 401. No owner token was available, so successful authenticated responses and live weighted training remain unverified.
- Opening canonical sequences checked against the public CC0 `lichess-org/chess-openings` A/C/D TSV datasets. All initial study lines separately passed legal replay.

## Deployment verification limits

Docker is not installed here, and the owner does not yet have a VPS. Docker Compose resource caps, Caddy certificate issuance, DNS cutover and cross-device production access are prepared but not executed. Follow `deploy/README.md`; do not describe the public domain as updated until those steps pass.
