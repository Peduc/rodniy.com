import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Board, MoveStrip } from "./Board";
import { api, date, status } from "./api";
import { PageTitle, Empty, Filters } from "./main";
import { playUci } from "../shared/chess";
export function Games({ filters, setFilters, navigate, fail }: any) {
  const [data, setData] = useState<any>(null),
    [offset, setOffset] = useState(0);
  useEffect(() => {
    api("/games?" + new URLSearchParams({ ...filters, offset: String(offset) }))
      .then(setData)
      .catch(fail);
  }, [JSON.stringify(filters), offset]);
  return (
    <>
      <PageTitle
        eyebrow="ВАША ШАХМАТНАЯ ИСТОРИЯ"
        title="Партии и анализ"
        action={
          <button className="primary" onClick={() => navigate("settings")}>
            Импортировать партии ↓
          </button>
        }
      >
        Каждая оценка ведёт к конкретному решению на доске.
      </PageTitle>
      <Filters
        value={filters}
        setValue={(v: any) => {
          setOffset(0);
          setFilters(v);
        }}
      />
      <section className="panel">
        {!data ? (
          <p>Загружаем партии…</p>
        ) : !data.items.length ? (
          <Empty
            title="Начните со своей первой партии"
            action={
              <button className="primary" onClick={() => navigate("settings")}>
                Импортировать архив →
              </button>
            }
          >
            Подключите Chess.com или загрузите PGN. Здесь будут только ваши
            реальные партии.
          </Empty>
        ) : (
          <>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Дата / соперник</th>
                    <th>Цвет</th>
                    <th>Результат</th>
                    <th>Контроль</th>
                    <th>Дебют</th>
                    <th>Анализ</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {data.items.map((g: any) => (
                    <tr
                      key={g.id}
                      onClick={() => navigate("games", { gameId: g.id })}
                    >
                      <td>
                        <strong>{g.opponent}</strong>
                        <small>
                          {date(g.date)} · {g.opponent_rating || "Без рейтинга"}
                        </small>
                      </td>
                      <td>{g.color === "w" ? "○ Белые" : "● Чёрные"}</td>
                      <td>{g.result}</td>
                      <td>
                        {status[g.time_class] || g.time_class}
                        <small>{g.time_control}</small>
                      </td>
                      <td>{g.opening}</td>
                      <td>
                        <span className="badge">
                          {status[g.analysis_status]}
                        </span>
                        <small>
                          {g.analyzed}/{g.player_moves} ходов
                        </small>
                      </td>
                      <td>
                        <button aria-label={"Открыть партию с " + g.opponent}>
                          ↗
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row">
              <button
                disabled={!offset}
                onClick={() => setOffset(Math.max(0, offset - 100))}
              >
                ← Назад
              </button>
              <span>
                {offset + 1}–{offset + data.items.length} из {data.total}
              </span>
              <button
                disabled={offset + data.items.length >= data.total}
                onClick={() => setOffset(offset + 100)}
              >
                Далее →
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
}
function score(s: any) {
  return s?.type === "mate"
    ? `Мат ${s.value > 0 ? "+" : ""}${s.value}`
    : s
      ? `${s.value > 0 ? "+" : ""}${(s.value / 100).toFixed(2)}`
      : "—";
}
export function GameDetail({ id, initialPly, navigate, fail }: any) {
  const [game, setGame] = useState<any>(null),
    [index, setIndex] = useState(initialPly ? initialPly - 1 : 0),
    [pv, setPv] = useState(0),
    [positionJob, setPositionJob] = useState<string | null>(null),
    [deep, setDeep] = useState<any>(null);
  useEffect(() => {
    api("/games/" + id)
      .then(setGame)
      .catch(fail);
  }, [id]);
  useEffect(() => {
    setPv(0);
    setDeep(null);
    setPositionJob(null);
  }, [index]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        ["INPUT", "TEXTAREA", "SELECT"].includes(
          (e.target as HTMLElement)?.tagName,
        )
      )
        return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex((i) => Math.max(0, i - 1));
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setIndex((i) => Math.min(game?.moves.length || 0, i + 1));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [game]);
  useEffect(() => {
    if (!positionJob) return;
    const id = setInterval(
      () =>
        api("/jobs")
          .then((jobs) => {
            const j = jobs.find((j: any) => j.id === positionJob);
            if (j?.status === "complete") {
              setDeep(j.result);
              setPositionJob(null);
            }
            if (j?.status === "failed") {
              fail(new Error(j.error));
              setPositionJob(null);
            }
          })
          .catch(fail),
      1500,
    );
    return () => clearInterval(id);
  }, [positionJob]);
  if (!game) return <p>Загружаем партию…</p>;
  const move = game.moves[index];
  const base =
    move?.fen ||
    (() => {
      const c = new Chess();
      c.loadPgn(game.pgn);
      return c.fen();
    })();
  const a = move?.analysis;
  const continuation = deep?.pv || a?.best.pv || [];
  const c = new Chess(base);
  const pvSan: string[] = [];
  let shown = base;
  for (let i = 0; i < continuation.length; i++) {
    try {
      pvSan.push(playUci(c, continuation[i]).san);
      if (i < pv) shown = c.fen();
    } catch {
      break;
    }
  }
  return (
    <>
      <PageTitle
        eyebrow="РАЗБОР ПАРТИИ"
        title={`${game.color === "w" ? "Белыми" : "Чёрными"} против ${game.opponent}`}
        action={<button onClick={() => navigate("games")}>← Все партии</button>}
      >
        {date(game.date)} · {status[game.time_class]} · {game.result} ·{" "}
        {game.opening}
      </PageTitle>
      <div className="chess-layout">
        <section>
          <div className="board-top">
            <span>
              {game.opponent} <small>{game.opponent_rating}</small>
            </span>
            <span>
              {pv
                ? "Продолжение движка"
                : index < game.moves.length
                  ? `Перед ходом ${Math.floor(index / 2) + 1}${index % 2 ? "…" : "."}`
                  : "Итоговая позиция"}
            </span>
          </div>
          <Board fen={shown} orientation={game.color} />
          <div className="board-controls">
            <button onClick={() => setIndex(0)}>⇤</button>
            <button disabled={!index} onClick={() => setIndex(index - 1)}>
              ←
            </button>
            <span>
              {index} / {game.moves.length}
            </span>
            <button
              disabled={index === game.moves.length}
              onClick={() => setIndex(index + 1)}
            >
              →
            </button>
            <button onClick={() => setIndex(game.moves.length)}>⇥</button>
          </div>
          <MoveStrip
            moves={game.moves.map((m: any) => m.san)}
            index={index}
            onSelect={setIndex}
          />
          <p className="subtle">
            Стрелки ← → переключают ходы. Вариант движка воспроизводится
            отдельно.
          </p>
        </section>
        <section>
          <div className="panel">
            <span className="eyebrow">РЕШЕНИЕ НА ДОСКЕ</span>
            <h2>
              {move
                ? `${Math.floor(index / 2) + 1}${index % 2 ? "…" : "."} ${move.san}`
                : "Партия завершена"}
            </h2>
            {a ? (
              <>
                <span className={"badge " + (a.severity || "")}>
                  {a.severity ? status[a.severity] : "Потеря ниже порога"}
                </span>
                <p>
                  {a.explanation ||
                    "При заданном бюджете значимой потери оценки не обнаружено."}
                </p>
                <div className="eval-pair">
                  <div>
                    <small>Лучший: {a.recommendation}</small>
                    <strong>{score(a.best.score)}</strong>
                  </div>
                  <div>
                    <small>Сыграно: {move.san}</small>
                    <strong>{score(a.played.score)}</strong>
                  </div>
                </div>
                <p className="subtle">
                  Оценки с точки зрения игрока, делающего ход.{" "}
                  {a.cpLoss !== null
                    ? `Потеря ${a.cpLoss} cp.`
                    : "Матовый переход — без пересчёта в cp."}
                </p>
                <hr />
                <h4>Проверяемое продолжение</h4>
                <MoveStrip moves={pvSan} index={pv} onSelect={setPv} />
                <p className="subtle">
                  {a.best.engine} · глубина {a.best.depth}/{a.played.depth} ·
                  лимит {a.best.budget.toLocaleString()} узлов на поиск ·{" "}
                  {a.deep ? "углублённый" : "первичный"} проход
                </p>
              </>
            ) : (
              <p className="subtle">
                {move?.color !== game.color
                  ? "Этот ход сделал соперник. Глубокий разбор оценивает ваши решения."
                  : "Анализ этой позиции ещё не готов."}
              </p>
            )}
            {move && (
              <button
                disabled={!!positionJob}
                onClick={async () => {
                  try {
                    const j = await api("/position", {
                      fen: base,
                      nodes: 1000000,
                      gameId: id,
                      ply: move.ply,
                    });
                    setPositionJob(j.id);
                  } catch (e) {
                    fail(e);
                  }
                }}
              >
                {positionJob
                  ? "Углубление в очереди…"
                  : "Изучить позицию глубже ↗"}
              </button>
            )}
            {deep && (
              <>
                <p className="notice">
                  Углублённый поиск: {score(deep.score)}, глубина {deep.depth}.
                  Нажмите ходы ниже.
                </p>
                <MoveStrip moves={pvSan} index={pv} onSelect={setPv} />
              </>
            )}
          </div>
          <div className="panel">
            <h3>Связь с репертуаром</h3>
            {game.links.length ? (
              game.links.map((l: any) => (
                <div key={l.id}>
                  <strong>{l.name}</strong>
                  <p>
                    Найдено {l.followed} совпадающих позиций.{" "}
                    {l.deviation
                      ? `Первое найденное отклонение вашим ходом: ${Math.ceil(l.deviation / 2)}.`
                      : "Отклонение не найдено в подготовленных позициях."}
                  </p>
                  <button
                    onClick={() =>
                      navigate("training", { id: l.id, lineId: l.lineId })
                    }
                  >
                    Повторить ветку →
                  </button>
                  <button
                    onClick={() =>
                      navigate("repertoire", { id: l.id, lineId: l.lineId })
                    }
                  >
                    На карту →
                  </button>
                </div>
              ))
            ) : (
              <p className="subtle">Подготовленная ветка не определена.</p>
            )}
            <p className="subtle">
              Отклонение от репертуара само по себе не является шахматной
              ошибкой.
            </p>
          </div>
          <div className="row">
            <button
              onClick={async () => {
                try {
                  await api("/games/" + id + "/analyze", {});
                  const g = await api("/games/" + id);
                  setGame(g);
                } catch (e) {
                  fail(e);
                }
              }}
            >
              Поставить анализ в очередь
            </button>
            {game.url && /^https:\/\/(www\.)?chess\.com\//.test(game.url) && (
              <a href={game.url} target="_blank" rel="noreferrer">
                Оригинал партии ↗
              </a>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
export function Review({ filters, setFilters, navigate, fail }: any) {
  const [items, setItems] = useState<any[]>([]),
    [index, setIndex] = useState(0),
    [message, setMessage] = useState(""),
    [show, setShow] = useState(false),
    [assisted, setAssisted] = useState(false);
  const load = () =>
    api("/review?" + new URLSearchParams(filters))
      .then(setItems)
      .catch(fail);
  useEffect(() => {
    load();
    setIndex(0);
  }, [JSON.stringify(filters)]);
  useEffect(() => {
    setMessage("");
    setShow(false);
    setAssisted(false);
  }, [index]);
  const item = items[index];
  async function move(uci: string) {
    if (!item) return;
    try {
      playUci(new Chess(item.fen), uci);
    } catch {
      setMessage("Недопустимый ход: проверьте правила и шах королю.");
      return;
    }
    const correct = uci === item.analysis.best.bestmove;
    setMessage(
      correct
        ? "Найден рекомендованный ход. Повторение сохранено."
        : "Легальный ход, но он отличается от рекомендации. Это не доказывает, что он плохой. Попробуйте ещё раз.",
    );
    if (correct) {
      setShow(true);
    } else setAssisted(true);
    try {
      await api(`/review/${item.gameId}/${item.ply}`, { correct, assisted });
      load();
    } catch (e) {
      fail(e);
    }
  }
  return (
    <>
      <PageTitle
        eyebrow="ВОЗВРАЩАТЬСЯ, ЧТОБЫ ЗАПОМНИТЬ"
        title="Работа над ошибками"
      >
        Найдите более сильное решение, прежде чем открыть подсказку.
      </PageTitle>
      <Filters value={filters} setValue={setFilters} />
      {!item ? (
        <section className="panel">
          <Empty title="Очередь пока пуста">
            После анализа ваших партий здесь появятся позиции для повторения.
          </Empty>
        </section>
      ) : (
        <div className="chess-layout">
          <section>
            <div className="board-top">
              <span>Ход {item.color === "w" ? "белых" : "чёрных"}</span>
              <span>
                {index + 1} из {items.length}
              </span>
            </div>
            <Board fen={item.fen} orientation={item.color} onMove={move} />
            <div className="board-controls">
              <button disabled={!index} onClick={() => setIndex(index - 1)}>
                ← Назад
              </button>
              <button
                disabled={index >= items.length - 1}
                onClick={() => setIndex(index + 1)}
              >
                Следующая позиция →
              </button>
            </div>
          </section>
          <section className="panel">
            <span className="eyebrow">ИЗ ВАШЕЙ ПАРТИИ</span>
            <h2>Против {item.opponent}</h2>
            <p>
              {date(item.date)} · {item.opening} · ход {Math.ceil(item.ply / 2)}
            </p>
            <span className={"badge " + item.analysis.severity}>
              {status[item.analysis.severity]}
            </span>
            <p>
              Вы сыграли <strong>{item.san}</strong>. Какой ход предпочёл
              движок?
            </p>
            <p className="subtle">
              Повторение:{" "}
              {item.due <= Date.now() ? "пора вернуться" : date(item.due)} ·
              попыток {item.attempts}
            </p>
            {message && (
              <p role="status" className="notice">
                {message}
              </p>
            )}
            <button
              onClick={() => {
                setShow(true);
                setAssisted(true);
              }}
            >
              Показать рекомендацию
            </button>
            {show && (
              <>
                <h3>{item.analysis.recommendation}</h3>
                <p>{item.analysis.explanation}</p>
              </>
            )}
            <hr />
            <button
              className="primary"
              onClick={() =>
                navigate("games", { gameId: item.gameId, ply: item.ply })
              }
            >
              Полный разбор и продолжение →
            </button>
          </section>
        </div>
      )}
    </>
  );
}
