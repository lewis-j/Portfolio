import { useThemeContext } from "../../context/ThemeContext/Theme";
import styles from "./TypingText.module.css";
import useTyping from "./useTyping";
import { appendStyles } from "../../util";

const TypingText = ({ textList, isCyclingText }) => {
  const type = { speed: 150, delay: 1000 };
  const erase = { speed: 100, delay: 2000 };
  const { isDark } = useThemeContext();

  const { isTyping, text } = useTyping(textList, type, erase, isCyclingText);

  const themeClass = isDark ? styles.dark : styles.light;

  const cursorClassName = isTyping
    ? styles.cursor
    : `${styles.cursor} ${styles.blink}`;
  return (
    <div className={appendStyles(styles.container, themeClass)}>
      <span className={styles.text}>{text}</span>
      <span className={cursorClassName} />
    </div>
  );
};
export default TypingText;
