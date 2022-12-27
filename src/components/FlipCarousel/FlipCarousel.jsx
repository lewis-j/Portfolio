import styles from "./FlipCarousel.module.css";
import { isEven } from "../../util";
import { FlipCard } from "../FlipCard";
import { useEffect, useState } from "react";

const FlipCarousel = ({ renderCard, frontClassName, backClassName, index }) => {
  const [slide, setSlide] = useState(0);
  const [isIncrementing, setIsIncrementing] = useState(false);
  // const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (index === null) return;
    setSlide((prev) => {
      if (prev > index) {
        setIsIncrementing(false);
      } else {
        setIsIncrementing(true);
      }
      return index;
    });
  }, [index]);
  const decrementSlide = () => {
    setIsIncrementing(false);
    setSlide(slide - 1);
  };
  const incrementSlide = () => {
    setIsIncrementing(true);
    setSlide(slide + 1);
  };

  const handleFlips = {
    increment: incrementSlide,
    decrement: decrementSlide,
  };

  const attachCardListeners = (handlers) => (idx) => {
    return renderCard(idx, handlers);
  };

  const renderCardWithListeners = attachCardListeners(handleFlips);

  const getCards = (idx) => {
    if (isIncrementing) {
      if (isEven(idx)) {
        return {
          front: renderCardWithListeners(idx),
          back: renderCardWithListeners(idx - 1),
        };
      } else {
        return {
          front: renderCardWithListeners(idx - 1),
          back: renderCardWithListeners(idx),
        };
      }
    } else {
      if (isEven(idx)) {
        return {
          front: renderCardWithListeners(idx),
          back: renderCardWithListeners(idx + 1),
        };
      } else {
        return {
          front: renderCardWithListeners(idx + 1),
          back: renderCardWithListeners(idx),
        };
      }
    }
  };
  // const shadowClassName = index === 0 ? styles.boxShadow : "";
  // const _styles = appendStyles(styles.flipCardImg, shadowClassName);
  const { front, back } = getCards(slide);
  return (
    <FlipCard
      front={front}
      frontClassName={frontClassName}
      back={back}
      backClassName={backClassName}
      isBack={!isEven(slide)}
      // className={styles.projects}
    />
  );
};
export default FlipCarousel;
