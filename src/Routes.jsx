import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";
import { paths } from "./lib/paths";
import ExitPage from "./pages/ExitPage";
import { NewCardPage } from "./pages/NewCardPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={paths.MAIN} element={<MainPage />}>
          <Route path={paths.EXIT} element={<ExitPage />} />
          <Route path={paths.NEWCARD} element={<NewCardPage />} />
          <Route path={paths.CARD} element={<CardPage />} />
        </Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={paths.SIGN_IN} element={<SignInPage />} />
        <Route path={paths.SIGN_UP} element={<SignUpPage />} />
      </Route>

      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
