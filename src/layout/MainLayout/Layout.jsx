import React, { useState } from "react";
import { appendStyles } from "../../util";
import projects from "../../assets/data/projects";
import Footer from "../../layout/Footer/Footer";
import styles from "./Layout.module.css";
import { useNavigate } from "../../lib/router/Router";

const Layout = ({ children, isLightTheme, offsetSegments }) => {
  const navigate = useNavigate();
  const darkClass = !isLightTheme ? styles.darkStyle : "";

  const transitionClass = appendStyles(darkClass, styles.colorTransition);

  const containerHeight = offsetSegments * projects.length + 1;

  const navLinks = [
    {
      title: "Home",
      linkHandler: () => {
        navigate("/");
      },
    },
    {
      title: "Projects",
      linkHandler: () => {},
    },
    {
      title: "About",
      linkHandler: () => {
        navigate("/about");
      },
    },
  ];
  return (
    <div
      className={styles.container}
      style={{ height: `calc(100vh + ${containerHeight}px)` }}
    >
      <div className={styles.fixedPage}>
        <div
          className={styles.slidingBackground}
          style={!isLightTheme ? { transform: "translateX(0)" } : {}}
        ></div>
        <h1 className={appendStyles(styles.logo, transitionClass)}>
          <span className={styles.threeD}>{"<>"}</span>Lindsey Jackson
          <span className={styles.threeD}>{"</>"}</span>
        </h1>
        <div className={styles.children}>{children}</div>
        <Footer
          styleClasses={{ darkClass, transitionClass }}
          navLinks={navLinks}
        />
      </div>
    </div>
  );
};

export default Layout;
