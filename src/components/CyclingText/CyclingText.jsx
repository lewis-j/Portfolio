import React, { useEffect, useState } from "react";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import styles from "./CyclingText.module.css";

const CyclingText = ({ textList, isCyclingText, animationTime }) => {
  const [textIndex, setTextIndex] = useState(0);
  const { transitionClass } = useThemeContext();

  useEffect(() => {
    if (!isCyclingText) return;

    const intervalId = setInterval(() => {
      setTextIndex((prev) => {
        if (prev === textList.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, animationTime);

    return () => {
      clearInterval(intervalId);
    };
  }, [isCyclingText]);

  const Title = ({ text }) => {
    return (
      <h3
        className={styles.title}
        style={isCyclingText ? { animationDuration: `${animationTime}ms` } : {}}
      >
        {text}
      </h3>
    );
  };

  return (
    <div className={`${styles.container} ${transitionClass}`}>
      <Title text={textList[textIndex]} />
    </div>
  );
};

export default CyclingText;
