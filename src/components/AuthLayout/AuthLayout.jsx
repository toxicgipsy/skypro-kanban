import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../lib/paths";
import { useUserContext } from "../../contexts/hooks/useUser";

function AuthLayout() {
  const { user } = useUserContext();
  return !user ? <Outlet /> : <Navigate to={paths.MAIN} />;
}

export default AuthLayout;
