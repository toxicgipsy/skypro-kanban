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

export function PopUser() {
  return (
    <SHeaderPopUserSet id="user-set-target">
      <SPopUserSetName>Ivan Ivanov</SPopUserSetName>
      <SPopUserSetMail>ivan.ivanov@gmail.com</SPopUserSetMail>
      <SPopUserSetTheme>
        <SPopUserSetThemeP>Темная тема</SPopUserSetThemeP>
        <SPopUserCheckbox type="checkbox" name="checkbox" />
      </SPopUserSetTheme>
      <SPopUserSetButton type="button">
        <SPopUserSetButtonA href="#popExit">Выйти</SPopUserSetButtonA>
      </SPopUserSetButton>
    </SHeaderPopUserSet>
  );
}

export default PopUser;
