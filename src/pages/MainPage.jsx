import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTasks } from "../lib/api";
import { useUserContext } from "../contexts/hooks/useUser";
import { useTaskContext } from "../contexts/hooks/useCards";

function MainPage() {

  const {cards, setCards} = useTaskContext();
  const [isLoading, setIsLoading] = useState(true);
  const [addErrorGetTasks, setAddErrorGetTasks] = useState(null);

  const {user} = useUserContext();

  useEffect(() => {
    getTasks(user.token).then((responce) => {
      setCards(responce.tasks);
    })
    .catch((error) => {
      setAddErrorGetTasks(error.message);
    }).finally(() => {
      setIsLoading(false);
    })
}, []);

    return (    
      <>
          <GlobalStyle />
          <Wrapper>
            <Header />
            {isLoading ? <span>Данные загружаются</span> : <Main cards={cards} />}
            {addErrorGetTasks ? <span style={{color: "red"}}>Не удалось загрузить данные, попробуйте позже</span> : null}
          </Wrapper>
          <Outlet setCards={setCards} />
      </>
    );
  
}

export default MainPage;
