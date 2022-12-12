import React, { createContext, useContext, useEffect, useState } from "react";
import styles from "./Theme.module.css";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    const transitionEventHandler = (e) => {
      const isDarkclass = [...e.target.classList].some((className) => {
        return className === styles.colorTransition;
      });
      if (isDarkclass) {
        setIsTransition(false);
      }
    };
    document.addEventListener("transitionend", transitionEventHandler);
    return () =>
      document.removeEventListener("transitionend", transitionEventHandler);
  }, []);

  useEffect(() => {
    setIsTransition(true);
  }, [isDark]);

  const themeClass = isDark ? styles.darkStyle : "";
  const transitionState = isTransition ? styles.colorTransition : "";
  const transitionClass = `${themeClass} ${transitionState}`;

  return (
    <ThemeContext.Provider
      value={{ themeClass, isDark, transitionClass, setIsDark }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
