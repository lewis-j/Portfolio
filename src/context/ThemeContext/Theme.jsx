import React, { createContext, useContext, useState } from "react";
import styles from "./Theme.module.css";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

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
