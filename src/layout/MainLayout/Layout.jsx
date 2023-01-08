import { appendStyles } from "../../util";
import Footer from "../../layout/Footer/Footer";
import styles from "./Layout.module.css";
import { useRouter } from "../../lib/router/Router";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import HeaderNav from "../HeaderNav/HeaderNav";
import { TitleBrand, TypingText } from "../../components";
import { cyclingText } from "../../assets";

const Layout = ({ children, containerHeight, navLinks, isCyclingText }) => {
  const { transitionClass, isDark } = useThemeContext();
  const { route } = useRouter();

  return (
    <div
      className={styles.container}
      style={{ height: `calc(100vh + ${containerHeight}px)` }}
    >
      <div className={styles.fixedPage}>
        <HeaderNav navLinks={navLinks} />
        {route === "/" && (
          <div
            className={styles.slidingBackground}
            style={
              isDark
                ? { transform: "translateX(-100vw)", opacity: "1" }
                : { opacity: "0" }
            }
          ></div>
        )}
        <TitleBrand className={styles.logo} title="Lindsey Jackson" />
        <div className={styles.children}>{children}</div>
        <Footer navLinks={navLinks} isCyclingText={isCyclingText} />
        <div className={styles.typingText}>
          <TypingText textList={cyclingText} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
