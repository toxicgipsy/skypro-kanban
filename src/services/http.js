export async function request(url, option = {}) {
  let response;

  try {
    response = await fetch(url, option);
  } catch {
    throw new Error("Не удалось связаться с сервером");
  }

  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error("Сервер вернул некорректный ответ");
  }

  if (!response.ok) {
    const error = new Error(
      data.error || data.message || `Ошибка запроса: ${response.status}`,
    );

    error.status = response.status;
    throw error;
  }

  return data;
}
