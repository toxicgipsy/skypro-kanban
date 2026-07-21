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

function PopUser({ userInfo }) {
  return (
    <SHeaderPopUserSet id="user-set-target">
      <SPopUserSetName>{userInfo?.name || "Пользователь"}</SPopUserSetName>
      <SPopUserSetMail>{userInfo?.login || ""}</SPopUserSetMail>
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
