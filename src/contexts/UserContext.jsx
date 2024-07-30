import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../lib/paths";
import { getFromLocalStorage } from "../lib/utiles";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getFromLocalStorage("user"));
  const navigate = useNavigate();

  function login(newUser) {
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate(paths.MAIN);
    setUser(newUser);
  }

  function logout() {
    localStorage.removeItem("user");
    navigate(paths.SIGN_IN);
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
