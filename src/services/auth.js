import { request } from "./http";

const API_URL = "https://wedev-api.sky.pro/api/user";

// Получить пользователей
export async function getUsers() {
  const data = await request(API_URL);
  return data.users;
}

// Регистрация
export async function signUp({ name, login, password }) {
  const data = await request(API_URL, {
    method: "POST",
    body: JSON.stringify({ name, login, password }),
  });

  return data.user;
}

// Авторизация
export async function signIn({ login, password }) {
  const data = await request(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });

  return data.user;
}
