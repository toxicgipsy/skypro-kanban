import { request } from "./http";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signUp({ name, login, password }) {
  const data = await request(API_URL, {
    method: "POST",
    body: JSON.stringify({ name, login, password }),
  });

  return data.user;
}

export async function signIn({ login, password }) {
  const data = await request(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });

  return data.user;
}
