import { useEffect, useRef, useState } from "react";
import { Chess } from "chess.js";
import { Board, MoveStrip } from "./Board";
import { api, date } from "./api";
import { PageTitle } from "./main";
import { positionKey, playUci, weighted } from "../shared/chess";
function state(t: any) {
  return !t
    ? "untrained"
    : t.due <= Date.now()
      ? "due"
      : t.streak >= 3
        ? "mastered"
        : "learning";
}
const labels: any = {
  untrained: "Не изучено",
  due: "Пора повторить",
  mastered: "Закреплено",
  learning: "Изучается",
};
function at(moves: string[]) {
  const c = new Chess();
  moves.forEach((m) => playUci(c, m));
  return c;
}
function sans(moves: string[]) {
  const c = new Chess();
  return moves.map((m) => playUci(c, m).san);
}
export function Repertoire({ training, target, fail, navigate }: any) {
  const [priorities, setPriorities] = useState<any[]>([]),
    [list, setList] = useState<any[]>([]),
    [selected, setSelected] = useState(target?.id || "ponziani"),
    [rep, setRep] = useState<any>(null),
    [lineId, setLineId] = useState(target?.lineId || ""),
    [path, setPath] = useState<string[]>([]),
    [notes, setNotes] = useState(""),
    [lineNotes, setLineNotes] = useState(""),
    [positionNotes, setPositionNotes] = useState(""),
    [newPgn, setNewPgn] = useState(""),
    [newName, setNewName] = useState("Мой вариант"),
    [message, setMessage] = useState(""),
    [explorer, setExplorer] = useState<any>(null),
    [explorerError, setExplorerError] = useState(""),
    [rs, setRs] = useState("1600,1800,2000"),
    [ss, setSs] = useState("blitz,rapid"),
    [mode, setMode] = useState("line"),
    [length, setLength] = useState(20),
    [running, setRunning] = useState(false),
    [assisted, setAssisted] = useState(false),
    [hadHelp, setHadHelp] = useState(false),
    [busy, setBusy] = useState(false),
    [hint, setHint] = useState(false);
  const session = useRef(0),
    inFlight = useRef(false);
  const load = () =>
    api("/repertoires/" + selected).then((r) => {
      setRep(r);
      return r;
    });
  useEffect(() => {
    api("/repertoires").then(setList).catch(fail);
    api("/practice-priorities").then(setPriorities).catch(fail);
  }, []);
  useEffect(() => {
    session.current++;
    setRunning(false);
    setPath([]);
    setMessage("");
    load()
      .then((r) => {
        setNotes(r.notes);
        setLineId(
          r.lines.find((l: any) => l.id === target?.lineId)?.id ||
            r.lines[0]?.id ||
            "",
        );
      })
      .catch(fail);
  }, [selected]);
  useEffect(() => {
    setRunning(false);
    session.current++;
    setPath([]);
  }, [training]);
  const fen = at(path).fen(),
    key = positionKey(fen),
    line = rep?.lines.find((l: any) => l.id === lineId),
    record = rep?.training.find((t: any) => t.position === key),
    accepted = rep?.edges.filter((e: any) => e.position === key) || [];
  useEffect(() => {
    setLineNotes(line?.notes || "");
  }, [lineId, rep?.id]);
  useEffect(() => {
    setPositionNotes(
      rep?.positionNotes.find((n: any) => n.position === key)?.notes || "",
    );
    setHint(false);
    setAssisted(false);
  }, [key, rep?.id]);
  useEffect(() => {
    let cancelled = false;
    setExplorer(null);
    setExplorerError("");
    const timer = setTimeout(
      () =>
        api(
          "/explorer?" + new URLSearchParams({ fen, ratings: rs, speeds: ss }),
        )
          .then((r) => {
            if (!cancelled) setExplorer(r);
          })
          .catch((e) => {
            if (!cancelled) setExplorerError(e.message);
          }),
      350,
    );
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [fen, rs, ss]);
  async function finish(text: string, nextPath = path, help = hadHelp) {
    setRunning(false);
    setMessage(text);
    const completedLine = rep.lines.find(
      (l: any) => nextPath.join(" ") === l.moves.join(" "),
    );
    if (completedLine) {
      try {
        await api("/training/line", { lineId: line.id, unaided: !help });
      } catch (e) {
        fail(e);
      }
    }
    await load();
  }
  async function opponent(current: string[], sessionId: number) {
    if (inFlight.current) return;
    inFlight.current = true;
    setBusy(true);
    try {
      const c = at(current);
      if (c.isGameOver()) {
        await finish("Позиция завершена.", current);
        return;
      }
      if (current.length >= length) {
        await finish("Достигнута выбранная длина тренировки.", current);
        return;
      }
      const pos = positionKey(c.fen());
      const options = rep.edges.filter((e: any) => e.position === pos);
      if (!options.length) {
        await finish(
          "Подготовленная линия закончилась. Сохраните ветку, если хотите продолжить её изучение.",
          current,
        );
        return;
      }
      let chosen: string | undefined;
      if (mode === "line") {
        chosen = line?.moves[current.length];
        if (
          !chosen ||
          line.moves.slice(0, current.length).join(" ") !== current.join(" ")
        )
          chosen = options.find((e: any) => e.preferred)?.uci || options[0].uci;
      } else if (mode === "due") {
        chosen = [...options].sort((a: any, b: any) => {
          const ca = at([...current, a.uci]),
            cb = at([...current, b.uci]);
          const ta = rep.training.find(
              (t: any) => t.position === positionKey(ca.fen()),
            ),
            tb = rep.training.find(
              (t: any) => t.position === positionKey(cb.fen()),
            );
          return (ta?.due || 0) - (tb?.due || 0);
        })[0]?.uci;
      } else {
        const data = await api(
          "/explorer?" +
            new URLSearchParams({ fen: c.fen(), ratings: rs, speeds: ss }),
        );
        const moves = data.data.moves;
        if (data.data.other > 0) {
          const sample = weighted([
            ...moves.map((m: any) => ({ weight: m.count, uci: m.uci })),
            { weight: data.data.other, uci: "other" },
          ]);
          if (mode === "weighted" && sample?.uci === "other") {
            await finish(
              "Выбрана доля «другие ходы». Полного распределения нет: тренировку останавливаем, чтобы не искажать частоты.",
              current,
            );
            return;
          }
          chosen =
            mode === "common"
              ? [...moves].sort((a: any, b: any) => b.count - a.count)[0]?.uci
              : sample?.uci;
        } else
          chosen =
            mode === "common"
              ? [...moves].sort((a: any, b: any) => b.count - a.count)[0]?.uci
              : weighted<{ weight: number; uci: string }>(
                  moves.map((m: any) => ({ weight: m.count, uci: m.uci })),
                )?.uci;
      }
      if (sessionId !== session.current) return;
      if (!chosen) {
        await finish("В выбранной выборке нет продолжений.", current);
        return;
      }
      playUci(c, chosen);
      const next = [...current, chosen];
      setPath(next);
      setMessage("Ваш ход. Вспомните идею позиции.");
      if (
        !rep.edges.some((e: any) => e.position === positionKey(c.fen())) ||
        next.length >= length
      )
        await finish(
          "Подготовленная линия закончилась. Можно сохранить встретившуюся ветку.",
          next,
        );
    } catch (e: any) {
      if (sessionId === session.current) {
        setRunning(false);
        setMessage(
          e.message +
            " Выберите режим «Выбранный вариант» для практики без статистики.",
        );
      }
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  }
  useEffect(() => {
    if (running && rep && at(path).turn() !== rep.color)
      opponent(path, session.current);
  }, [running, path.join(" ")]);
  async function start() {
    session.current++;
    setPath([]);
    setAssisted(false);
    setHadHelp(false);
    setHint(false);
    setMessage("Ваш ход. Подсказки учитываются отдельно.");
    setRunning(true);
    if (mode === "due") {
      const sorted = [...rep.lines].sort((a: any, b: any) => {
        const ap = priorities.find((p) => p.lineId === a.id)?.mistakes || 0,
          bp = priorities.find((p) => p.lineId === b.id)?.mistakes || 0;
        return bp - ap || (a.last || 0) - (b.last || 0);
      });
      if (sorted[0]) setLineId(sorted[0].id);
    }
  }
  async function move(m: string) {
    if (busy) return;
    const c = at(path);
    try {
      playUci(c, m);
    } catch {
      setMessage(
        "Недопустимый ход: фигура так не ходит или король остаётся под шахом.",
      );
      return;
    }
    if (!training || !running) {
      setPath([...path, m]);
      setMessage(
        "Позиция изменена. Сохраните её как вариант, чтобы добавить в репертуар.",
      );
      return;
    }
    if (at(path).turn() !== rep.color) return;
    setBusy(true);
    try {
      const r = await api("/training", {
        id: crypto.randomUUID(),
        repertoireId: selected,
        fen,
        played: m,
        assisted,
        lineId,
      });
      if (r.correct) {
        const next = [...path, m];
        setPath(next);
        setMessage("Верно. Ход входит в ваш репертуар.");
        setAssisted(false);
        setHint(false);
        if (
          next.length >= length ||
          !rep.edges.some((e: any) => e.position === positionKey(c.fen()))
        )
          await finish(
            "Подготовленная линия пройдена. Прогресс сохранён.",
            next,
            hadHelp || assisted,
          );
      } else {
        setAssisted(true);
        setHadHelp(true);
        setMessage(
          "Ход легальный, но не входит в ваш репертуар. Это не оценка его шахматного качества. Попробуйте ещё раз или откройте подсказку.",
        );
      }
    } catch (e) {
      fail(e);
    } finally {
      setBusy(false);
    }
  }
  async function saveLine() {
    try {
      const pgn = at(path).pgn();
      await api("/repertoires/" + selected + "/lines", {
        name: "Встретившаяся ветка",
        pgn,
      });
      await load();
      setMessage("Ветка сохранена. Дополните её ходами и заметками.");
    } catch (e) {
      fail(e);
    }
  }
  if (!rep) return <p>Загружаем репертуар…</p>;
  return (
    <>
      <PageTitle
        eyebrow={training ? "ОТ ЗНАНИЯ К ПРИВЫЧКЕ" : "ВАША КАРТА ДЕБЮТОВ"}
        title={training ? "Практика за доской" : "Мой репертуар"}
        action={
          <button
            className="primary"
            onClick={() =>
              navigate(training ? "repertoire" : "training", {
                id: selected,
                lineId,
              })
            }
          >
            {training ? "Изучить карту" : "Тренировать дебют"} ↗
          </button>
        }
      >
        {training
          ? "Вспоминайте самостоятельно. Возвращайтесь к трудным позициям."
          : "Восемь отдельных репертуаров. Ваши ходы, планы и заметки."}
      </PageTitle>
      <div className="repertoire-tabs">
        {list.map((r) => (
          <button
            key={r.id}
            className={r.id === selected ? "active" : ""}
            onClick={() => setSelected(r.id)}
          >
            <span>
              {r.color === "w" ? "○" : "●"} {r.name}
            </span>
            <small>
              {r.lineCount} ветки · {r.due} к повторению
            </small>
          </button>
        ))}
      </div>
      {priorities.filter((p) => p.id === selected).length > 0 && (
        <p className="notice">
          Связано с вашими ошибками:{" "}
          {priorities
            .filter((p) => p.id === selected)
            .map((p) => `${p.mistakes} позиций в ${p.games} партиях`)
            .join("; ")}
          . Режим повторения отдаёт этим веткам приоритет.
        </p>
      )}
      <div className="opening-heading">
        <div>
          <span className="eyebrow">
            {rep.color === "w" ? "ЗА БЕЛЫХ" : "ЗА ЧЁРНЫХ"} · {rep.english}
          </span>
          <h2>{rep.name}</h2>
        </div>
        <span className="badge">{rep.lines.length} подготовленных веток</span>
      </div>
      <div className="chess-layout">
        <section>
          <div className="board-top">
            <span>
              {training
                ? running
                  ? "Тренировка идёт"
                  : "Готовы к практике?"
                : "Исследование позиции"}
            </span>
            <span className={"training-state " + state(record)}>
              {labels[state(record)]}
            </span>
          </div>
          <Board
            fen={fen}
            orientation={rep.color}
            onMove={move}
            last={path.at(-1)}
            disabled={busy || (running && at(path).turn() !== rep.color)}
          />
          <div className="board-controls">
            <button disabled={running} onClick={() => setPath([])}>
              ⇤
            </button>
            <button
              disabled={running || !path.length}
              onClick={() => setPath(path.slice(0, -1))}
            >
              ←
            </button>
            <span>{path.length} полуходов</span>
            <button
              onClick={() => {
                session.current++;
                setRunning(false);
                setPath([]);
                setMessage("");
              }}
            >
              Начать заново ↺
            </button>
          </div>
          <MoveStrip
            moves={sans(path)}
            index={path.length}
            onSelect={(n) => {
              if (!running) setPath(path.slice(0, n));
            }}
          />
          {message && (
            <p role="status" className="notice">
              {message}
            </p>
          )}
          {training && (
            <section className="panel">
              <div className="form-row">
                <label>
                  Режим
                  <select
                    disabled={running}
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                  >
                    <option value="line">Выбранный вариант</option>
                    <option value="weighted">По частотам Lichess</option>
                    <option value="common">Самые частые ответы</option>
                    <option value="due">Неизученное и к повторению</option>
                  </select>
                </label>
                <label>
                  Длина, полуходов
                  <input
                    disabled={running}
                    type="number"
                    min="4"
                    max="100"
                    value={length}
                    onChange={(e) =>
                      setLength(
                        Math.max(4, Math.min(100, Number(e.target.value))),
                      )
                    }
                  />
                </label>
              </div>
              <div className="row">
                <button
                  className="primary"
                  disabled={busy || running || !line}
                  onClick={start}
                >
                  Начать практику →
                </button>
                <button
                  disabled={!running}
                  onClick={() => {
                    setHint(true);
                    setAssisted(true);
                    setHadHelp(true);
                  }}
                >
                  Подсказка
                </button>
                <button disabled={!path.length || running} onClick={saveLine}>
                  Сохранить ветку
                </button>
              </div>
              {hint && (
                <p>
                  Подготовленные ходы:{" "}
                  {accepted
                    .map((e: any) => playUci(new Chess(fen), e.uci).san)
                    .join(", ") || "Линия закончилась"}
                  . {rep.notes}
                </p>
              )}
              <p className="subtle">
                Свои решения вы выбираете сами. В режиме одной ветки принимаются
                и другие подготовленные ходы. Подсказка или повтор после ошибки
                не считается самостоятельным воспоминанием.
              </p>
            </section>
          )}
          <section className="panel">
            <h3>Знание позиции</h3>
            <p>
              {record
                ? `${record.attempts} попыток · ${record.mistakes} ошибок · ${record.unaided} самостоятельных · ${record.assisted} с помощью`
                : "Эта позиция ещё не тренировалась."}
            </p>
            <p className="subtle">
              Последняя практика: {date(record?.last)}. Следующее повторение:{" "}
              {record ? date(record.due) : "после первой попытки"}.
            </p>
            <p className="subtle">
              Знание объединяется при перестановке ходов по позиции, очереди
              хода, рокировкам и взятию на проходе. Полное воспроизведение ветки
              учитывается отдельно.
            </p>
          </section>
        </section>
        <section>
          <div className="panel">
            <label>
              Подготовленный вариант
              <select
                disabled={running}
                value={lineId}
                onChange={(e) => {
                  setLineId(e.target.value);
                  setPath([]);
                }}
              >
                {rep.lines.map((l: any) => (
                  <option key={l.id} value={l.id}>
                    {l.name}
                  </option>
                ))}
              </select>
            </label>
            {line && (!training || !running) && (
              <>
                <MoveStrip
                  moves={sans(line.moves)}
                  index={path.length}
                  onSelect={(n) => {
                    if (!running) setPath(line.moves.slice(0, n));
                  }}
                />
                <p className="subtle">
                  Полных повторений: {line.attempts || 0} · самостоятельно:{" "}
                  {line.unaided || 0}
                </p>
              </>
            )}
            {line && (!running || hint) && line.notes && (
              <>
                <h3>Идея выбранной ветки</h3>
                <p>{line.notes}</p>
              </>
            )}
            <h3>План и ориентиры</h3>
            {training ? (
              <p>
                {running && !hint
                  ? "План скрыт во время практики. Откройте подсказку, если нужна помощь."
                  : notes}
              </p>
            ) : (
              <>
                <textarea
                  className="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <button
                  onClick={async () => {
                    try {
                      await api("/repertoires/" + selected, { notes }, "PUT");
                      await load();
                      setMessage("План сохранён.");
                    } catch (e) {
                      fail(e);
                    }
                  }}
                >
                  Сохранить план
                </button>
              </>
            )}
            <p className="subtle">
              Редакционные, редактируемые заметки. Они не являются оценкой
              Stockfish или статистическим фактом.
            </p>
          </div>
          <div className="panel">
            <div className="panel-heading">
              <h3>Как играют люди</h3>
              <span className="badge">Lichess</span>
            </div>
            <div className="form-row">
              <label>
                Рейтинг
                <select value={rs} onChange={(e) => setRs(e.target.value)}>
                  <option value="0,1000,1200,1400,1600,1800,2000,2200,2500">
                    Все группы
                  </option>
                  <option value="0,1000,1200,1400">До 1600</option>
                  <option value="1600,1800,2000">1600–2199</option>
                  <option value="2200,2500">2200+</option>
                </select>
              </label>
              <label>
                Контроль
                <select value={ss} onChange={(e) => setSs(e.target.value)}>
                  <option value="blitz,rapid">Блиц и рапид</option>
                  <option value="rapid">Рапид</option>
                  <option value="blitz">Блиц</option>
                  <option value="bullet">Пуля</option>
                  <option value="ultraBullet">Ультрапуля</option>
                  <option value="classical">Классика</option>
                  <option value="correspondence">Заочные</option>
                </select>
              </label>
            </div>
            {explorer ? (
              <>
                <p className="subtle">
                  {explorer.data.total.toLocaleString()} партий · получено{" "}
                  {date(explorer.fetched)}
                  {explorer.cached ? " · из кеша" : ""}
                </p>
                <div className="explorer-moves">
                  {explorer.data.moves.map((m: any) => (
                    <button
                      key={m.uci}
                      disabled={running}
                      onClick={() => setPath([...path, m.uci])}
                    >
                      <strong>{m.san}</strong>
                      <div className="frequency-bar">
                        <i style={{ width: 100 * m.frequency + "%" }} />
                      </div>
                      <span>
                        {(100 * m.frequency).toFixed(1)}%
                        <small>{m.count} партий</small>
                      </span>
                      <span title="Победы белых / ничьи / победы чёрных">
                        {m.white} / {m.draws} / {m.black}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="subtle">
                  Другие ходы: {explorer.data.other} (
                  {explorer.data.total
                    ? (
                        (100 * explorer.data.other) /
                        explorer.data.total
                      ).toFixed(1)
                    : 0}
                  %). Результаты: победы белых / ничьи / победы чёрных.
                </p>
              </>
            ) : (
              <p className="notice">
                {explorerError || "Загружаем статистику…"}
              </p>
            )}
            <p className="subtle">
              Популярность не означает качество. Эти частоты не предсказывают
              ход конкретного соперника.
            </p>
          </div>
        </section>
      </div>
      {rep.lines.length < rep.totalLines && (
        <button
          onClick={async () => {
            try {
              const page = await api(
                "/repertoires/" + selected + "?offset=" + rep.lines.length,
              );
              setRep({ ...page, lines: [...rep.lines, ...page.lines] });
            } catch (e) {
              fail(e);
            }
          }}
        >
          Загрузить ещё варианты ({rep.lines.length}/{rep.totalLines})
        </button>
      )}
      {!training && (
        <>
          <section className="panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">ВАРИАНТЫ И ПЕРЕСТАНОВКИ</span>
                <h3>Карта дебюта</h3>
              </div>
              <span className="subtle">
                Нажмите позицию · тяните фон · масштабируйте
              </span>
            </div>
            <VariationMap
              rep={rep}
              current={path}
              onSelect={setPath}
              explorer={explorer}
            />
            <div className="legend">
              {Object.keys(labels).map((k) => (
                <span key={k}>
                  <i className={k} />
                  {labels[k]}
                </span>
              ))}
            </div>
          </section>
          <div className="two-col">
            <section className="panel">
              <h3>Редактор вариантов</h3>
              <label>
                Название
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </label>
              <label>
                Ходы SAN или PGN
                <textarea
                  value={newPgn}
                  onChange={(e) => setNewPgn(e.target.value)}
                  placeholder="1. e4 e5 2. Nf3 Nc6…"
                />
              </label>
              <input
                aria-label="Импорт репертуара PGN"
                type="file"
                accept=".pgn,.txt"
                onChange={async (e) => {
                  const f = e.target.files?.[0];
                  if (f) setNewPgn(await f.text());
                }}
              />
              <div className="row">
                <button
                  className="primary"
                  onClick={async () => {
                    try {
                      await api("/repertoires/" + selected + "/lines", {
                        name: newName,
                        pgn: newPgn,
                      });
                      await load();
                      setNewPgn("");
                      setMessage(
                        "Вариант добавлен. Все ваши ходы в нём принимаются тренажёром.",
                      );
                    } catch (e) {
                      fail(e);
                    }
                  }}
                >
                  Добавить вариант
                </button>
                <a
                  className="button"
                  href={"/chess/api/repertoires/" + selected + "/pgn"}
                >
                  Экспорт PGN ↓
                </a>
                <button onClick={saveLine} disabled={!path.length}>
                  Сохранить позицию с путём
                </button>
              </div>
              <p className="subtle">
                PGN может содержать боковые ветки и комментарии. Ветки
                сохраняются отдельными вариантами; их ходы становятся
                допустимыми ответами в репертуаре.
              </p>
              {line && (
                <>
                  <hr />
                  <label>
                    Заметка выбранной ветки
                    <textarea
                      value={lineNotes}
                      onChange={(e) => setLineNotes(e.target.value)}
                    />
                  </label>
                  <button
                    onClick={async () => {
                      try {
                        await api(
                          "/lines/" + line.id,
                          { notes: lineNotes },
                          "PUT",
                        );
                        await load();
                        setMessage("Заметка ветки сохранена.");
                      } catch (e) {
                        fail(e);
                      }
                    }}
                  >
                    Сохранить заметку ветки
                  </button>
                  <button
                    className="danger"
                    onClick={async () => {
                      if (
                        !window.confirm(
                          "Удалить выбранный вариант? История тренировок сохранится.",
                        )
                      )
                        return;
                      try {
                        await api("/lines/" + line.id, {}, "DELETE");
                        const r = await load();
                        setLineId(r.lines[0]?.id || "");
                        setPath([]);
                      } catch (e) {
                        fail(e);
                      }
                    }}
                  >
                    Удалить вариант
                  </button>
                </>
              )}
            </section>
            <section className="panel">
              <h3>Заметки текущей позиции</h3>
              <textarea
                value={positionNotes}
                onChange={(e) => setPositionNotes(e.target.value)}
                placeholder="План, ключевые поля, чего стоит избегать…"
              />
              <button
                onClick={async () => {
                  try {
                    await api(
                      "/repertoires/" + selected + "/position",
                      { fen, notes: positionNotes },
                      "PUT",
                    );
                    await load();
                    setMessage("Заметка позиции сохранена.");
                  } catch (e) {
                    fail(e);
                  }
                }}
              >
                Сохранить заметку
              </button>
              <hr />
              <h3>Принимаемые ходы</h3>
              {accepted.length ? (
                accepted.map((e: any) => (
                  <div className="accepted" key={e.uci}>
                    <strong>{playUci(new Chess(fen), e.uci).san}</strong>
                    <span>
                      {e.preferred
                        ? "Предпочтительный"
                        : "Допустимый в репертуаре"}
                    </span>
                    <button
                      onClick={async () => {
                        try {
                          await api(
                            "/repertoires/" + selected + "/preferred",
                            { fen, uci: e.uci },
                            "PUT",
                          );
                          await load();
                        } catch (e) {
                          fail(e);
                        }
                      }}
                    >
                      ★
                    </button>
                  </div>
                ))
              ) : (
                <p className="subtle">
                  Линия заканчивается. Сделайте ход на доске и сохраните путь,
                  чтобы продолжить.
                </p>
              )}
              <p className="subtle">
                Все перечисленные ходы принимаются. Предпочтительный ход
                используется как ориентир, ваши решения не выбираются случайно.
              </p>
            </section>
          </div>
        </>
      )}
    </>
  );
}
function VariationMap({ rep, current, onSelect, explorer }: any) {
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set()),
    [limit, setLimit] = useState(80),
    [zoom, setZoom] = useState(1),
    [pan, setPan] = useState({ x: 20, y: 20 });
  const drag = useRef<any>(null);
  const root: any = {
    id: "",
    san: "Начало",
    path: [],
    children: [],
    fen: new Chess().fen(),
  };
  for (const line of rep.lines) {
    let node = root;
    const c = new Chess();
    line.moves.forEach((m: string, i: number) => {
      const played = playUci(c, m);
      let next = node.children.find((n: any) => n.uci === m);
      if (!next) {
        next = {
          id: line.moves.slice(0, i + 1).join(" "),
          uci: m,
          san: played.san,
          path: line.moves.slice(0, i + 1),
          fen: c.fen(),
          children: [],
        };
        node.children.push(next);
      }
      node = next;
    });
  }
  const nodes: any[] = [],
    edges: any[] = [];
  let row = 0;
  function visit(n: any, depth: number, parent?: any) {
    if (nodes.length >= limit) return;
    n.x = depth * 120;
    n.y = row++ * 58;
    nodes.push(n);
    if (parent) edges.push([parent, n]);
    if (!collapsed.has(n.id))
      n.children.forEach((child: any) => visit(child, depth + 1, n));
  }
  visit(root, 0);
  const duplicates = new Map<string, number>();
  nodes.forEach((n) =>
    duplicates.set(
      positionKey(n.fen),
      (duplicates.get(positionKey(n.fen)) || 0) + 1,
    ),
  );
  return (
    <>
      <div className="map-tools">
        <button onClick={() => setZoom(Math.max(0.25, zoom - 0.15))}>−</button>
        <span>{Math.round(zoom * 100)}%</span>
        <button onClick={() => setZoom(Math.min(2, zoom + 0.15))}>+</button>
        <button
          onClick={() => {
            setPan({ x: 20, y: 20 });
            setZoom(1);
          }}
        >
          К началу
        </button>
        {nodes.length >= limit && (
          <button onClick={() => setLimit(limit + 80)}>Ещё 80 позиций</button>
        )}
      </div>
      <svg
        className="variation-map"
        role="group"
        aria-label="Интерактивная карта дебютных вариантов"
        onPointerDown={(e) => {
          if ((e.target as Element).tagName === "svg") {
            drag.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
            e.currentTarget.setPointerCapture(e.pointerId);
          }
        }}
        onPointerMove={(e) => {
          if (drag.current)
            setPan({
              x: e.clientX - drag.current.x,
              y: e.clientY - drag.current.y,
            });
        }}
        onPointerUp={() => (drag.current = null)}
      >
        <g transform={`translate(${pan.x},${pan.y}) scale(${zoom})`}>
          {edges.map(([a, b]) => (
            <path
              key={b.id}
              d={`M ${a.x + 80} ${a.y + 20} H ${b.x - 14} V ${b.y + 20} H ${b.x}`}
              fill="none"
              stroke="#ccd5ce"
              strokeWidth="1.5"
            />
          ))}
          {nodes.map((n) => {
            const t = rep.training.find(
              (t: any) => t.position === positionKey(n.fen),
            );
            const frequency =
              n.path.length === current.length + 1 &&
              n.path.slice(0, -1).join(" ") === current.join(" ")
                ? explorer?.data.moves.find((m: any) => m.uci === n.uci)
                : null;
            return (
              <g key={n.id} transform={`translate(${n.x},${n.y})`}>
                <g
                  tabIndex={0}
                  role="button"
                  aria-label={n.san + " " + labels[state(t)]}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") onSelect(n.path);
                  }}
                  onClick={() => onSelect(n.path)}
                  className={
                    "map-node " +
                    state(t) +
                    (n.id === current.join(" ") ? " current" : "")
                  }
                >
                  <title>
                    {labels[state(t)]}; попыток {t?.attempts || 0}; ошибок{" "}
                    {t?.mistakes || 0}; без помощи {t?.unaided || 0}; последняя
                    практика {date(t?.last)}
                    {frequency
                      ? `; ${frequency.count} партий из ${explorer.data.total}`
                      : ""}
                  </title>
                  <rect width="80" height="40" rx="9" />
                  <text x="40" y="25" textAnchor="middle">
                    {n.san}
                    {(duplicates.get(positionKey(n.fen)) || 0) > 1 ? " ↔" : ""}
                  </text>
                </g>
                {n.children.length > 0 && (
                  <g
                    role="button"
                    tabIndex={0}
                    aria-label="Свернуть или раскрыть ветку"
                    className="collapse-node"
                    onClick={() =>
                      setCollapsed((s) => {
                        const next = new Set(s);
                        next.has(n.id) ? next.delete(n.id) : next.add(n.id);
                        return next;
                      })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter")
                        setCollapsed((s) => {
                          const next = new Set(s);
                          next.has(n.id) ? next.delete(n.id) : next.add(n.id);
                          return next;
                        });
                    }}
                  >
                    <circle cx="84" cy="20" r="9" />
                    <text x="84" y="24" textAnchor="middle">
                      {collapsed.has(n.id) ? "+" : "−"}
                    </text>
                  </g>
                )}
                {frequency && (
                  <text x="0" y="53" className="node-frequency">
                    {(frequency.frequency * 100).toFixed(1)}% · n=
                    {frequency.count}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>
      <p className="subtle">
        ↔ — эквивалентная позиция в другом порядке ходов. Частоты и размер
        выборки отображаются для загруженных продолжений выбранного узла.
      </p>
    </>
  );
}
