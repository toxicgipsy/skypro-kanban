import {
  SContainerSignin,
  SModal,
  SModalBlock,
  SModalBtnEnter,
  SModalBtnEnterA,
  SModalFormGroupA,
  SModalFormGroupP,
  SModalFormLogin,
  SModalInput,
  SModalTtl,
  SWrapper,
} from "./SignIn.styled";

export function SignIn() {
  return (
    <SWrapper>
      <SContainerSignin>
        <SModal>
          <SModalBlock>
            <SModalTtl>Вход</SModalTtl>
            <SModalFormLogin id="formLogIn" action="#">
              <SModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <SModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <SModalBtnEnter id="btnEnter">
                <SModalBtnEnterA>Войти</SModalBtnEnterA>
              </SModalBtnEnter>
              <div className="modal__form-group">
                <SModalFormGroupP>Нужно зарегистрироваться?</SModalFormGroupP>
                <SModalFormGroupA href="signup.html">Регистрируйтесь здесь</SModalFormGroupA>
              </div>
            </SModalFormLogin>
          </SModalBlock>
        </SModal>
      </SContainerSignin>
    </SWrapper>
  );
}
