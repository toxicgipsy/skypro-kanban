import Header from "../components/Header";
import Main from "../components/Main";
import Loader from "../components/Loader";
import { GlobalStyle } from "../styles/GlobalStyle";
import { SWrapper } from "../App.styled";
import { Outlet } from "react-router-dom";

function MainPage({ loading, setIsAuth }) {
  return (
    <>
      <GlobalStyle />
      <SWrapper>
        <Header setIsAuth={setIsAuth} />
        {loading ? <Loader /> : <Main />}
        <Outlet />
      </SWrapper>
    </>
  );
}

export default MainPage;
