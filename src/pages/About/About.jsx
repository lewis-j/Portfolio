import React, { useEffect } from "react";
import { appendStyles } from "../../util";
import styles from "./About.module.css";
import { useThemeContext } from "../../context/ThemeContext/Theme";

const About = () => {
  const { setIsDark } = useThemeContext();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setIsDark(true);
    return () => {
      document.body.style.overflow = "visible";
      setIsDark(false);
    };
  }, []);
  return (
    <div className={appendStyles(styles.wrapper)}>
      <div className={appendStyles(styles.container)}>
        <div className={styles.about}>testing</div>
      </div>
    </div>
  );
};

export default About;
