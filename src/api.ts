export async function api(path: string, body?: any, method?: string) {
  const r = await fetch("/chess/api" + path, {
    method: method || (body ? "POST" : "GET"),
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await r.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Сервер недоступен. Проверьте подключение и повторите.");
  }
  if (!r.ok) throw new Error(data.error || "Не удалось выполнить запрос.");
  return data;
}
export const date = (s: any) =>
  String(s).startsWith("1970-01-01")
    ? "Дата неизвестна"
    : s
      ? new Date(s).toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "Ещё не было";
export const status: Record<string, string> = {
  pending: "Ожидает анализа",
  queued: "В очереди",
  running: "В процессе",
  complete: "Готово",
  failed: "Ошибка",
  cancelled: "Отменено",
  opening: "Дебют",
  middlegame: "Миттельшпиль",
  endgame: "Эндшпиль",
  inaccuracy: "Неточность",
  mistake: "Ошибка",
  blunder: "Зевок",
  bullet: "Пуля",
  blitz: "Блиц",
  rapid: "Рапид",
  daily: "Заочные",
  other: "Другой",
  insufficient: "Недостаточно сопоставимых данных",
  persistent: "Повторяется",
  emerging: "Появилась недавно",
  improving: "Частота снизилась",
  "not-observed": "Не наблюдалась недавно",
};
