import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Chess } from "chess.js";
import { Board } from "./Board";
import { api, date, status } from "./api";
import { Games, Review, GameDetail } from "./games";
import { Repertoire } from "./repertoire";
import "./style.css";
const tabs = [
  ["overview", "Обзор", "◫"],
  ["games", "Партии и анализ", "♙"],
  ["review", "Работа над ошибками", "◎"],
  ["repertoire", "Мой репертуар", "⑂"],
  ["training", "Тренировка", "▷"],
  ["settings", "Настройки", "⚙"],
];
function App() {
  const [session, setSession] = useState<any>(null),
    [tab, setTab] = useState("overview"),
    [error, setError] = useState(""),
    [password, setPassword] = useState(""),
    [target, setTarget] = useState<any>(null),
    [settings, setSettings] = useState<any>(null),
    [jobs, setJobs] = useState<any[]>([]),
    [filters, setFilters] = useState<any>({}),
    [busy, setBusy] = useState(false);
  const fail = (e: any) => setError(e.message || String(e));
  function navigate(t: string, data?: any) {
    setTab(t);
    setTarget(data || null);
    setError("");
  }
  const refresh = async () => {
    const [s, j] = await Promise.all([api("/settings"), api("/jobs")]);
    setSettings(s);
    setJobs(j);
  };
  useEffect(() => {
    api("/session").then(setSession).catch(fail);
  }, []);
  useEffect(() => {
    if (!session?.authenticated) return;
    refresh().catch(fail);
    const id = setInterval(() => refresh().catch(fail), 5000);
    return () => clearInterval(id);
  }, [session?.authenticated]);
  if (!session || !session.authenticated)
    return (
      <div className="login">
        <div className="login-art">
          <div className="brand">
            <span>♞</span> РОДНОЙ ХОД
          </div>
          <h1>
            Каждая партия —<br />
            <em>следующий шаг.</em>
          </h1>
          <p>
            Изучайте свои решения. Собирайте репертуар.
            <br />
            Возвращайтесь к доске с пониманием.
          </p>
          <Board fen={new Chess().fen()} />
          <span className="eyebrow">ЛИЧНАЯ ШАХМАТНАЯ МАСТЕРСКАЯ</span>
        </div>
        <form
          className="login-form"
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true);
            try {
              await api("/login", { password });
              setSession(await api("/session"));
              setError("");
            } catch (e) {
              fail(e);
            } finally {
              setBusy(false);
            }
          }}
        >
          <span className="eyebrow">ДОБРО ПОЖАЛОВАТЬ</span>
          <h2>
            Ваша игра.
            <br />
            Ваш путь.
          </h2>
          <p>Войдите, чтобы продолжить изучение партий и сохранить прогресс.</p>
          <label>
            Пароль владельца
            <input
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="primary" disabled={busy || !session?.configured}>
            {busy ? "Входим…" : "Открыть мастерскую →"}
          </button>
          {session && !session.configured && (
            <p className="notice">
              Сначала настройте пароль владельца на сервере. Инструкция
              находится в README проекта.
            </p>
          )}
          {error && (
            <p role="alert" className="error">
              {error}
            </p>
          )}
          <small>
            Личное пространство. Данные партий и прогресс защищены паролем.
          </small>
        </form>
      </div>
    );
  const activeJobs = jobs.filter((j) =>
    ["running", "queued"].includes(j.status),
  );
  return (
    <div className="layout">
      <aside>
        <button className="brand" onClick={() => navigate("overview")}>
          <span>♞</span>
          <div>
            РОДНОЙ ХОД<small>Шахматная мастерская</small>
          </div>
        </button>
        <div className="sidebar-caption">ВАША ПРАКТИКА</div>
        <nav>
          {tabs.map(([id, label, icon]) => (
            <button
              key={id}
              className={tab === id ? "active" : ""}
              onClick={() => navigate(id)}
            >
              <span>{icon}</span>
              {label}
              {id === "review" && <i>↗</i>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <span className="small-dot" /> Личное пространство
          <p>{settings?.owner || "Аккаунт ещё не подключён"}</p>
          <button
            className="text-button"
            onClick={async () => {
              await api("/logout");
              setSession({ authenticated: false, configured: true });
            }}
          >
            Выйти ↗
          </button>
        </div>
      </aside>
      <main>
        <header>
          <div>
            <span className="breadcrumb">
              Мастерская <span>/</span> {tabs.find((t) => t[0] === tab)?.[1]}
            </span>
          </div>
          <span className="header-date">{date(Date.now())}</span>
        </header>
        {error && (
          <div className="error global" role="alert">
            {error}
            <button aria-label="Закрыть" onClick={() => setError("")}>
              ×
            </button>
          </div>
        )}
        {activeJobs.length > 0 && (
          <button className="job-banner" onClick={() => navigate("settings")}>
            ◌ Обработка продолжается ·{" "}
            {activeJobs.filter((j) => j.kind === "import").length} импорт ·{" "}
            {activeJobs.filter((j) => j.kind !== "import").length} анализ{" "}
            <span>Подробнее →</span>
          </button>
        )}
        {tab === "overview" && (
          <Overview
            navigate={navigate}
            fail={fail}
            filters={filters}
            setFilters={setFilters}
          />
        )}
        {tab === "games" &&
          (target?.gameId ? (
            <GameDetail
              id={target.gameId}
              initialPly={target.ply}
              navigate={navigate}
              fail={fail}
            />
          ) : (
            <Games
              filters={filters}
              setFilters={setFilters}
              navigate={navigate}
              fail={fail}
            />
          ))}
        {tab === "review" && (
          <Review
            filters={filters}
            setFilters={setFilters}
            navigate={navigate}
            fail={fail}
          />
        )}
        {(tab === "repertoire" || tab === "training") && (
          <Repertoire
            training={tab === "training"}
            target={target}
            fail={fail}
            navigate={navigate}
          />
        )}
        {tab === "settings" && settings && (
          <Settings
            value={settings}
            jobs={jobs}
            refresh={refresh}
            fail={fail}
          />
        )}
        <footer>
          РОДНОЙ ХОД <span>Осмысленная практика. Ход за ходом.</span>
        </footer>
      </main>
    </div>
  );
}
export function Filters({
  value,
  setValue,
}: {
  value: any;
  setValue: (x: any) => void;
}) {
  const update = (key: string, v: string) => setValue({ ...value, [key]: v });
  return (
    <div className="filters">
      <label>
        С даты
        <input
          type="date"
          value={value.from || ""}
          onChange={(e) => update("from", e.target.value)}
        />
      </label>
      <label>
        По дату
        <input
          type="date"
          value={value.to || ""}
          onChange={(e) => update("to", e.target.value)}
        />
      </label>
      <label>
        Контроль
        <select
          value={value.time || ""}
          onChange={(e) => update("time", e.target.value)}
        >
          <option value="">Все контроли</option>
          {["bullet", "blitz", "rapid", "daily", "other"].map((t) => (
            <option key={t} value={t}>
              {status[t]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Цвет
        <select
          value={value.color || ""}
          onChange={(e) => update("color", e.target.value)}
        >
          <option value="">Оба цвета</option>
          <option value="w">Белые</option>
          <option value="b">Чёрные</option>
        </select>
      </label>
      <label>
        Стадия
        <select
          value={value.phase || ""}
          onChange={(e) => update("phase", e.target.value)}
        >
          <option value="">Вся партия</option>
          {["opening", "middlegame", "endgame"].map((t) => (
            <option key={t} value={t}>
              {status[t]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Дебют
        <input
          placeholder="Название или ECO"
          value={value.opening || ""}
          onChange={(e) => update("opening", e.target.value)}
        />
      </label>
      <label>
        Тип
        <select
          value={value.category || ""}
          onChange={(e) => update("category", e.target.value)}
        >
          <option value="">Все ошибки</option>
          <option value="evaluation-loss">Потеря оценки</option>
          <option value="missed-mate">Упущенный мат</option>
          <option value="allowed-mate">Допущенный мат</option>
        </select>
      </label>
      <button className="text-button" onClick={() => setValue({})}>
        Сбросить
      </button>
    </div>
  );
}
export function PageTitle({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="page-title">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
      {action}
    </div>
  );
}
export function Empty({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="empty">
      <span>♙</span>
      <h3>{title}</h3>
      <p>{children}</p>
      {action}
    </div>
  );
}
function Overview({ navigate, fail, filters, setFilters }: any) {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    api("/stats?" + new URLSearchParams(filters))
      .then(setData)
      .catch(fail);
  }, [JSON.stringify(filters)]);
  return (
    <>
      <PageTitle
        eyebrow="ВИДЕТЬ БОЛЬШЕ. ИГРАТЬ ЛУЧШЕ."
        title="Ваша игра в перспективе"
        action={
          <button className="primary" onClick={() => navigate("training")}>
            Начать тренировку ↗
          </button>
        }
      >
        Прошлые решения становятся планом следующей победы.
      </PageTitle>
      <div className="hero">
        <div>
          <span className="eyebrow">НЕ ПРОСТО ЕЩЁ ОДНА ПАРТИЯ</span>
          <h2>
            Замечайте закономерности.
            <br />
            <em>Меняйте свою игру.</em>
          </h2>
          <p>
            Разбор ваших партий и дебютный репертуар —<br />в одном пространстве
            для спокойной практики.
          </p>
          <button onClick={() => navigate("games")}>
            Перейти к партиям <span>→</span>
          </button>
        </div>
        <div className="hero-chess" aria-hidden="true">
          <span>♞</span>
          <div className="hero-caption">01 / АНАЛИЗ → ПРАКТИКА</div>
        </div>
      </div>
      <Filters value={filters} setValue={setFilters} />
      <div className="metrics">
        {[
          [
            "Партий в выборке",
            data?.games ?? "—",
            "Реальные импортированные партии",
          ],
          [
            "Изучено позиций",
            data?.analyzed ?? "—",
            `Из ${data?.moves ?? 0} ваших ходов`,
          ],
          [
            "Ошибок на 100 ходов",
            data?.analyzed
              ? ((100 * data.mistakes) / data.analyzed).toFixed(1)
              : "—",
            "Только проанализированные ходы",
          ],
          [
            "Покрытие анализа",
            data?.moves
              ? Math.round((100 * data.analyzed) / data.moves) + "%"
              : "—",
            "Учитывайте перед сравнением",
          ],
        ].map(([title, value, note], i) => (
          <button
            className="metric"
            key={title}
            onClick={() => navigate(i === 2 ? "review" : "games")}
          >
            <small>
              {title} <span>↗</span>
            </small>
            <strong>{value}</strong>
            <p>{note}</p>
          </button>
        ))}
      </div>
      <div className="two-col">
        <section className="panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">ДИНАМИКА</span>
              <h3>Решения со временем</h3>
            </div>
            <span className="badge">Ошибок / 100 ходов</span>
          </div>
          {data?.series.length ? (
            <>
              <div className="chart">
                {data.series.map((m: any) => (
                  <button
                    title={`${m.month}: ${m.mistakes} ошибок, ${m.analyzed} ходов, покрытие ${Math.round(m.coverage * 100)}%`}
                    key={m.month}
                    onClick={() => {
                      setFilters({
                        ...filters,
                        from: m.month + "-01",
                        to: new Date(
                          Number(m.month.slice(0, 4)),
                          Number(m.month.slice(5, 7)),
                          0,
                          12,
                        ).toLocaleDateString("sv-SE"),
                      });
                      navigate("review");
                    }}
                  >
                    <span>{m.rate.toFixed(1)}</span>
                    <i
                      style={{
                        height: Math.max(
                          4,
                          (m.rate /
                            Math.max(
                              ...data.series.map((x: any) => x.rate),
                              1,
                            )) *
                            130,
                        ),
                      }}
                    />
                    <small>{m.month}</small>
                  </button>
                ))}
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Месяц</th>
                      <th>Партий</th>
                      <th>Ошибок / тяжёлых</th>
                      <th>Изучено ходов</th>
                      <th>Покрытие</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.series.map((m: any) => (
                      <tr key={m.month}>
                        <td>{m.month}</td>
                        <td>{m.games}</td>
                        <td>
                          {m.mistakes} / {m.severe}
                        </td>
                        <td>
                          {m.analyzed} / {m.moves}
                        </td>
                        <td>{Math.round(m.coverage * 100)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="subtle">
                Нажмите на месяц, чтобы открыть позиции. Высота столбца —
                частота ошибок, а не их число.
              </p>
            </>
          ) : (
            <Empty
              title="Здесь появится ваша история"
              action={
                <button
                  className="primary"
                  onClick={() => navigate("settings")}
                >
                  Подключить Chess.com →
                </button>
              }
            >
              Импортируйте партии. Движок изучит их по порядку, от ранних к
              новым.
            </Empty>
          )}
        </section>
        <section className="panel dark-panel">
          <span className="eyebrow">ОСОЗНАННОЕ ПОВТОРЕНИЕ</span>
          <h2>
            Знать ход.
            <br />
            <em>Понимать идею.</em>
          </h2>
          <p>
            Восемь дебютов, отдельные репертуары за белых и чёрных. Изучайте
            планы и проверяйте себя на доске.
          </p>
          <div className="opening-pills">
            <span>Понциани</span>
            <span>Французская</span>
            <span>Лондон</span>
            <span>+5 дебютов</span>
          </div>
          <button onClick={() => navigate("repertoire")}>
            Открыть репертуар →
          </button>
        </section>
      </div>
      <section className="panel">
        <div className="panel-heading">
          <h3>Что требует внимания</h3>
          <label>
            Период сравнения
            <select
              value={filters.days || 90}
              onChange={(e) => setFilters({ ...filters, days: e.target.value })}
            >
              <option value="30">30 дней</option>
              <option value="90">90 дней</option>
              <option value="180">180 дней</option>
            </select>
          </label>
        </div>
        {data?.weaknesses.length ? (
          data.weaknesses.map((g: any) => (
            <button
              className="weakness"
              key={g.category}
              onClick={() => {
                setFilters({ ...filters, category: g.category });
                navigate("review");
              }}
            >
              <span className="weakness-icon">◎</span>
              <div>
                <strong>
                  {g.category === "evaluation-loss"
                    ? "Потеря оценки"
                    : g.category === "missed-mate"
                      ? "Упущенный мат"
                      : "Допущенный мат"}
                </strong>
                <p>
                  {status[g.trend]} · раньше {g.older.count}/{g.older.analyzed}{" "}
                  ходов → недавно {g.recent.count}/{g.recent.analyzed} ходов
                </p>
              </div>
              <span>{g.count} позиций →</span>
            </button>
          ))
        ) : (
          <p className="subtle">
            После анализа здесь появятся повторяющиеся ошибки с примерами из
            ваших партий.
          </p>
        )}
        <p className="subtle">
          Тенденции считаются только для одного контроля, при ≥200 изученных
          ходов и ≥90% покрытия в каждом периоде. Это описательное сравнение, а
          не доказательство устранения слабости.
        </p>
      </section>
    </>
  );
}
function Settings({ value, jobs, refresh, fail }: any) {
  const [owner, setOwner] = useState(value.owner),
    [analysis, setAnalysis] = useState(value.analysis),
    [message, setMessage] = useState(""),
    [pgn, setPgn] = useState("");
  const act = async (f: () => Promise<any>, text: string) => {
    try {
      await f();
      setMessage(text);
      refresh();
    } catch (e) {
      fail(e);
    }
  };
  return (
    <>
      <PageTitle eyebrow="ВАШЕ ПРОСТРАНСТВО" title="Настройки и импорт">
        Подключите историю партий и выберите глубину изучения.
      </PageTitle>
      {message && (
        <p role="status" className="notice">
          {message}
        </p>
      )}
      <div className="two-col">
        <section className="panel">
          <h3>Партии Chess.com</h3>
          <p className="subtle">
            Импорт завершённых партий стандартных шахмат, от ранних к новым.
            Повторная синхронизация не создаёт дубликаты. Независимый проект, не
            связанный с Chess.com.
          </p>
          <label>
            Имя пользователя или ссылка
            <input
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              placeholder="chess.com/member/…"
            />
          </label>
          <button
            className="primary"
            onClick={() =>
              act(
                () => api("/import", { owner }),
                "Импорт поставлен в очередь.",
              )
            }
          >
            Синхронизировать партии
          </button>
          <p className="subtle">
            Последняя синхронизация: {date(value.lastSync)}
          </p>
          <hr />
          <h3>Или загрузите PGN</h3>
          <input
            aria-label="Файл PGN"
            type="file"
            accept=".pgn,.txt"
            onChange={async (e) => {
              const f = e.target.files?.[0];
              if (f) setPgn(await f.text());
            }}
          />
          <textarea
            placeholder="Вставьте PGN с заголовками White, Black, Result и Date"
            value={pgn}
            onChange={(e) => setPgn(e.target.value)}
          />
          <button
            onClick={async () => {
              try {
                const r = await api("/import/pgn", { owner, pgn });
                setMessage(
                  `Добавлено: ${r.results.filter((x: any) => x.id && !x.duplicate).length}. Дубликатов: ${r.results.filter((x: any) => x.duplicate).length}. Неподдерживаемых вариантов: ${r.results.filter((x: any) => x.excluded === "unsupported-variant").length}. Незавершённых: ${r.results.filter((x: any) => x.excluded === "unfinished").length}. Чужих партий: ${r.results.filter((x: any) => x.excluded === "different-owner").length}. Ошибок PGN: ${r.results.filter((x: any) => x.error).length}.`,
                );
                refresh();
              } catch (e) {
                fail(e);
              }
            }}
          >
            Импортировать PGN
          </button>
        </section>
        <section className="panel">
          <h3>Глубина анализа</h3>
          <p className="subtle">
            Stockfish 17.1 · 1 поток · 64 МБ хеша. Одинаковый лимит узлов для
            свободного поиска и проверки сыгранного хода. Достигнутая глубина
            сохраняется отдельно.
          </p>
          <label>
            Режим
            <select
              value={analysis.mode}
              onChange={(e) =>
                setAnalysis({ ...analysis, mode: e.target.value })
              }
            >
              <option value="screen">
                Первичный проход + углубление ошибок
              </option>
              <option value="deep">Углублённо: каждый мой ход</option>
            </select>
          </label>
          {[
            ["screenNodes", "Узлов первичного прохода"],
            ["deepNodes", "Узлов углублённого поиска"],
          ].map(([key, label]) => (
            <label key={key}>
              {label}
              <input
                type="number"
                value={analysis[key]}
                onChange={(e) =>
                  setAnalysis({ ...analysis, [key]: Number(e.target.value) })
                }
              />
            </label>
          ))}
          <div className="thresholds">
            {["inaccuracy", "mistake", "blunder"].map((k) => (
              <label key={k}>
                {status[k]}, cp
                <input
                  type="number"
                  value={analysis.thresholds[k]}
                  onChange={(e) =>
                    setAnalysis({
                      ...analysis,
                      thresholds: {
                        ...analysis.thresholds,
                        [k]: Number(e.target.value),
                      },
                    })
                  }
                />
              </label>
            ))}
          </div>
          <button
            className="primary"
            onClick={() =>
              act(
                () => api("/settings", { analysis, owner }, "PUT"),
                "Настройки сохранены для новых заданий.",
              )
            }
          >
            Сохранить настройки
          </button>
          <p className="subtle">
            Наши пороги потери оценки, не метрики Chess.com. Матовые переходы
            считаются отдельно. Первичный проход может пропустить ошибки.
          </p>
        </section>
      </div>
      <section className="panel">
        <div className="panel-heading">
          <h3>Очередь обработки</h3>
          <span className="badge">Продолжается без браузера</span>
        </div>
        {!jobs.length && <p className="subtle">Заданий пока нет.</p>}
        {jobs.map((j: any) => (
          <div className="job" key={j.id}>
            <div>
              <strong>
                {j.kind === "import"
                  ? "Импорт архива"
                  : j.kind === "position"
                    ? "Углубление позиции"
                    : "Анализ партии"}
              </strong>
              <p>
                {status[j.status]} · {j.progress} / {j.total || "—"} ·{" "}
                {date(j.created)}
              </p>
              {j.error && <small className="error">{j.error}</small>}
              {j.kind === "import" && j.result && (
                <p>
                  Добавлено {j.result.imported}; дубликатов{" "}
                  {j.result.duplicates}; исключено {j.result.excluded}; ошибок{" "}
                  {j.result.failures?.length || 0}.
                </p>
              )}
            </div>
            <progress max={j.total || 1} value={j.progress} />
            {["queued", "running"].includes(j.status) ? (
              <button
                onClick={() =>
                  act(
                    () => api("/jobs/" + j.id + "/cancel", {}),
                    "Запрошена отмена.",
                  )
                }
              >
                Отменить
              </button>
            ) : (
              ["failed", "cancelled"].includes(j.status) && (
                <button
                  onClick={() =>
                    act(
                      () => api("/jobs/" + j.id + "/retry", {}),
                      "Задание возвращено в очередь.",
                    )
                  }
                >
                  Повторить
                </button>
              )
            )}
          </div>
        ))}
      </section>
      <div className="two-col">
        <section className="panel">
          <h3>Статистика Lichess</h3>
          <p>
            {value.lichessConfigured
              ? "Токен настроен на сервере."
              : "Токен Lichess пока не настроен."}
          </p>
          <p className="subtle">
            Токен задаётся через LICHESS_TOKEN в окружении сервера и не
            передаётся в браузер. Частота хода, результат партий и оценка движка
            — разные показатели.
          </p>
        </section>
        <section className="panel">
          <h3>Ваши данные</h3>
          <p className="subtle">
            Экспорт партий, результатов анализа, репертуара и тренировок. Пароли
            и токены не входят в файл.
          </p>
          <a className="button" href="/chess/api/export" download>
            Скачать полную копию ↓
          </a>
        </section>
      </div>
    </>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
