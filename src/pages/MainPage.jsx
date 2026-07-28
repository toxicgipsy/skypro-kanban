import Header from "../components/Header";
import Main from "../components/Main";
import Loader from "../components/Loader";
import { SWrapper } from "../App.styled";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/contextAPI";

function MainPage() {
  // {
  //   (handleCreateCard, handleUpdateCard, handleDeleteCard);
  // }
  const { tasks, loading, error } = useContext(AuthContext);
  return (
    <>
      <SWrapper>
        <Header />
        {loading ? (
          <Loader />
        ) : (
          <>
            <Main cards={tasks} error={error} />
            <Outlet />
          </>
        )}
      </SWrapper>
    </>
  );
}

export default MainPage;
