import { useContext } from "react";
import {
  SHeaderPopUserSet,
  SPopUserCheckbox,
  SPopUserSetButton,
  SPopUserSetButtonA,
  SPopUserSetMail,
  SPopUserSetName,
  SPopUserSetTheme,
  SPopUserSetThemeP,
} from "./PopUser.styled";
import { ThemeModeContext } from "../context/ThemeModeContext";

function PopUser({ user }) {
  const { isDark, toggleTheme } = useContext(ThemeModeContext);

  return (
    <SHeaderPopUserSet id="user-set-target">
      <SPopUserSetName>{user?.name || "Пользователь"}</SPopUserSetName>
      <SPopUserSetMail>{user?.login || ""}</SPopUserSetMail>
      <SPopUserSetTheme>
        <SPopUserSetThemeP>Темная тема</SPopUserSetThemeP>
        <SPopUserCheckbox
          type="checkbox"
          name="checkbox"
          onChange={toggleTheme}
          checked={isDark}
        />
      </SPopUserSetTheme>
      <SPopUserSetButton type="button">
        <SPopUserSetButtonA to="/exit">Выйти</SPopUserSetButtonA>
      </SPopUserSetButton>
    </SHeaderPopUserSet>
  );
}

export default PopUser;
