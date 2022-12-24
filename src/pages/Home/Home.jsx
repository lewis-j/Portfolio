import { useState, useEffect } from "react";
import { Tabs } from "../../components";
import { FlipCard } from "../../components/FlipCard";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import { isEven } from "../../util";

import styles from "./Home.module.css";

const Home = ({ slides, offsetSegments, ProfileComponent }) => {
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
    slides.forEach((_, index) => {
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
  const getTitles = (index, isSlidingDown) => {
    if (index < 1)
      return { backTitle: slides[0].title, frontTitle: slides[1].title };
    return slides.reduce((titles, _, idx) => {
      if (index === idx) {
        if (isEven(idx)) {
          if (isSlidingDown) {
            return {
              backTitle: slides[idx].title,
              frontTitle: slides[idx - 1].title,
            };
          } else {
            return {
              backTitle: slides[idx].title,
              frontTitle: slides[idx + 1].title,
            };
          }
        } else {
          if (isSlidingDown) {
            return {
              backTitle: slides[idx - 1].title,
              frontTitle: slides[idx].title,
            };
          } else {
            return {
              backTitle: slides[idx + 1].title,
              frontTitle: slides[idx].title,
            };
          }
        }
      }
      return titles;
    }, {});
  };

  const renderFlipCard = () => {
    const { frontTitle, backTitle } = getTitles(slide, isSlidingDown);

    const frontcard =
      slide < 1 && isSlidingDown ? (
        <ProfileComponent />
      ) : (
        <h1 className={styles.flipCardcontent}>{frontTitle}</h1>
      );
    const backCard = <h1 className={styles.flipCardcontent}>{backTitle}</h1>;
    return (
      <FlipCard
        front={frontcard}
        back={backCard}
        frontClassName={
          slide < 1 && isSlidingDown ? "" : styles.flipCardContentContainer
        }
        backClassName={styles.flipCardContentContainer}
        isFront={isEven(slide)}
      />
    );
  };
  const renderSlides = () => {
    return slides.map((item, index) => {
      const style = {};
      if (slide < index) {
        style.transform = "translateX(100vw)";
      }
      return (
        <div style={style} key={index} className={styles.projects}>
          <img src={item.img} alt={item.title} />
        </div>
      );
    });
  };
  const offsetProfilePic = {
    transform: "translateX(11rem)",
  };
  return (
    <div className={styles.slidingContainer}>
      <div
        className={styles.flipCard}
        style={slide === -1 ? offsetProfilePic : {}}
      >
        {renderFlipCard()}
      </div>
      <div className={styles.projectContainer}>{renderSlides()}</div>
      <Tabs />
    </div>
  );
};

export default Home;
