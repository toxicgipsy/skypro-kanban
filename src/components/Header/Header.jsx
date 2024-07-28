import { useState } from "react";
import * as S from "./Header.styled.js";
import { Container } from "../../style/common.style.js";
import { Link } from "react-router-dom";
import { paths } from "../../lib/paths.js";
import { useUserContext } from "../../contexts/hooks/useUser.jsx";
import { useThemesContext } from "../../contexts/hooks/useTheme.jsx";

// Лого
import logoLight from "../../../public/images/logo.png";
import logoDark from "../../../public/images/logo_dark.png";

function Header() {
  const { theme, handleTheme } = useThemesContext();
  const { user } = useUserContext();
  const [toggle, setToggel] = useState(false);

  const handleToggle = () => {
    setToggel((prevState) => !prevState);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            {/* <Link to="/">
              {theme ? (
                <img src="images/logo.png" alt="SKYPRO" />
              ) : (
                <img src="images/logo_dark.png" alt="SKYPRO" />
              )}
            </Link> */}

            <Link to="/">
              <img src={theme ? logoLight : logoDark} alt="SKYPRO" />
            </Link>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtn id="btnMainNew">
              <Link to={paths.NEWCARD}>Создать новую задачу</Link>
            </S.HeaderBtn>
            <S.HeaderUser onClick={handleToggle}>{user.name}</S.HeaderUser>
            {toggle && (
              <S.HeaderPopUserSet id="user-set-target">
                <S.HeaderPopUserSetName>{user.name}</S.HeaderPopUserSetName>
                <S.HeaderPopUserSetMail>{user.login}</S.HeaderPopUserSetMail>
                <S.HeaderPopUserSetTheme>
                  <p>Темная тема</p>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={!theme ? "checked" : ""}
                    name="checkbox"
                    onChange={handleTheme}
                  />
                </S.HeaderPopUserSetTheme>
                <S.HeaderBtnExit>
                  <Link to="/exit">Выйти</Link>
                </S.HeaderBtnExit>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}

export default Header;
