import { useEffect } from "react";
import { DisplayCards, Tabs } from "../../components";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import projects from "../../assets/data/projects";

import styles from "./Home.module.css";
import useScroll from "../../hooks/useScroll";

const Home = ({ offsetSegments }) => {
  const { setIsDark } = useThemeContext();
  const { setScrollPosition, slide, isIncrementing } = useScroll(
    projects.length + 1,
    offsetSegments
  );

  const setActiveScrollWithOffset = (idx) => setScrollPosition(idx + 1);

  useEffect(() => {
    setIsDark(slide !== 0);
  }, [slide]);

  return (
    <div className={styles.slidingContainer}>
      <DisplayCards
        slide={slide}
        slides={projects}
        isIncrementing={isIncrementing}
      />
      <div className={styles.tabs}>
        {slide >= 1 && (
          <Tabs
            length={projects.length}
            current={slide - 1}
            handleActive={setActiveScrollWithOffset}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
