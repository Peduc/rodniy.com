import { Chess } from "chess.js";
import { positionKey } from "./chess.ts";
// Canonical sequences from lichess-org/chess-openings (CC0), verified 2026-10-30.
export const openingReferences = [
  {
    id: "ponziani",
    eco: "C44",
    name: "Дебют Понциани",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. c3",
  },
  {
    id: "scotch",
    eco: "C45",
    name: "Шотландская партия",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4",
  },
  {
    id: "goring",
    eco: "C44",
    name: "Гамбит Гёринга",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3",
  },
  {
    id: "danish",
    eco: "C21",
    name: "Северный гамбит",
    pgn: "1. e4 e5 2. d4 exd4 3. c3",
  },
  { id: "french", eco: "C00", name: "Французская защита", pgn: "1. e4 e6" },
  {
    id: "slav",
    eco: "D10",
    name: "Славянская защита",
    pgn: "1. d4 d5 2. c4 c6",
  },
  { id: "englund", eco: "A40", name: "Гамбит Энглунда", pgn: "1. d4 e5" },
  {
    id: "london",
    eco: "A48",
    name: "Лондонская система",
    pgn: "1. d4 Nf6 2. Nf3 g6 3. Bf4",
  },
  {
    id: "london",
    eco: "D02",
    name: "Лондонская система",
    pgn: "1. d4 d5 2. Nf3 Nf6 3. Bf4",
  },
].map((r) => {
  const c = new Chess();
  c.loadPgn(r.pgn);
  return { ...r, position: positionKey(c.fen()), plies: c.history().length };
});
export function identifyOpening(moves: { before: string; after: string }[]) {
  let match: (typeof openingReferences)[number] | undefined;
  for (const m of moves)
    for (const r of openingReferences)
      if (
        positionKey(m.after) === r.position &&
        (!match || r.plies > match.plies)
      )
        match = r;
  return match;
}
