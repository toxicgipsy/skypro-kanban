import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/hooks/useUser";
import * as S from "../popups/PopExit.styled";

function PopExit() {
  const {logout} = useUserContext();  
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            Выйти из аккаунта?
          </S.PopExitTtl>
          <S.PopExitForm id="formExit">
            <S.PopExitFormGroup>
              <S.PopExitExitYes
                onClick={logout}
                id="exitYes"
              >
                Да, выйти
              </S.PopExitExitYes>
              <S.PopExitExitNo id="exitNo">
                <Link to={"/"}>Нет, остаться</Link>
              </S.PopExitExitNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}

export default PopExit;
