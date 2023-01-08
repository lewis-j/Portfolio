import { useState, useEffect } from "react";

const useTyping = (textList, typeSetting, eraseSetting, isEnding = false) => {
  const [currentText, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [timeoutId, setTimoutId] = useState();

  const { speed: typeSpeed, delay: typeDelay } = typeSetting;
  const { speed: eraseSpeed, delay: eraseDelay } = eraseSetting;

  const erase = (index, wordIndex) => {
    setIsTyping(true);
    const word = textList[wordIndex];
    if (index === 0) {
      setIsTyping(false);
      const nextWordIndex =
        textList.length - 1 === wordIndex ? 0 : wordIndex + 1;
      const timeoutId = setTimeout(() => {
        type(0, nextWordIndex);
      }, typeDelay);
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
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    type();
    return () => {};
  }, []);
  return { isTyping, text: currentText };
};

export default useTyping;
