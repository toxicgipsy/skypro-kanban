import { Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRout";
import PopNewCardPage from "../pages/PopNewCardPage";
import PopEditCardPage from "../pages/PopEditCardPage";
import PopBrowsePage from "../pages/PopBrowsePage";
import PopExitPage from "../pages/PopExitPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="card/:id" element={<PopBrowsePage />} />
          <Route path="card/add" element={<PopNewCardPage />} />
          <Route path="card/:id/edit" element={<PopEditCardPage />} />
          <Route path="exit" element={<PopExitPage />} />
        </Route>
      </Route>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
