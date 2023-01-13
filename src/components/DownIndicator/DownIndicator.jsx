import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./DownIndicator.module.css";

const DownIndicator = ({ title }) => {
  const [show, setShow] = useState(true);
  const [animIndex, setIndex] = useState(0);
  const arrowSet = () => {
    return [...Array(3).keys()].map((idx) => {
      if (idx === 2) {
        return (
          <FontAwesomeIcon
            key={idx * Math.random()}
            icon={faAngleDown}
            className={styles.angle}
            onAnimationEnd={() => {
              setShow(false);
              if (animIndex < 3)
                setTimeout(() => {
                  setIndex(animIndex + 1);
                  setShow(true);
                }, 500);
            }}
          />
        );
      }
      return (
        <FontAwesomeIcon
          key={idx * Math.random()}
          icon={faAngleDown}
          className={styles.angle}
        />
      );
    });
  };
  if (show)
    return (
      <div className={styles.container}>
        {title}
        <div className={styles.downAngles}>{arrowSet()}</div>
      </div>
    );
  return null;
};
export default DownIndicator;
