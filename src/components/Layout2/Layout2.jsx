import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../lib/paths";
import { useUserContext } from "../../contexts/hooks/useUser";

function Layout() {
  const {user} = useUserContext();
  return !user ? <Outlet /> : <Navigate to={paths.MAIN} />;
}

export default Layout;
