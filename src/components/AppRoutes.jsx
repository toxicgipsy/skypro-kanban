import { Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import { useEffect, useState } from "react";
import MainPage from "../pages/Main";

function AppRouts() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage loading={loading} />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-in" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default AppRouts;
