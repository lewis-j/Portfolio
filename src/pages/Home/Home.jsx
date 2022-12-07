import React, { useState } from "react";
import { appendStyles } from "../../util";
import projects from "../../assets/data/projects";
import profile from "../../assets/img/about_portrait.jpg";
import MainContent from "../../layout/MainContent/MainContent";
import Footer from "../../layout/Footer/Footer";
import styles from "./Home.module.css";
import About from "../About/About";

const Home = ({ navigator }) => {
  const [slide, setSlide] = useState(-1);
  const [isAbout, setisAbout] = useState(false);

  const offsetSegments = 300;

  const isProfile = slide === -1;

  const darkClass = !isProfile ? styles.darkStyle : "";

  const transitionClass = appendStyles(darkClass, styles.colorTransition);

  const containerHeight = offsetSegments * projects.length + 1;

  const ProfileComponent = () => (
    <img
      src={profile}
      alt="Lindsey Jackson's profile"
      onClick={() => {
        console.log("clidked profile");
        setisAbout(true);
      }}
    />
  );

  const navLinks = [
    {
      title: "Projects",
      linkHandler: () => {
        setisAbout(false);
      },
    },
    {
      title: "About",
      linkHandler: () => {
        setisAbout(true);
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
          style={!isProfile ? { transform: "translateX(0)" } : {}}
        ></div>
        <h1 className={appendStyles(styles.logo, transitionClass)}>
          <span className={styles.threeD}>{"<>"}</span>Lindsey Jackson
          <span className={styles.threeD}>{"</>"}</span>
        </h1>
        <div className={styles.slidingContainer}>
          <MainContent
            slide={slide}
            setSlide={setSlide}
            slides={projects}
            offsetSegments={offsetSegments}
            ProfileComponent={ProfileComponent}
          />
        </div>
        <Footer
          styleClasses={{ darkClass, transitionClass }}
          navLinks={navLinks}
        />
        <About isExpanded={isAbout} />
      </div>
    </div>
  );
};

export default Home;
