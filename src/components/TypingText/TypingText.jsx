import { useState, useEffect } from "react";
import styles from "./TypingText.module.css";

const TypingText = ({ textList }) => {
  const text = "test";
  const timeout = 250;

  const [currentText, setText] = useState("");
  const erase = () => {
    [...Array(text.length).keys()].forEach((idx) => {
      console.log("char", text.charAt(idx));
      setTimeout(() => {
        setText(text.slice(0, text.length - idx - 1));
      }, timeout * idx);
    });
  };

  const type = () => {
    [...Array(text.length).keys()].forEach((idx) => {
      console.log("char", text.charAt(idx));
      setTimeout(() => {
        setText((prev) => prev + text.charAt(idx));
        console.log(idx, text.length - 1, text.charAt(idx));
        if (idx === text.length - 1) setTimeout(() => erase(), 1000);
      }, timeout * idx);
    });
  };

  useEffect(() => {
    type();
    return () => {};
  }, []);
  return (
    <div className={styles.container}>
      <span className={styles.text}>{currentText}</span>
      <span className={styles.cursor} />
    </div>
  );
};
export default TypingText;
