import {
  SAuthBlock,
  SAuthBtnEnterA,
  SAuthButton,
  SAuthContainer,
  SAuthForm,
  SAuthFormGroup,
  SAuthInput,
  SAuthLink,
  SAuthModal,
  SAuthText,
  SAuthTitle,
  SAuthWrapper,
} from "./Auth.styled";

export function SignUp() {
  return (
    <SAuthWrapper>
      <SAuthContainer>
        <SAuthModal>
          <SAuthBlock>
            <SAuthTitle>Регистрация</SAuthTitle>
            <SAuthForm id="formLogUp" action="#">
              <SAuthInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <SAuthInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <SAuthInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <SAuthButton id="SignUpEnter">
                <SAuthBtnEnterA href="../main.html">
                  Зарегистрироваться
                </SAuthBtnEnterA>
              </SAuthButton>
              <SAuthFormGroup>
                <SAuthText>
                  Уже есть аккаунт?
                  <SAuthLink href="signin.html">Войдите здесь</SAuthLink>
                </SAuthText>
              </SAuthFormGroup>
            </SAuthForm>
          </SAuthBlock>
        </SAuthModal>
      </SAuthContainer>
    </SAuthWrapper>
  );
}
