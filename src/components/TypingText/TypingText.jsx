import { useState, useEffect } from "react";
import styles from "./TypingText.module.css";

const TypingText = ({ textList }) => {
  const typeSpeed = 150;
  const eraseSpeed = 100;
  const newTextdelay = 1000;
  const eraseDelay = 2000;

  const [currentText, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [timeoutId, setTimoutId] = useState();

  const erase = (index, wordIndex) => {
    setIsTyping(true);
    const word = textList[wordIndex];
    if (index === 0) {
      setIsTyping(false);
      const nextWordIndex =
        textList.length - 1 === wordIndex ? 0 : wordIndex + 1;
      const timeoutId = setTimeout(() => {
        type(0, nextWordIndex);
      }, newTextdelay);
      setTimoutId(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setText(word.slice(0, index - 1));
        erase(index - 1, wordIndex);
      }, eraseSpeed);
      setTimoutId(timeoutId);
    }
  };

  const type = (index = 0, wordIndex = 0) => {
    setIsTyping(true);
    const word = textList[wordIndex];
    if (index === word.length) {
      setIsTyping(false);
      const timeoutId = setTimeout(() => {
        erase(index, wordIndex);
      }, eraseDelay);
      setTimoutId(timeoutId);
    } else {
      setText((prev) => prev + word.charAt(index));
      const timeoutId = setTimeout(() => {
        type(index + 1, wordIndex);
      }, typeSpeed);
      setTimoutId(timeoutId);
    }
  };

  useEffect(() => {
    console.log("timeoutId", timeoutId);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    type();
    return () => {};
  }, []);

  const cursorClassName = isTyping
    ? styles.cursor
    : `${styles.cursor} ${styles.blink}`;
  return (
    <div className={styles.container}>
      <span className={styles.text}>{currentText}</span>
      <span className={cursorClassName} />
    </div>
  );
};
export default TypingText;
