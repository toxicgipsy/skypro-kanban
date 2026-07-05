import { Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { useEffect, useState } from "react";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

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
            element={<MainPage setIsAuth={setIsAuth} loading={loading} />}
          />
          <Route />
          <Route />
          <Route />
          <Route />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
