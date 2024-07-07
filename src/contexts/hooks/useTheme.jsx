import { useContext } from "react"
import { ThemesContext } from "../ThemeContext";

export const useThemesContext = () => {
    return useContext(ThemesContext);
}