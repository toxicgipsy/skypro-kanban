import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import PopBrowse from "./components/PopBrowse";
import PopExit from "./components/PopExit";
import PopNewCard from "./components/PopNewCard";
import Loader from "./components/Loader";
import { GlobalStyle } from "./styles/GlobalStyle";
import { SWrapper } from "./App.styled";
import { Outlet } from "react-router-dom";

function MainPage({ loading }) {
  const [selectCard, setSelectCard] = useState(null);

  return (
    <>
      <GlobalStyle />
      <SWrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse card={selectCard} />
        <Header />
        {loading ? <Loader /> : <Main onClickCard={setSelectCard} />}
        <Outlet />
      </SWrapper>
    </>
  );
}

export default MainPage;
