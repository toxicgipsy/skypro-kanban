import { request } from "./http";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

const getAuthHeaders = (token) => ({
  Authorization: `Bearer ${token}`,
});

export async function fetchCards({ token }) {
  const data = await request(API_URL, {
    headers: getAuthHeaders(token),
  });

  return data.tasks;
}

export async function createCard({ token, task }) {
  const data = await request(API_URL, {
    method: "POST",
    headers: getAuthHeaders(token),
    body: JSON.stringify(task),
  });

  return data.tasks;
}

export async function changeTaskById({ token, id, task }) {
  const data = await request(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(token),
    body: JSON.stringify(task),
  });

  return data.tasks;
}

export async function deleteTaskById({ token, id }) {
  const data = await request(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(token),
  });

  return data.tasks;
}
