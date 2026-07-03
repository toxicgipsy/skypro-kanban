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

export function SignIn() {
  return (
    <SAuthWrapper>
      <SAuthContainer>
        <SAuthModal>
          <SAuthBlock>
            <SAuthTitle>Вход</SAuthTitle>
            <SAuthForm id="formLogIn" action="#">
              <SAuthInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <SAuthInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <SAuthButton id="btnEnter">
                <SAuthBtnEnterA>Войти</SAuthBtnEnterA>
              </SAuthButton>
              <SAuthFormGroup>
                <SAuthText>Нужно зарегистрироваться?</SAuthText>
                <SAuthLink href="signup.html">Регистрируйтесь здесь</SAuthLink>
              </SAuthFormGroup>
            </SAuthForm>
          </SAuthBlock>
        </SAuthModal>
      </SAuthContainer>
    </SAuthWrapper>
  );
}
