import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import PopBrowse from "./components/PopBrowse";
import PopExit from "./components/PopExit";
import PopNewCard from "./components/PopNewCard";
import Loader from "./components/Loader";
import { GlobalStyle } from "./styles/GlobalStyle";
import { SWrapper } from "./App.styled";

function App() {
  const [loading, setLoading] = useState(true);
  const [selectCard, setSelectCard] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <SWrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse card={selectCard} />
        <Header />
        {loading ? <Loader /> : <Main onClickCard={setSelectCard} />}
      </SWrapper>
    </>
  );
}

export default App;
