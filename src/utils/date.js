export function formatDateForCalendar(apiDate) {
  if (!apiDate) return "";
  const date = new Date(apiDate);

  if (Number.isNaN(date.getTime())) return "";

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = String(date.getUTCFullYear()).slice(-2);

  return `${day}.${month}.${year}`;
}

export function formatDateForApi(calendarDate) {
  if (!calendarDate) return "";

  const [day, month, shortYear] = calendarDate.split(".").map(Number);

  if (!day || !month || !shortYear) return "";

  const year = shortYear < 100 ? 2000 + shortYear : shortYear;
  const date = new Date(Date.UTC(year, month - 1, day));

  const isValid =
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day;

  if (!isValid) return "";

  return date.toISOString();
}
