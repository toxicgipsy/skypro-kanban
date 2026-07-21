import Header from "../components/Header";
import Main from "../components/Main";
import Loader from "../components/Loader";
import { SWrapper } from "../App.styled";
import { Outlet } from "react-router-dom";

function MainPage({
  cards,
  loading,
  setIsAuth,
  error,
  handleCreateCard,
  handleUpdateCard,
  handleDeleteCard,
}) {
  return (
    <>
      <SWrapper>
        <Header setIsAuth={setIsAuth} />
        {loading ? (
          <Loader />
        ) : (
          <>
            <Main cards={cards} error={error} />
            <Outlet
              context={{
                cards,
                handleCreateCard,
                handleUpdateCard,
                handleDeleteCard,
              }}
            />
          </>
        )}
      </SWrapper>
    </>
  );
}

export default MainPage;
