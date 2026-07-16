import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

// Получить пользователей
export async function getUsers({ token }) {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.users;
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
}

// Регистрация
export async function signUp({ name, login, password }) {
  try {
    const response = await axios.post(API_URL, {
      name,
      login,
      password,
    });
    return response.data.user;
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
}

// Авторизация
export async function signIn({ login, password }) {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      login,
      password,
    });
    return response.data.user;
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
}
