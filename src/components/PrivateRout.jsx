import { Navigate, Outlet } from "react-router-dom";

function PrivateRout({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRout;
