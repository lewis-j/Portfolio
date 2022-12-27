import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FlipCarousel.module.css";
import { faCircleRight, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { appendStyles, isEven } from "../../util";
import { FlipCard } from "../FlipCard";
import { useState } from "react";

const FlipCarousel = ({ project, index, style }) => {
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [slide, setSlide] = useState(0);

  const decrementSlide = () => {
    setIsIncrementing(false);

    setSlide(slide - 1);
  };
  const incrementSlide = () => {
    setSlide(slide + 1);
    setIsIncrementing(true);
  };

  const card = (idx) => {
    return (
      <div className={styles.slideImgContainer}>
        <img
          src={project.imgs[idx]}
          alt={project.title}
          className={styles.slideImg}
        />
        <FontAwesomeIcon
          className={styles.slideImgArrowLeft}
          icon={faCircleLeft}
          size="2x"
          color="white"
          onClick={decrementSlide}
        />
        <FontAwesomeIcon
          className={styles.slideImgArrowRight}
          icon={faCircleRight}
          size="2x"
          color="white"
          onClick={incrementSlide}
        />
      </div>
    );
  };

  const getImgs = (idx) => {
    if (isIncrementing) {
      if (isEven(idx)) {
        console.log("isodd", idx);
        return {
          front: card(idx),
          back: card(idx - 1),
        };
      } else {
        console.log("isEven", idx);
        return {
          front: card(idx - 1),
          back: card(idx),
        };
      }
    } else {
      if (isEven(idx)) {
        return {
          front: card(idx),
          back: card(idx + 1),
        };
      } else {
        return {
          front: card(idx + 1),
          back: card(idx),
        };
      }
    }
  };
  const shadowClassName = index === 0 ? styles.boxShadow : "";
  const _styles = appendStyles(styles.flipCardImg, shadowClassName);

  const { front, back } = getImgs(slide);
  return (
    <FlipCard
      front={front}
      frontClassName={_styles}
      back={back}
      backClassName={_styles}
      isBack={!isEven(slide)}
      className={styles.projects}
      style={style}
    />
  );
};
export default FlipCarousel;
