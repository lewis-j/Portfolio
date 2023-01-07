import React from "react";
import styles from "./TitleBrand.module.css";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import { appendStyles } from "../../util";

const TitleBrand = ({ title, className }) => {
  const { transitionClass } = useThemeContext();
  return (
    <h1 className={appendStyles(className, transitionClass)}>
      <span className={styles.threeD}>{"<>"}</span>
      {title}
      <span className={styles.threeD}>{"</>"}</span>
    </h1>
  );
};

export default TitleBrand;
