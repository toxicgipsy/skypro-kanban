import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import { TasksProvider } from "./contexts/TasksContext.jsx";
import { ThemesProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TasksProvider>
          <ThemesProvider>
            <App />
          </ThemesProvider>
        </TasksProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
