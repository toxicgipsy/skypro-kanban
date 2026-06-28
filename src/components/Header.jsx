import { useState } from "react";
import logo from "/logo.png";
import logo_dark from "/logo_dark.png";
import PopUser from "./PopUser";
import {
  SContainer,
  SHeaderBlock,
  SHeaderBtnMainNew,
  SHeaderBtnMainNewA,
  SHeaderLogo,
  SHeaderLogoDark,
  SHeaderNav,
  SHeaderUser,
  SHeaderWrapper,
} from "./Header.styled";

function Header() {
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);

  const toggleUserPopup = () => setIsPopUserOpen((prev) => !prev);

  return (
    <SHeaderWrapper>
      <SContainer>
        <SHeaderBlock>
          <SHeaderLogo>
            <a href="" target="_self">
              <img src={logo} className="vite" alt="Vite logo" />
            </a>
          </SHeaderLogo>
          <SHeaderLogoDark>
            <a href="" target="_self">
              <img src={logo_dark} className="vite" alt="Vite logo" />
            </a>
          </SHeaderLogoDark>
          <SHeaderNav>
            <SHeaderBtnMainNew id="btnMainNew">
              <SHeaderBtnMainNewA href="#popNewCard">
                Создать новую задачу
              </SHeaderBtnMainNewA>
            </SHeaderBtnMainNew>
            <SHeaderUser href="#user-set-target" onClick={toggleUserPopup}>
              Ivan Ivanov
            </SHeaderUser>
            {isPopUserOpen && <PopUser />}
          </SHeaderNav>
        </SHeaderBlock>
      </SContainer>
    </SHeaderWrapper>
  );
}

export default Header;
