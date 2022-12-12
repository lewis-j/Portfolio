import React, { useEffect, useState } from "react";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import styles from "./CyclingText.module.css";

const CyclingText = ({ textList }) => {
  const [textIndex, setTextIndex] = useState(0);
  const { transitionClass } = useThemeContext();

  useEffect(() => {
    console.log("running useeffect");
    const intervalId = setInterval(() => {
      setTextIndex((prev) => {
        if (prev === textList.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={`${styles.container} ${transitionClass}`}>
      <h3>{textList[textIndex]}</h3>
    </div>
  );
};

export default CyclingText;
