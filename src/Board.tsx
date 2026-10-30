import { useState, useEffect } from "react";
import { Chess, type Square } from "chess.js";
const glyph: Record<string, string> = {
  wk: "♔",
  wq: "♕",
  wr: "♖",
  wb: "♗",
  wn: "♘",
  wp: "♙",
  bk: "♚",
  bq: "♛",
  br: "♜",
  bb: "♝",
  bn: "♞",
  bp: "♟",
};
const names: Record<string, string> = {
  k: "король",
  q: "ферзь",
  r: "ладья",
  b: "слон",
  n: "конь",
  p: "пешка",
};
export function Board({
  fen,
  orientation = "w",
  onMove,
  last,
  disabled = false,
}: {
  fen: string;
  orientation?: string;
  onMove?: (m: string) => void;
  last?: string;
  disabled?: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null),
    [promotion, setPromotion] = useState<string | null>(null);
  useEffect(() => {
    setSelected(null);
    setPromotion(null);
  }, [fen]);
  const c = new Chess(fen);
  const files = orientation === "w" ? "abcdefgh" : "hgfedcba";
  const ranks =
    orientation === "w" ? [8, 7, 6, 5, 4, 3, 2, 1] : [1, 2, 3, 4, 5, 6, 7, 8];
  const legal = selected
    ? c.moves({ square: selected as Square, verbose: true }).map((m) => m.to)
    : [];
  function move(from: string, to: string) {
    if (disabled || !onMove) return;
    const options = c
      .moves({ square: from as Square, verbose: true })
      .filter((m) => m.to === to);
    if (options.some((m) => m.promotion)) {
      setPromotion(from + to);
      return;
    }
    onMove(from + to);
    setSelected(null);
  }
  function click(square: string) {
    if (disabled || !onMove) return;
    if (selected && selected !== square) {
      if (c.get(square as Square)?.color === c.turn()) {
        setSelected(square);
        return;
      }
      move(selected, square);
    } else setSelected(selected === square ? null : square);
  }
  return (
    <div className="board-shell">
      <div className="board" role="group" aria-label="Шахматная доска">
        {ranks.flatMap((rank, row) =>
          [...files].map((file, col) => {
            const square = file + rank;
            const p = c.get(square as Square);
            return (
              <button
                key={square}
                className={`square ${(row + col) % 2 ? "dark" : "light"} ${selected === square ? "selected" : ""} ${last && (last.slice(0, 2) === square || last.slice(2, 4) === square) ? "last" : ""}`}
                aria-label={`${square}${p ? " " + (p.color === "w" ? "белые " : "чёрные ") + names[p.type] : ""}`}
                onClick={() => click(square)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  move(e.dataTransfer.getData("text/plain"), square);
                }}
              >
                {col === 0 && <small className="rank">{rank}</small>}
                {row === 7 && <small className="file">{file}</small>}
                {p && (
                  <span
                    draggable={!!onMove && !disabled}
                    onDragStart={(e) => {
                      e.dataTransfer.setData("text/plain", square);
                      setSelected(square);
                    }}
                    className={"piece " + p.color}
                  >
                    {glyph[p.color + p.type]}
                  </span>
                )}
                {legal.includes(square as Square) && (
                  <i className={p ? "capture" : "dot"} />
                )}
              </button>
            );
          }),
        )}
      </div>
      {promotion && (
        <div className="promotion">
          <strong>Превращение пешки</strong>
          {["q", "r", "b", "n"].map((p) => (
            <button
              key={p}
              onClick={() => {
                onMove?.(promotion + p);
                setPromotion(null);
              }}
            >
              {glyph[c.turn() + p]} {names[p]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export function MoveStrip({
  moves,
  index,
  onSelect,
}: {
  moves: string[];
  index: number;
  onSelect: (n: number) => void;
}) {
  return (
    <div className="move-strip">
      <button
        className={index === 0 ? "active" : ""}
        onClick={() => onSelect(0)}
      >
        Начало
      </button>
      {moves.map((m, i) => (
        <button
          className={index === i + 1 ? "active" : ""}
          key={i}
          onClick={() => onSelect(i + 1)}
        >
          {i % 2 === 0 ? <small>{Math.floor(i / 2) + 1}.</small> : null} {m}
        </button>
      ))}
    </div>
  );
}
