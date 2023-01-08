import React from "react";
import { appendStyles } from "../../util";
import styles from "./OverlaySlideCards.module.css";

const OverlaySlideCards = ({ slides, slide, isIncrementing, className }) => {
  const renderSlides = (slides) => {
    return slides.map((item, idx) => {
      //https://stackoverflow.com/questions/10247255/css-transition-between-left-right-and-top-bottom-positions
      const zIndex = 100;
      const style = {
        zIndex: zIndex,
      };
      if (slide === idx) style.zIndex = zIndex + 3;
      if (slide + 1 === idx) style.zIndex = zIndex + 1;

      if (!isIncrementing) {
        if (slide === idx) style.zIndex = zIndex + 1;
        if (slide + 1 === idx) style.zIndex = zIndex + 3;
        if (slide + 2 === idx) style.zIndex = zIndex + 2;
      }

      const shiftClass = slide < idx ? styles.shift : styles.origin;
      return (
        <section
          className={`${styles.section} ${shiftClass}`}
          key={idx + item}
          style={style}
        >
          {item}
        </section>
      );
    });
  };
  return (
    <div className={appendStyles(styles.container, className)}>
      {renderSlides(slides)}
    </div>
  );
};

export default OverlaySlideCards;
