import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [DarkMode, setDarkMode] = useState(
   JSON.parse( localStorage.getItem("darkMode") || false)
  );

  const toggle = () => {
    setDarkMode(!DarkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", DarkMode);
  }, [DarkMode]);
  return (
    <DarkModeContext.Provider value={{ DarkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
