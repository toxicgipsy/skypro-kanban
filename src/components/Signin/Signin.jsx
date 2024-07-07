import { Link } from "react-router-dom";
import * as S from "./Signin.styled";
import { paths } from "../../lib/paths";
import { loginUser } from "../../lib/api";
import { useState } from "react";
import { useUserContext } from "../../contexts/hooks/useUser";

function Signin() {

  const {login} = useUserContext();
  const [getLogin, setGetLogin] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [isError, setIsError] = useState(null);
  const onClickSignIn = async() => {    
    await loginUser(getLogin, getPassword).then((response) => {
      login(response.user);
    }).catch((error) => {
      setIsError(error.message);
    })
    
  }
  return (
    <S.ContainerSignin>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTtl>
            <h2>Вход</h2>
          </S.ModalTtl>
          <S.ModalFormLogin id="formLogIn" action="#">
            <S.ModalInput
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
              value={getLogin}
              onChange={(e) => {setGetLogin(e.target.value)}}
            />
            <S.ModalInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              value={getPassword}
              onChange={(e) => {setGetPassword(e.target.value)}}
            />
            <span style={{color: "red", marginTop: "10px"}}>{isError}</span>
            <S.ModalBtnEnter type="button" id="btnEnter" onClick={onClickSignIn}>
              Войти
            </S.ModalBtnEnter>
            <S.ModalFormGroup>
              <p>Нужно зарегистрироваться?</p>
              <Link to={paths.SIGN_UP}>Регистрируйтесь здесь</Link>
            </S.ModalFormGroup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignin>
  );
}

export default Signin;
