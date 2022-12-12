import React, { createContext, useContext, useEffect, useState } from "react";
import styles from "./Theme.module.css";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const transitionEventHandler = (e) => {
      console.log("transition Event", e.target.classList);
    };
    document.addEventListener("transitionend", transitionEventHandler);
    return () =>
      document.removeEventListener("transitionend", transitionEventHandler);
  });

  const themeClass = isDark ? styles.darkStyle : "";

  const transitionClass = `${themeClass} ${styles.colorTransition}`;

  return (
    <ThemeContext.Provider
      value={{ themeClass, isDark, transitionClass, setIsDark }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
