import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const Theme = ({ childeren }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
