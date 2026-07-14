import { Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { useEffect, useState } from "react";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRout";
import PopNewCardPage from "../pages/PopNewCardPage";
import PopExit from "./PopExit";
import PopEditCardPage from "../pages/PopEditCardPage";
import PopBrowsePage from "../pages/PopBrowsePage";
import { cardList } from "../data";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState(cardList);
  const addCard = (addCard) => setCards((prev) => [...prev, addCard]);
  const updateCard = ({ updated, id }) =>
    setCards((prev) =>
      prev.map((card) => (card.id === Number(id) ? updated : card)),
    );
  const deleteCard = (id) =>
    setCards((prev) => prev.filter((card) => card.id !== Number(id)));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route
            path="/"
            element={
              <MainPage
                setIsAuth={setIsAuth}
                loading={loading}
                cards={cards}
                addCard={addCard}
                updateCard={updateCard}
                deleteCard={deleteCard}
              />
            }
          >
            <Route path="card/:id" element={<PopBrowsePage />} />
            <Route path="card/add" element={<PopNewCardPage />} />
            <Route path="card/:id/edit" element={<PopEditCardPage />} />
            <Route path="exit" element={<PopExit setIsAuth={setIsAuth} />} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
        <Route path="/sign-up" element={<SignUpPage setIsAuth={setIsAuth} />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
