import { useContext, useState } from "react";
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
import { AuthContext } from "../context/contextAPI";

function Header() {
  const { user } = useContext(AuthContext);
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);
  const toggleUserPopup = () => setIsPopUserOpen((prev) => !prev);

  return (
    <SHeaderWrapper>
      <SContainer>
        <SHeaderBlock>
          <SHeaderLogo>
            <Link to="" target="_self">
              <img src={logo} className="vite" alt="Skypro" />
            </Link>
          </SHeaderLogo>
          <SHeaderLogoDark>
            <Link to="" target="_self">
              <img src={logo_dark} className="vite" alt="Skypro" />
            </Link>
          </SHeaderLogoDark>
          <SHeaderNav>
            <SHeaderBtnMainNew id="btnMainNew">
              <SHeaderBtnMainNewA to="/card/add">
                Создать новую задачу
              </SHeaderBtnMainNewA>
            </SHeaderBtnMainNew>
            <SHeaderUser onClick={toggleUserPopup}>
              {user?.name || user?.login || "Пользователь"}
            </SHeaderUser>
            {isPopUserOpen && <PopUser user={user} />}
          </SHeaderNav>
        </SHeaderBlock>
      </SContainer>
    </SHeaderWrapper>
  );
}

export default Header;
