import { createContext, useEffect, useState } from "react";
import { getFromLocalStorage } from "../lib/utiles.js";

export const ThemesContext = createContext(null);

export const ThemesProvider = ({ children }) => {
  const storedTheme = getFromLocalStorage("theme");
  const initialTheme = storedTheme !== null ? JSON.parse(storedTheme) : false;
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemesContext.Provider value={{ theme, setTheme, handleTheme }}>
      {children}
    </ThemesContext.Provider>
  );
};
