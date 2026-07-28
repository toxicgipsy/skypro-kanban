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

function PopUser({ user }) {
  return (
    <SHeaderPopUserSet id="user-set-target">
      <SPopUserSetName>{user?.name || "Пользователь"}</SPopUserSetName>
      <SPopUserSetMail>{user?.login || ""}</SPopUserSetMail>
      <SPopUserSetTheme>
        <SPopUserSetThemeP>Темная тема</SPopUserSetThemeP>
        <SPopUserCheckbox type="checkbox" name="checkbox" />
      </SPopUserSetTheme>
      <SPopUserSetButton type="button">
        <SPopUserSetButtonA to="/exit">Выйти</SPopUserSetButtonA>
      </SPopUserSetButton>
    </SHeaderPopUserSet>
  );
}

export default PopUser;
