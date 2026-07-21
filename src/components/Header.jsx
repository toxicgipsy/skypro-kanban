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
import { Link } from "react-router-dom";
import { getUserInfo } from "../services/userInfo";

function Header() {
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);
  const toggleUserPopup = () => setIsPopUserOpen((prev) => !prev);
  const userInfo = getUserInfo();

  return (
    <SHeaderWrapper>
      <SContainer>
        <SHeaderBlock>
          <SHeaderLogo>
            <Link to="" target="_self">
              <img src={logo} className="vite" alt="Vite logo" />
            </Link>
          </SHeaderLogo>
          <SHeaderLogoDark>
            <Link to="" target="_self">
              <img src={logo_dark} className="vite" alt="Vite logo" />
            </Link>
          </SHeaderLogoDark>
          <SHeaderNav>
            <SHeaderBtnMainNew id="btnMainNew">
              <SHeaderBtnMainNewA to="/card/add">
                Создать новую задачу
              </SHeaderBtnMainNewA>
            </SHeaderBtnMainNew>
            <SHeaderUser onClick={toggleUserPopup}>
              {userInfo?.name || userInfo?.login || "Пользователь"}
            </SHeaderUser>
            {isPopUserOpen && <PopUser userInfo={userInfo} />}
          </SHeaderNav>
        </SHeaderBlock>
      </SContainer>
    </SHeaderWrapper>
  );
}

export default Header;
