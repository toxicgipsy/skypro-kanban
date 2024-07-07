import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../lib/paths";

export const UserContext = createContext(null);

const getUserLocalStorage = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user
  } catch(error) {
    console.log(error.message);
    localStorage.removeItem("user");
    return null;
  }
}

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(getUserLocalStorage());
    const navigete = useNavigate();

    function login(newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
      navigete(paths.MAIN);
      setUser(newUser);
    }
  
    function logout() {
      localStorage.removeItem("user")
      navigete(paths.SIGN_IN);
      setUser(null);
    }

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}