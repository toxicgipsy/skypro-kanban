import Header from "../components/Header";
import Main from "../components/Main";
import Loader from "../components/Loader";
import { SWrapper } from "../App.styled";
import { Outlet } from "react-router-dom";

function MainPage({
  loading,
  setIsAuth,
  cards,
  addCard,
  updateCard,
  deleteCard, error
}) {
  return (
    <>
      <SWrapper>
        <Header setIsAuth={setIsAuth} />
        {loading ? (
          <Loader />
        ) : (
          <Main
            cards={cards}
            addCard={addCard}
            updateCard={updateCard}
            deleteCard={deleteCard}
            error={error}
          />
        )}
        <Outlet
          context={{
            cards,
            addCard,
            updateCard,
            deleteCard,
          }}
        />
      </SWrapper>
    </>
  );
}

export default MainPage;
