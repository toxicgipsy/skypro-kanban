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
import { getUserInfo } from "./services/userInfo";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeModeContext } from "./context/ThemeModeContext";

function App() {
  const [user, setUser] = useState(() => getUserInfo());
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );
  const token = user?.token;

  const toggleTheme = () => {
    setIsDark((previousValue) => {
      const nextValue = !previousValue;

      localStorage.setItem("theme", nextValue ? "dark" : "light");

      return nextValue;
    });
  };

  const loginUser = (userData) => {
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setUser(userData);
  };

  const logoutUser = useCallback(() => {
    localStorage.removeItem("userInfo");
    setUser(null);
  }, []);

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

  const handleCreateCard = async (task) => {
    try {
      const tasks = await createCard({ token: token, task: task });

      setTasks(tasks);
    } catch (error) {
      handleUnauthorized(error);
      throw error;
    }
  };

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

  useEffect(() => {
    async function loadCards(token) {
      try {
        if (!token) {
          setLoading(false);
          setTasks([]);
          setError("");
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
      <ThemeModeContext.Provider value={{ isDark, toggleTheme }}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <AuthContext.Provider value={authValue}>
            <TaskContext.Provider value={taskValue}>
              <AppRoutes />
            </TaskContext.Provider>
          </AuthContext.Provider>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </>
  );
}

export default App;
