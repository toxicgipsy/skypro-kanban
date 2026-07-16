import { useNavigate } from "react-router-dom";
import {
  ErrorModule,
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
import { useState } from "react";
import { signIn, signUp } from "../services/auth";

function AuthForm({ isSignUp, setIsAuth }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const [error, setError] = useState(null);

  const validateForm = () => {
    const newErrors = { name: false, login: false, password: false };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError("Заполните поле");

      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Заполните поле");

      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Заполните поле");

      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp({
            name: formData.name,
            login: formData.login,
            password: formData.password,
          });
      if (data) {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

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
            <SAuthForm id="formLogIn" action="#" onSubmit={handleSubmit}>
              {isSignUp && (
                <SAuthInput
                  error={errors.name}
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <SAuthInput
                error={errors.login}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта
                value={formData.login}"
                onChange={handleChange}
              />
              <SAuthInput
                error={errors.password}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
              <ErrorModule>{error}</ErrorModule>
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
