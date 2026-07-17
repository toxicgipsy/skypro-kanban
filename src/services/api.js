import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

// Получить список задач
export async function fetchCards({ token }) {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
}

// Получить задачу по id
export async function fetchCardById({ token, id }) {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.task;
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
}

// Создать задачу
export async function createCard({ token, task }) {
  try {
    const response = await axios.post(
      API_URL,
      {
        title: task.title,
        topic: task.topic,
        status: task.status,
        description: task.description,
        date: task.date,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
}

// Изменить задачу
export async function changeTaskById({ token, id, task }) {
  try {
    const response = await axios.put(
      `${API_URL}/${id}`,
      {
        title: task.title,
        topic: task.topic,
        status: task.status,
        description: task.description,
        date: task.date,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
}

// Удалить задачу
export async function deleteTaskById({ token, id }) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message, { cause: error });
  }
}
