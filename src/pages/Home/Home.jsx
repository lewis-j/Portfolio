import { useState, useEffect } from "react";
import { DisplayCards, Tabs } from "../../components";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import projects from "../../assets/data/projects";

import styles from "./Home.module.css";
import useScroll from "../../hooks/useScroll";

const Home = ({ offsetSegments }) => {
  const { setIsDark } = useThemeContext();
  const {
    setScrollPosition,
    slide: _slide,
    isIncrementing,
  } = useScroll(projects.length + 1, offsetSegments);

  const slide = _slide - 1;

  useEffect(() => {
    setIsDark(slide !== -1);
  }, [slide]);

  return (
    <div className={styles.slidingContainer}>
      <DisplayCards
        slide={slide}
        slides={projects}
        isIncrementing={isIncrementing}
      />
      <div className={styles.tabs}>
        {slide >= 0 && (
          <Tabs
            length={projects.length}
            current={slide}
            handleActive={setScrollPosition}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
