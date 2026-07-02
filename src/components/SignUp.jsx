export function SignUp() {
  return (
    <div class="wrapper">
      <div class="container-signup">
        <div class="modal">
          <div class="modal__block">
            <div class="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form class="modal__form-login" id="formLogUp" action="#">
              <input
                class="modal__input first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <input
                class="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <input
                class="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <button class="modal__btn-signup-ent _hover01" id="SignUpEnter">
                <a href="../main.html">Зарегистрироваться</a>{" "}
              </button>
              <div class="modal__form-group">
                <p>
                  Уже есть аккаунт? <a href="signin.html">Войдите здесь</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
