import Footer from "../../layout/Footer/Footer";
import styles from "./Layout.module.css";
import { useRouter } from "../../lib/router/Router";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import HeaderNav from "../HeaderNav/HeaderNav";
import { TitleBrand, TypingText } from "../../components";
import { cyclingText } from "../../assets";
import DownIndicator from "../../components/DownIndicator/DownIndicator";

const Layout = ({ children, containerHeight, navLinks, isCyclingText }) => {
  const { isDark } = useThemeContext();
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
                ? { transform: "translateX(-150vw)", opacity: "1" }
                : { opacity: "0" }
            }
          ></div>
        )}
        <TitleBrand className={styles.logo} title="Lindsey Jackson" />
        <div className={styles.children}>
          <div className={styles.scrollIndicator}>
            <DownIndicator title="Scroll Down" />
          </div>
          {children}
        </div>
        <Footer navLinks={navLinks} isCyclingText={isCyclingText} />
        <div className={styles.typingText}>
          <TypingText textList={cyclingText} isCyclingText={isCyclingText} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
