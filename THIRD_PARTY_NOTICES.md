# Third-party notices

- **Stockfish / Stockfish.js 17.1.0**: GPL-3.0. See `licenses/Stockfish-GPL-3.0.txt`, installed `node_modules/stockfish/AUTHORS`, and the [corresponding source commit](https://github.com/nmrugg/stockfish.js/tree/602fd7e1a571a2be71f242942db90483731f2a1f). The engine is unmodified and is invoked as a separate process. `package-lock.json` pins the package. No engine binary is embedded in the browser bundle. When distributing an image or binary package containing Stockfish, include the license and make the corresponding engine sources/build materials available under GPL-3.0; preserve upstream notices. The Docker image here is built locally from the registry package.
- **chess.js 1.4**: BSD-2-Clause. Source and license: https://github.com/jhlywa/chess.js.
- **React / React DOM**: MIT. https://github.com/facebook/react.
- **Express, Vite, TypeScript, tsx, Zod, Prettier**: their upstream permissive licenses remain in installed packages; exact resolved versions are in `package-lock.json`.
- **Lichess chess-openings**: CC0-1.0. https://github.com/lichess-org/chess-openings. Only selected canonical opening sequences are included, with editorial Russian notes authored for this application.
- The board uses standard Unicode chess glyphs rendered by the system font. No Chess.com or Lichess proprietary piece artwork, sounds or brand assets are copied. CSS board styling is original.
- Chess.com and Lichess are external services. This application is independent of and not endorsed by either service. Provider data retains its provider attribution; human-game statistics are never presented as engine evaluations.
