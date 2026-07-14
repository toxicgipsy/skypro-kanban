import { useNavigate } from "react-router-dom";
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

function AuthForm({ isSignUp, setIsAuth }) {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };
  return (
    <SAuthWrapper>
      <SAuthContainer>
        <SAuthModal>
          <SAuthBlock>
            <SAuthTitle>{isSignUp ? "Регистрация" : "Вход"}</SAuthTitle>
            <SAuthForm id="formLogIn" action="#">
              {isSignUp && (
                <SAuthInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
              )}
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
                <SAuthBtnEnterA onClick={handleLogin}>
                  {isSignUp ? "Зарегистрироваться" : "Войти"}
                </SAuthBtnEnterA>
              </SAuthButton>
              {!isSignUp && (
                <SAuthFormGroup>
                  <SAuthText>Нужно зарегистрироваться?</SAuthText>
                  <SAuthLink to="/sign-up">Регистрируйтесь здесь</SAuthLink>
                </SAuthFormGroup>
              )}
              {isSignUp && (
                <SAuthFormGroup>
                  <SAuthText>Уже есть аккаунт?</SAuthText>
                  <SAuthLink to="/sign-in">Войдите здесь</SAuthLink>
                </SAuthFormGroup>
              )}
            </SAuthForm>
          </SAuthBlock>
        </SAuthModal>
      </SAuthContainer>
    </SAuthWrapper>
  );
}

export default AuthForm;
