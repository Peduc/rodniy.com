import { Chess } from "chess.js";
export const uci = (m: { from: string; to: string; promotion?: string }) =>
  m.from + m.to + (m.promotion || "");
export const positionKey = (fen: string) =>
  new Chess(fen).fen().split(" ").slice(0, 4).join(" ");
export function playUci(chess: Chess, move: string) {
  return chess.move({
    from: move.slice(0, 2),
    to: move.slice(2, 4),
    promotion: move[4],
  });
}
export function replay(pgn: string) {
  const c = new Chess();
  c.loadPgn(pgn);
  return {
    headers: c.getHeaders(),
    moves: c.history({ verbose: true }),
    chess: c,
  };
}
export function splitPgn(text: string) {
  return text
    .trim()
    .split(/\n\s*\n(?=\[Event\s)|\n(?=\[Event\s)/)
    .filter((x) => x.trim());
}
export type Score = { type: "cp" | "mate"; value: number };
export function whiteScore(score: Score, turn: string): Score {
  return { ...score, value: score.value * (turn === "w" ? 1 : -1) };
}
export function loss(
  best: Score,
  played: Score,
  thresholds = { inaccuracy: 50, mistake: 100, blunder: 200 },
) {
  if (best.type === "mate" || played.type === "mate") {
    const transition =
      best.type === "mate" &&
      best.value > 0 &&
      !(played.type === "mate" && played.value > 0)
        ? "missed-mate"
        : played.type === "mate" &&
            played.value < 0 &&
            !(best.type === "mate" && best.value < 0)
          ? "allowed-mate"
          : null;
    return {
      cpLoss: null,
      category: transition,
      severity: transition ? "blunder" : null,
    };
  }
  const cpLoss = Math.max(0, best.value - played.value);
  return {
    cpLoss,
    category: cpLoss >= thresholds.inaccuracy ? "evaluation-loss" : null,
    severity:
      cpLoss >= thresholds.blunder
        ? "blunder"
        : cpLoss >= thresholds.mistake
          ? "mistake"
          : cpLoss >= thresholds.inaccuracy
            ? "inaccuracy"
            : null,
  };
}
export function weighted<T extends { weight: number }>(
  items: T[],
  random = Math.random,
): T | undefined {
  const total = items.reduce((s, x) => s + Math.max(0, x.weight), 0);
  if (!total) return undefined;
  let n = random() * total;
  return items.find((x) => (n -= Math.max(0, x.weight)) < 0) || items.at(-1);
}
export function schedule(
  previous: { streak: number; interval: number } | undefined,
  correct: boolean,
  assisted: boolean,
  now = Date.now(),
) {
  const success = correct && !assisted;
  const streak = success ? (previous?.streak || 0) + 1 : 0;
  const interval = success
    ? streak === 1
      ? 1
      : streak === 2
        ? 3
        : Math.min(180, (previous?.interval || 3) * 2)
    : 0;
  return {
    streak,
    interval,
    due: now + (interval ? interval * 86400000 : 600000),
    success,
  };
}
export const categoryLabels: Record<string, string> = {
  "evaluation-loss": "Потеря оценки",
  "missed-mate": "Упущенный мат",
  "allowed-mate": "Допущенный мат",
};
// Expand recursive annotation variations into separate legal paths; keep branch comments.
export function repertoirePgn(
  text: string,
): { moves: string[]; notes: string }[] {
  const output: { moves: string[]; notes: string }[] = [];
  for (const game of splitPgn(text)) {
    if (/\[FEN\s/i.test(game))
      throw new Error(
        "Варианты репертуара должны начинаться с начальной позиции.",
      );
    const body = game.replace(/\[[^\]]*\]/g, "").replace(/;[^\n]*/g, "");
    const tokens = body.match(/\{[^}]*\}|\(|\)|[^\s(){}]+/g) || [];
    let cursor = 0;
    function walk(initial: string[], branch: boolean) {
      const moves = [...initial];
      const c = new Chess();
      moves.forEach((m) => playUci(c, m));
      const notes: string[] = [];
      while (cursor < tokens.length) {
        let token = tokens[cursor++];
        if (token === "(") {
          if (!moves.length)
            throw new Error("Ветка PGN не имеет исходного хода.");
          walk(moves.slice(0, -1), true);
          continue;
        }
        if (token === ")") {
          if (!branch) throw new Error("Лишняя скобка в PGN.");
          break;
        }
        if (token.startsWith("{")) {
          notes.push(token.slice(1, -1).trim());
          continue;
        }
        token = token.replace(/^\d+\.(?:\.\.)?/, "").replace(/[!?]+$/, "");
        if (
          !token ||
          token === "..." ||
          /^\$\d+$/.test(token) ||
          ["1-0", "0-1", "1/2-1/2", "*"].includes(token)
        )
          continue;
        const move = c.move(token);
        moves.push(uci(move));
        if (moves.length > 400)
          throw new Error("Один вариант ограничен 400 полуходами.");
      }
      if (!moves.length) throw new Error("В PGN нет ходов.");
      output.push({ moves, notes: notes.join("\n") });
      if (output.length > 1000)
        throw new Error("Импортируйте не более 1000 вариантов за один раз.");
    }
    // Reject unbalanced variation delimiters before parsing.
    let balance = 0;
    for (const token of tokens) {
      if (token === "(") balance++;
      if (token === ")") balance--;
      if (balance < 0) throw new Error("Несогласованные скобки PGN.");
    }
    if (balance) throw new Error("Незакрытая ветка PGN.");
    walk([], false);
  }
  return output;
}
