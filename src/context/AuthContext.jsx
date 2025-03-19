import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState(
   JSON.parse( localStorage.getItem("user") || null)
  );

  const login = () => {
    setDarkMode(!DarkMode);
  };

  useEffect(() => {
    localStorage.setItem("user",JSON.stringify(CurrentUser) );
  }, [CurrentUser]);
  return (
    <AuthContext.Provider value={{CurrentUser,login }}>
      {children}
    </AuthContext.Provider>
  );
};
