import { useNavigate } from "react-router-dom";
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

function PopUser({ setIsAuth }) {
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    setIsAuth(false);
    navigate("/sign-in");
  }
  return (
    <SHeaderPopUserSet id="user-set-target">
      <SPopUserSetName>Ivan Ivanov</SPopUserSetName>
      <SPopUserSetMail>ivan.ivanov@gmail.com</SPopUserSetMail>
      <SPopUserSetTheme>
        <SPopUserSetThemeP>Темная тема</SPopUserSetThemeP>
        <SPopUserCheckbox type="checkbox" name="checkbox" />
      </SPopUserSetTheme>
      <SPopUserSetButton type="button">
        <SPopUserSetButtonA href="#popExit" onClick={handleLogout}>
          Выйти
        </SPopUserSetButtonA>
      </SPopUserSetButton>
    </SHeaderPopUserSet>
  );
}

export default PopUser;
