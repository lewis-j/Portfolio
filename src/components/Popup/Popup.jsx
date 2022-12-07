import React from "react";
import { appendStyles } from "../../util";
import styles from "./Popup.module.css";

export const Popup = ({
  isOpen,
  hoverTimout,
  handleSetTimout,
  children,
  isDark = false,
  className,
}) => {
  if (!isOpen) return null;

  const downArrowClass = isDark ? styles.arrowDark : styles.arrowLight;

  return (
    <div
      className={appendStyles(styles.popup, className, downArrowClass)}
      onMouseEnter={() => {
        clearTimeout(hoverTimout);
      }}
      onMouseLeave={() => handleSetTimout(hoverTimout)}
    >
      {children}
    </div>
  );
};
