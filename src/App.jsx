import { ThemeProvider } from "styled-components";
import AppRoutes from "./Routes";
import { darkTheme, lightTheme } from "./lib/theme";
import { useThemesContext } from "./contexts/hooks/useTheme";

function App() {

  const {theme} = useThemesContext();
  return (
    <>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
