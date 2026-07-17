import { useNavigate } from "react-router-dom";
import {
  SPopExitBlock,
  SPopExitContainer,
  SPopExitFormGroup,
  SPopExitNo,
  SPopExitNoA,
  SPopExitTtl,
  SPopExitWrapper,
  SPopExitYes,
  SPopExitYesA,
} from "./PopExit.styled";

function PopExit({ setIsAuth }) {
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    setIsAuth(false);
    navigate("/sign-in");
  }
  return (
    <SPopExitWrapper id="popExit">
      <SPopExitContainer>
        <SPopExitBlock>
          <SPopExitTtl>Выйти из аккаунта?</SPopExitTtl>
          <SPopExitFormGroup>
            <SPopExitYes id="exitYes">
              <SPopExitYesA to="/sign-in" onClick={handleLogout}>
                Да, выйти
              </SPopExitYesA>
            </SPopExitYes>
            <SPopExitNo id="exitNo">
              <SPopExitNoA to="/">Нет, остаться</SPopExitNoA>
            </SPopExitNo>
          </SPopExitFormGroup>
        </SPopExitBlock>
      </SPopExitContainer>
    </SPopExitWrapper>
  );
}

export default PopExit;
