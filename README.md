# Rodniy Chess — Родной ход

A Russian-language, single-owner chess study application for **https://rodniy.com/chess/**. The root redirects to `/chess/`. This replaces the previous static portfolio; its Git history remains intact.

## Run locally

Requires Node.js **24+** (tested with Node 26.3.1). No database service, Docker, LLM, or native Stockfish installation is needed for local development.

```sh
npm ci
cp .env.example .env
```

Edit `.env`: set a unique `OWNER_PASSWORD`. Optionally set `LICHESS_TOKEN` to a personal Lichess API token; no extra scopes are required by the current explorer specification. Never commit or paste tokens into the frontend. Keep `APP_ORIGIN=http://127.0.0.1:5173` for development.

Run in three terminals:

```sh
npm run server
npm run worker
npm run dev
```

Open **http://127.0.0.1:5173/chess/** and sign in. In Settings, enter your Chess.com username or upload a PGN. The username identifies which color belongs to you. No personal account or synthetic games are preloaded.

To run the production build locally, set `APP_ORIGIN=http://127.0.0.1:3000`, run `npm run build`, then run `npm start` and `npm run worker`. Open **http://127.0.0.1:3000/**. The server redirects to `/chess/` without a redirect loop.

## Stack and responsibilities

- React 19, TypeScript and Vite: responsive Russian interface and interactive board.
- `chess.js` 1.4: legality, PGN, SAN/UCI, special moves and position normalization.
- Express 5: authenticated API, same-origin cookies and server-side integrations.
- SQLite through `node:sqlite`: relational persistent data, WAL, migrations, job leases, caches and training history. Suitable for a single owner on **one host with a local persistent disk**; not an ephemeral function filesystem or network share.
- Stockfish.js **17.1.0, full single-threaded WASM engine**: pinned in the lockfile, launched as a separate process by a durable worker. The engine is deliberately fixed for reproducibility; upgrading changes cache identity.
- No LLM dependency. Russian explanations report only implemented evaluation-loss and forced-mate evidence. Editorial opening notes are labeled separately.

## Implemented flows

1. Chess.com archive discovery and serial oldest-first import; conditional HTTP caching, retries, monthly checkpoints, variant/unfinished-game exclusion and deduplication. PGN import is an independent alternative. Failed imports can be resumed.
2. Persistent analysis queue independent of browser lifetime, node-budget screening followed by deeper candidate analysis, optional all-position deep mode, on-demand position jobs, cancellation, three attempts and stale-lease recovery.
3. Board replay, played/best comparison, legal principal-variation replay, mate transitions, original game links, analysis coverage, chronological summaries, normalized error rates, sample sizes, filters and mistake review.
4. Eight separate repertoires; 17 initial branches, English SAN, UCI storage, editable position/path notes, multiple accepted moves, preferred moves, PGN/RAV import and PGN export. Reference positions come from the CC0 Lichess opening-name dataset.
5. Board-synchronized variation map with pan, zoom, collapse, incremental rendering and paginated lines, training states and explicit transposition handling.
6. Training for the repertoire's color: selected-line, common-response, frequency-weighted and due/weak modes. Training is durable across devices. Hints and retries cannot count as unaided recall. Whole-line recall is tracked separately.
7. Game-to-repertoire matching by validated position; deviations are distinct from errors. Branches implicated in analyzed mistakes get practice priority.
8. Full JSON export, consistent SQLite backup/restore scripts, private login, responsive interface and VPS deployment configuration.

## Validate

```sh
npm run build
npm test
npm run benchmark
npm run check:providers -- YOUR_CHESS_COM_USERNAME
```

Tests use isolated databases under the system temporary directory and run **real Stockfish**. Integration tests open a local ephemeral HTTP port. Provider verification is separate and requires network access; Lichess requires `LICHESS_TOKEN`.

See [validation evidence](docs/VALIDATION.md), [analysis methodology](docs/METHODOLOGY.md), [requirement coverage](docs/REQUIREMENTS.md), and [third-party notices](THIRD_PARTY_NOTICES.md).

## Deploy to rodniy.com

The existing domain is served by GitHub Pages. **GitHub Pages cannot run this backend or worker.** Deploy the whole application to a VPS, then point DNS at it. Do not publish only the browser build and expect import/analysis/training persistence to work.

[VPS runbook](deploy/README.md) includes Docker Compose, Caddy HTTPS, the root redirect, resource caps, backup, rollback and verification. No hosting account has been purchased and no DNS settings have been changed.

## Important scope boundaries

- The initial repertoire is a small, editable study collection, not comprehensive opening theory. It has 2 branches per opening, except the French Defense with 3.
- Taxonomy is deliberately conservative: evaluation loss, missed forced mate and allowed forced mate. There is no unverified automatic “fork”, “weak square” or strategic diagnosis. Phase boundaries are heuristics.
- Centipawn loss is our metric, not Chess.com accuracy. Different node budgets can produce different judgments. See methodology for sample-selection and mate caveats.
- Imported game PGN is preserved verbatim; repertoire PGN RAVs are flattened into separate legal lines. Branch comments are preserved as branch notes, but NAGs and exact original formatting are not round-tripped. Setup-FEN repertoire PGN is rejected; game PGN with a legal setup FEN is supported.
- Only selected/prepared branches can be recalled. When a statistically sampled move leaves preparation, the session ends explicitly and the branch can be saved. No theoretical continuation is invented.
- Live Chess.com verification was blocked by its Cloudflare challenge from this environment. Lichess's unauthenticated 401 response and current API contract were verified, but a successful authenticated statistics response requires the owner's token. PGN import and the real engine pipeline passed integration tests.
- Docker/VPS startup cannot be executed here because Docker and a VPS are unavailable. The provided configuration still requires a deployment smoke test before DNS cutover.
