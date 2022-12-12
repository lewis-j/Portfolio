import React, { useState } from "react";
import { appendStyles } from "../../util";
import projects from "../../assets/data/projects";
import Footer from "../../layout/Footer/Footer";
import styles from "./Layout.module.css";
import { useNavigate } from "../../lib/router/Router";
import { useThemeContext } from "../../context/ThemeContext/Theme";

const Layout = ({ children, offsetSegments }) => {
  const navigate = useNavigate();

  const { transitionClass, isDark } = useThemeContext();

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
          style={isDark ? { transform: "translateX(0)" } : {}}
        ></div>
        <h1 className={appendStyles(styles.logo, transitionClass)}>
          <span className={styles.threeD}>{"<>"}</span>Lindsey Jackson
          <span className={styles.threeD}>{"</>"}</span>
        </h1>
        <div className={styles.children}>{children}</div>
        <Footer navLinks={navLinks} />
      </div>
    </div>
  );
};

export default Layout;
