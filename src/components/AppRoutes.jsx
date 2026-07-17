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
import {
  changeTaskById,
  createCard,
  deleteTaskById,
  fetchCards,
} from "../services/api";

function getUserInfo() {
  try {
    return JSON.parse(localStorage.getItem("userInfo"));
  } catch {
    return null;
  }
}

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(() => Boolean(getUserInfo()?.token));
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");

  // Создание карточки
  const handleCreateCard = async (task) => {
    const userInfo = getUserInfo();

    const tasks = await createCard({ token: userInfo?.token, task: task });

    setCards(tasks);
  };

  // Обновление карточки
  const handleUpdateCard = async (id, task) => {
    const userInfo = getUserInfo();

    const tasks = await changeTaskById({
      token: userInfo?.token,
      id: id,
      task: task,
    });

    setCards(tasks);
  };

  // Удаление карточки
  const handleDeleteCard = async (id) => {
    const userInfo = getUserInfo();

    const tasks = await deleteTaskById({
      token: userInfo?.token,
      id: id,
    });

    setCards(tasks);
  };

  // Загрузка карточек
  useEffect(() => {
    async function loadCards() {
      const userInfo = getUserInfo();

      try {
        setLoading(true);
        setError("");

        if (!userInfo?.token) {
          setIsAuth(false);
          return;
        }

        const data = await fetchCards({ token: userInfo?.token });
        setCards(data.tasks);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (isAuth) {
      loadCards();
    }
  }, [isAuth]);

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
                error={error}
                handleCreateCard={handleCreateCard}
                handleUpdateCard={handleUpdateCard}
                handleDeleteCard={handleDeleteCard}
                setError={setError}
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
