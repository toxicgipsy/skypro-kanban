import { createContext, useEffect, useState } from "react";

export const ThemesContext = createContext(null);

const checkLS = () => {
    try {
      const theme = JSON.parse(localStorage.getItem("theme"));
      return theme;
    } catch(error) {
      console.log(error.message);
      localStorage.removeItem("theme");
      return null;
    }
  }
export const ThemesProvider = ({children}) => {

    const [theme, setTheme] = useState(checkLS());

    useEffect(() => {
        handleTheme();
      }, []);
      
    const handleTheme = () => {
        theme ? setTheme(false) : setTheme(true);
        localStorage.setItem("theme", JSON.stringify(theme));
      }

    return (
        <ThemesContext.Provider value={{theme, setTheme, handleTheme}}>
            {children}
        </ThemesContext.Provider>
    )
}