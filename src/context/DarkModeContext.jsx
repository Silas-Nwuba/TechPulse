import { createContext, useContext, useEffect } from "react";
import { useLocalStorageDarkMode } from "../hook/useLocalStorageDarkMode.js";

const DarkModeContext = createContext();
const Local_Key = "mode";
function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageDarkMode(
    "light",
    Local_Key
  );
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
