import React from "react";
import styles from "./Nav.module.css";
import { appendStyles } from "../../../../util";
import { useThemeContext } from "../../../../context/ThemeContext/Theme";

export const Nav = ({ navLinks, className }) => {
  const { transitionClass } = useThemeContext();
  const renderLinks = () => {
    return navLinks.map(({ title, linkHandler }, idx) => (
      <h3 key={`${title}-${idx}`} onClick={linkHandler}>
        {title}
      </h3>
    ));
  };

  return (
    <div className={appendStyles(styles.links, className, transitionClass)}>
      {renderLinks()}
    </div>
  );
};
