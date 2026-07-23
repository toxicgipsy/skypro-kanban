import { useState } from "react";
import AppRoutes from "./components/AppRoutes";
import { AuthContext, TaskContext } from "./context/contextAPI";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const [auth, setAuth] = useState(null);
  const [tasks, setTasks] = useState([]);

  const loginUser = (loginData) => {
    setAuth(loginData);
  };

  const logoutUser = () => {
    setAuth(null);
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTask = (taskId, changes) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...changes } : task,
      ),
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const authValue = {
    auth,
    isAuth: Boolean(auth),
    loginUser,
    logoutUser,
  };

  const taskValue = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
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
