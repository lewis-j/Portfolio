import { useEffect } from "react";
import styles from "./TitleBrand.module.css";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import { appendStyles } from "../../util";
import { useRouter } from "../../lib/router/Router";
import useTyping from "../TypingText/useTyping";

const TitleBrand = ({ title, className }) => {
  const { route } = useRouter();
  const { transitionClass } = useThemeContext();
  const type = { speed: 150, delay: 1000 };
  const erase = { speed: 100, delay: 2000 };

  const AboutTitle = () => {
    const { text } = useTyping([".about()"], type, erase, false);
    useEffect(() => {
      return () => {};
    }, [text]);
    return (
      <>
        {title.replace(" ", "")}
        {text}
      </>
    );
  };

  const titleContent =
    route === "/" ? (
      <>
        <span className={styles.threeD}>{"<>"}</span>
        {title}
        <span className={styles.threeD}>{"</>"}</span>
      </>
    ) : (
      <AboutTitle />
    );

  return (
    <h1 className={appendStyles(className, transitionClass)}>{titleContent}</h1>
  );
};

export default TitleBrand;
