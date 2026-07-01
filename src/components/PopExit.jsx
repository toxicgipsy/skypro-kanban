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

function PopExit() {
  return (
    <SPopExitWrapper id="popExit">
      <SPopExitContainer>
        <SPopExitBlock>
          <SPopExitTtl>Выйти из аккаунта?</SPopExitTtl>
          <SPopExitFormGroup>
            <SPopExitYes id="exitYes">
              <SPopExitYesA href="modal/signin.html">Да, выйти</SPopExitYesA>
            </SPopExitYes>
            <SPopExitNo id="exitNo">
              <SPopExitNoA href="main.html">Нет, остаться</SPopExitNoA>
            </SPopExitNo>
          </SPopExitFormGroup>
        </SPopExitBlock>
      </SPopExitContainer>
    </SPopExitWrapper>
  );
}

export default PopExit;
