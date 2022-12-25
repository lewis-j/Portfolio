import { useState, useEffect } from "react";
import { DisplayCards, Tabs } from "../../components";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import projects from "../../assets/data/projects";

import styles from "./Home.module.css";

const Home = ({ offsetSegments }) => {
  const [isSlidingDown, setIsSlidingDown] = useState(true);
  const [slide, setSlide] = useState(-1);

  const { setIsDark } = useThemeContext();

  useEffect(() => {
    setIsDark(slide !== -1);
  }, [slide]);

  const _handleScroll = (e) => {
    const offset = window.pageYOffset;
    if (offset < offsetSegments) {
      if (slide === -1) return;
      setSlide(-1);
      setIsSlidingDown(true);
      return;
    }
    projects.forEach((_, index) => {
      const lowRange = (index + 1) * offsetSegments;
      const highRange = lowRange + offsetSegments;

      const isInRange = offset > lowRange && offset < highRange;
      if (isInRange) {
        if (index === slide) return;

        setIsSlidingDown(slide < index);

        setSlide(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", _handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", _handleScroll);
    };
  });
  const setScrollPosition = (slideIndex) => {
    window.scrollTo(0, slideIndex * offsetSegments + 1);
  };
  return (
    <div className={styles.slidingContainer}>
      <DisplayCards
        slide={slide}
        slides={projects}
        isSlidingDown={isSlidingDown}
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
