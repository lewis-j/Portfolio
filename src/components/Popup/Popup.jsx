import React from "react";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import { appendStyles } from "../../util";
import styles from "./Popup.module.css";

export const Popup = ({ isOpen, hoverTimout, handleSetTimout, children }) => {
  if (!isOpen) return null;

  const { isDark } = useThemeContext();

  const downArrowClass = isDark ? styles.arrowDark : styles.arrowLight;
  const borderBottom = isDark ? { borderBottomColor: "white" } : {};

  return (
    <div
      className={appendStyles(styles.popup, downArrowClass)}
      onMouseEnter={() => {
        clearTimeout(hoverTimout);
      }}
      onMouseLeave={() => handleSetTimout(hoverTimout)}
    >
      {children}
      <div className={appendStyles(styles.borderBottom)} style={borderBottom} />
    </div>
  );
};
