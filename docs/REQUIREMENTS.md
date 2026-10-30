# Delivery coverage and remaining work

Status as of 2026-10-30. “Implemented” means present in this codebase, not deployed to the public domain.

| User requirement group | Implementation | Verification / boundary |
| --- | --- | --- |
| Russian interface, English SAN, UCI and PGN | Implemented throughout UI and data model | Browser and chess-rule tests |
| Existing repository inspection and replacement | Separate `feat/chess-training` branch; previous tracked website removed; CNAME/history preserved | Fresh clone had no local changes; production DNS untouched |
| `/chess/` and root redirect | Vite base, Express strict routes, static build redirect, Caddy 308 | Local route tests and browser; public cutover pending VPS |
| Private single-owner persistence | Password login, hashed opaque session IDs, HttpOnly/SameSite cookies, production Secure cookies, origin checks, SQLite WAL | API tests; environment password required |
| Full archive discovery, chronological import, incremental sync | Implemented official Chess.com endpoints, serial requests, conditionals, deduplication, checkpoints and retries | Mocked-provider recovery tests pass; real endpoint was blocked by Cloudflare here |
| PGN alternative and filtering | Completed standard games only; metadata preserved; variants and invalid/unfinished files counted explicitly | Automated fixtures and HTTP import test |
| Real deep Stockfish | Full engine 17.1, matched node budgets, screening/deep modes, on-demand jobs, history-aware cache | Real-engine tests and small synthetic measurement |
| Durable jobs | Separate process, transactional claims, heartbeat/90s lease, cancel, max three attempts, resume | Checkpoint, cancellation and stale-lease tests |
| Correct chess/evaluation | chess.js legality and special moves; mover POV, separate mate transitions, PV replay | Engine and unit tests |
| Chronological dashboard | Monthly absolute/severe counts, rates/100 moves, coverage, date/color/control/opening/phase/category filters, adjacent-period descriptive trends | Denominator test; no unsupported accuracy formula |
| Important-error examples and review | Pre-move board, played/recommended move, score, PV, date/opponent/opening/original link, repeat queue | End-to-end PGN → worker → review test |
| Eight confirmed openings | 17 legal initial lines, named reference positions, general and line-specific Russian editorial plans | All lines replay in tests; finite initial coverage is explicit |
| Repertoire editing | Add/delete lines, multiple accepted moves, preferred markers, position and path notes, PGN/RAV import/export | Alternative/transposition/PGN tests |
| Lichess integration | Current authenticated explorer endpoint; rating/control filters, counts/results/frequencies/other, cache/throttle/retries | Official schema and unauthenticated 401 verified; owner token required for live success |
| Trainer | Own decisions manual; weighted/common/due/selected-line modes, length cap, hint/retry, legal-vs-outside distinction, explicit end, save branch | Selected-line flow completed in browser; weight algorithm tested; live weighted flow blocked by missing token |
| Spaced repetition | Persistent per-position attempts, errors, unaided/assisted recall, 1/3/doubling-day schedule; separate line completion | API persistence/idempotence tests and browser reload |
| Variation map | Board sync, SAN, pan/zoom/collapse, status, statistics for queried node's continuations, transposition markers, paginated lines/incremental render | Browser state and visual checks; no huge-archive stress test |
| Game → practice | Named-position matching, repertoire deviations separate from engine errors, practice links and mistake-based branch priorities | Implemented; broader opening detection outside initial reference anchors uses imported ECO only |
| Responsive/accessible UI | Desktop/mobile CSS, square labels, visible focus, board click/drag, promotion chooser, arrow replay | Browser at desktop and 390px; not a formal screen-reader/WCAG audit |
| Export, migrations, local setup, VPS docs | SQL migration, JSON/PGN export, backup/restore scripts, Docker Compose/Caddy | Build/tests and SQLite backup/restore passed; Docker unavailable locally |
| Licensing and no LLM | Notices, Stockfish license/source reference, system glyph pieces | No LLM/API dependency or third-party piece artwork |

## External steps remaining

1. Owner provisions a VPS and supplies access; follow `deploy/README.md` and test Docker startup before DNS cutover. The owner explicitly chose preparation without purchasing a server.
2. Owner supplies a strong production password and Lichess API token through the server environment, never frontend code.
3. Verify Chess.com live access from the VPS, and authenticated Lichess sample/frequency responses. The application displays explicit unavailable-data states in the meantime.
4. Run a representative sample of the owner's archive on the target hardware before estimating full-archive processing time. No full-archive duration is promised from the tiny synthetic smoke sample.

## Deliberate product limits

- This is a single-owner/single-host deployment, not a multi-user service or distributed worker cluster.
- Initial theory is 17 lines, not exhaustive coverage or a claim that every line is best. Plans are editable editorial explanations; engine evidence and empirical statistics are separate.
- No unverifiable automatic tactical/strategic taxonomy. Three evidence-based categories are implemented; more rules can be added with tests.
- Trends are conservative descriptive rules and can remain “insufficient data.” Unknown dates are labeled in game details; imported metadata may be missing.
- Repertoire PGN preserves legal branches and comments but not exact original formatting/NAGs. Arbitrary setup-FEN repertoires are rejected explicitly.
- Large trees paginate lines and render nodes incrementally; the current repertoire endpoint still returns position knowledge/edge metadata together. A very large repertoire should be load-tested before claiming unrestricted scale.
- JSON export is for data portability; operational restore uses a consistent SQLite backup. No arbitrary JSON merge/import UI is provided.
