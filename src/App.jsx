import { useCallback, useEffect, useState } from "react";
import AppRoutes from "./components/AppRoutes";
import { AuthContext, TaskContext } from "./context/contextAPI";
import { GlobalStyle } from "./styles/GlobalStyle";
import {
  createCard,
  changeTaskById,
  deleteTaskById,
  fetchCards,
} from "./services/api";
import { getUserInfo } from "./services/auth";

function App() {
  const [user, setUser] = useState(() => getUserInfo());
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const token = user?.token;

  const loginUser = (userData) => {
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setUser(userData);
  };

  const logoutUser = useCallback(() => {
    localStorage.removeItem("userInfo");
    setUser(null);
  }, []);

  // Обработка ошибок
  const handleUnauthorized = useCallback(
    (error) => {
      if (error.status !== 401) {
        return false;
      }

      logoutUser();
      setTasks([]);
      setError("");
      return true;
    },
    [logoutUser],
  );

  // Создание карточки
  const handleCreateCard = async (task) => {
    try {
      const tasks = await createCard({ token: token, task: task });

      setTasks(tasks);
    } catch (error) {
      handleUnauthorized(error);
      throw error;
    }
  };

  // Обновление карточки
  const handleUpdateCard = async (id, task) => {
    try {
      const tasks = await changeTaskById({
        token,
        id,
        task,
      });
      setTasks(tasks);
    } catch (error) {
      handleUnauthorized(error);
      throw error;
    }
  };

  // Удаление карточки
  const handleDeleteCard = async (id) => {
    try {
      const tasks = await deleteTaskById({
        token,
        id,
      });

      setTasks(tasks);
    } catch (error) {
      handleUnauthorized(error);
      throw error;
    }
  };

  // Загрузка карточек
  useEffect(() => {
    async function loadCards(token) {
      try {
        if (!token) {
          setLoading(false);
          return;
        }
        setLoading(true);
        setError("");

        const tasks = await fetchCards({ token: token });
        setTasks(tasks);
      } catch (error) {
        if (!handleUnauthorized(error)) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadCards(token);
  }, [token, handleUnauthorized]);

  const authValue = {
    user,
    isAuth: Boolean(user?.token),
    loginUser,
    logoutUser,
  };

  const taskValue = {
    tasks,
    loading,
    error,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
  };

  return (
    <>
      <GlobalStyle />
      <AuthContext.Provider value={authValue}>
        <TaskContext.Provider value={taskValue}>
          <AppRoutes />
        </TaskContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
