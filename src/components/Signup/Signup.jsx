import { Link } from "react-router-dom";
import * as S from "./Signup.styled";
import { paths } from "../../lib/paths";
import { useState } from "react";
import { regUser } from "../../lib/api";
import { useUserContext } from "../../contexts/hooks/useUser";

function Signup() {

  const {login} = useUserContext();
  const [getFirstName, setGetFirstName] = useState("");
  const [getLogin, setGetLogin] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [isError, setIsError] = useState(null);

  const onClickSignUp = async () => {
    await regUser(getLogin, getPassword, getFirstName).then((response) => {
      login(response.user)
    }).catch((error) => {
      setIsError(error.message);
    });
  }
  return (
    <S.ContainerSignup>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTtl>
            <h2>Регистрация</h2>
          </S.ModalTtl>
          <S.ModalFormLogin id="formLogUp" action="#">
            <S.ModalInput
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя"
              value={getFirstName}
              onChange={(e) => {setGetFirstName(e.target.value)}}
            ></S.ModalInput>
            <S.ModalInput
              type="text"
              name="login"
              id="loginReg"
              placeholder="Эл. почта"
              value={getLogin}
              onChange={(e) => {setGetLogin(e.target.value)}}
            ></S.ModalInput>
            <S.ModalInput
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
              value={getPassword}
              onChange={(e) => {setGetPassword(e.target.value)}}
            ></S.ModalInput>
            <span style={{color: "red", marginTop: "10px"}}>{isError}</span>
            <S.ModalBtnSignupEnt type="button" id="SignUpEnter" onClick={onClickSignUp}>
              Зарегистрироваться
            </S.ModalBtnSignupEnt>
            <S.ModalFormGroup>
              <p>
                Уже есть аккаунт?
                <Link to={paths.SIGN_IN}>Войдите здесь</Link>
              </p>
            </S.ModalFormGroup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignup>
  );
}

export default Signup;
