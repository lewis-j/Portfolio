import React from "react";
import styles from "./Nav.module.css";
import { appendStyles } from "../../../../util";
import { nanoid } from "@reduxjs/toolkit";
import { useThemeContext } from "../../../../context/ThemeContext/Theme";

export const Nav = ({ navLinks }) => {
  const { transitionClass } = useThemeContext();
  const renderLinks = () => {
    return navLinks.map(({ title, linkHandler }) => (
      <h3 key={nanoid()} onClick={linkHandler}>
        {title}
      </h3>
    ));
  };

  return (
    <div className={appendStyles(styles.links, transitionClass)}>
      {renderLinks()}
    </div>
  );
};
