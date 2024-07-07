export async function loginUser(login, password) {
  const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Неверный логин или пароль")
  }

  const data = await response.json();
  return data;
}

export async function regUser(login, password, name) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      name,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }

  const data = await response.json();
  return data;
}

export async function getTasks(token) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже")
  }

  const data = await response.json();
  return data;
}

export async function postTask({token, title, topic, description, date}) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      title,
      topic,
      description,
      date,
    }),
  });

  if (!response.ok) {
    throw new Error("Не удалось добавить задачу")
  }

  const data = await response.json();
  return data;
}

export async function deleteTasks({id, token}) {
  const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Не удалось удалить задачу")
  }

  const data = await response.json();
  return data;
}

export async function editTasks({title, topic, status, description, date, id, token}) {
  const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "PUT",
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
  });

  if (!response.ok) {
    throw new Error("Не удалось изменить задачу")
  }

  const data = await response.json();
  return data;
}