import styles from "./FlipCarousel.module.css";
import { isEven } from "../../util";
import { FlipCard } from "../FlipCard";
import { useLayoutEffect, useState } from "react";

const FlipCarousel = ({
  renderCard,
  frontClassName,
  backClassName,
  className,
  index = null,
}) => {
  const [slide, setSlide] = useState(0);
  const [isIncrementing, setIsIncrementing] = useState(false);

  useLayoutEffect(() => {
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
    return renderCard(idx, handlers, isIncrementing);
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
  const { front, back } = getCards(slide);

  const flipIndex = index ? index : slide;
  if (index) console.log("index", index);
  return (
    <FlipCard
      front={front}
      className={className}
      frontClassName={frontClassName}
      back={back}
      backClassName={backClassName}
      isBack={!isEven(slide)}
      index={flipIndex}
    />
  );
};
export default FlipCarousel;
