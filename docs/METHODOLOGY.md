# Analysis and training methodology

## Engine comparison

Stockfish.js 17.1 full single-threaded WASM is run as a child process. UCI initialization records the engine name. `Threads=1`, `Hash=64`, `ucinewgame` before each uncached search, and fixed node budgets provide a documented reproducible configuration. Platform and engine changes may still affect search output.

For each owner move we search the **same pre-move position** twice: unrestricted best move, then `searchmoves <played UCI>` with the same node budget. When the played move is already best, the same result is reused. Both scores are therefore from the mover's perspective; black's scores are not accidentally interpreted as white's. We preserve original start FEN and the preceding UCI move history, enabling repetition-aware engine search.

Cache identity includes full FEN (including clocks), complete starting-position/move history, engine name, npm engine version, budget, root restriction, hash and threads. Training identity intentionally differs: placement, side to move, castling rights and legal en-passant availability; clocks are excluded. Exact path notes and complete-line recall remain separate.

Default screening: 20,000 nodes. Candidate mistakes: 200,000 nodes for both searches. Optional deep mode uses the larger budget for every owner move. On-demand jobs support up to 5,000,000 nodes and do not silently overwrite archive analysis. We record completed-search depth, nodes, elapsed time and principal variation. A fixed depth is **not** assumed to imply comparable quality. Screening can miss errors; coverage means processed owner positions, not proof of perfect analysis.

Centipawn loss is `max(0, best_cp - played_cp)`. Default configurable thresholds: inaccuracy 50 cp, mistake 100 cp, blunder 200 cp. These are application definitions and are not Chess.com's proprietary labels or accuracy formula. Expected-score loss is not implemented.

Mate transitions stay categorical with `cpLoss=null`: winning forced mate no longer demonstrated, or a previously avoidable losing forced mate. Changes in mate distance while retaining the same winning/losing status are not converted to a fake centipawn loss. A finite search may fail to prove a mate; wording states what the engine found, not mathematical certainty beyond the returned line.

Terminal checkmate returns mate score 0 and no move. Stalemate and insufficient material return draw/no move. Claimable fifty-move/repetition situations are passed to the engine with history rather than incorrectly treated as having no legal moves. Full history is supplied for nonterminal archive searches. `chess.js` validates castling, promotion, en passant, PGN and principal-variation moves.

## Statistics

The denominator for mistake rate is **analyzed owner moves** under the active game/phase filters. All eligible owner moves remain in the coverage denominator. Counts, game counts, studied moves, total eligible moves and coverage are separately reported. Mate categories are distinct from centipawn loss; no unsupported tactical/strategic labels are invented.

Phase is a disclosed heuristic: first 20 plies = opening; later positions with ≤6 non-pawn, non-king pieces = endgame; otherwise middlegame. This is not a universal phase definition.

Trend comparisons use adjacent equal-duration windows (30/90/180 days in the UI), one explicitly selected time control, ≥200 analyzed moves per period and ≥90% coverage in each. “Improving” means the observed rate fell by at least 30%; “emerging” requires zero older occurrences and ≥3 recent ones. Zero recent observations is labeled “not observed recently,” never “resolved.” These are descriptive heuristics, not hypothesis tests or causal claims. They do not eliminate opponent-strength, opening-mix or selection biases. Don't compare runs made with different analysis budgets as if they were equivalent.

## Repertoire and training

The eight repertoires remain isolated. A position can accept multiple UCI moves within one repertoire. The player chooses their move; the app does not randomize the player's choices. A preferred marker guides fallback opponent traversal/editor orientation.

The Lichess explorer request uses standard rated human games and explicit rating/time-control filters. Total sample = white wins + draws + black wins. Move frequency = the move's corresponding count / total sample. Omitted count is preserved as “other.” Frequency-weighted training samples the full reported mass including “other”; selecting an unlisted move stops with an explanation rather than silently renormalizing. Common-response mode chooses the most frequent listed response. Missing/unauthorized data never becomes invented statistics.

Single-line mode works without the provider. Due mode prioritizes branches associated with verified personal mistakes, then least recently trained lines and due/untrained positions. A legal non-repertoire move is not automatically labeled a chess error. A prepared line ending or a statistical response outside preparation ends the session explicitly, with an option to save its path.

Intervals for unaided successful position recall: 1 day, 3 days, then doubling up to 180 days. Wrong or assisted answers reset the streak and schedule a 10-minute review. `attempts`, `mistakes`, `unaided`, `assisted`, timestamps and due dates persist. Training event UUIDs are idempotent. A complete line counts only when the played UCI sequence exactly matches it; any hint/retry prevents unaided line credit. Hints and the prepared move sequence are hidden during active practice unless assistance is requested.

PGN RAVs are expanded to individual legal paths; comments become path notes. Position knowledge merges transpositions inside the same repertoire; path-specific notes and line recall do not merge. The map marks repeated positions with ↔.

## Sources and limitations

- [Lichess opening names](https://github.com/lichess-org/chess-openings), CC0; canonical anchor sequences checked 2026-10-30. Additional initial continuations are legally validated editorial study lines, not claims of exhaustive or objectively optimal theory.
- [Lichess explorer API specification](https://github.com/lichess-org/api/blob/master/doc/specs/tags/openingexplorer/lichess.yaml): `https://explorer.lichess.org/lichess`, OAuth2 bearer token, rating buckets 0/1000/1200/1400/1600/1800/2000/2200/2500. Time controls: ultraBullet, bullet, blitz, rapid, classical, correspondence. Serial requests; after 429 wait at least one minute and honor Retry-After. Provider caching is separate from repertoire/progress.
- [Chess.com PubAPI guidance](https://support.chess.com/en/articles/9650547-what-is-the-pubapi-and-how-do-i-use-it): public read-only API, serial requests, conditional caching. No official accuracy/review data is assumed. User interface states the project is independent of Chess.com.
- Initial line count: 17, with two per opening and three French lines. The owner can expand, remove and annotate them. There is no opening book claiming complete coverage.
