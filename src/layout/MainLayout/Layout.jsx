import { appendStyles } from "../../util";
import Footer from "../../layout/Footer/Footer";
import styles from "./Layout.module.css";
import { useRouter } from "../../lib/router/Router";
import { useThemeContext } from "../../context/ThemeContext/Theme";

const Layout = ({ children, containerHeight, navLinks, isCyclingText }) => {
  const { transitionClass, isDark } = useThemeContext();
  const { route } = useRouter();

  return (
    <div
      className={styles.container}
      style={{ height: `calc(100vh + ${containerHeight}px)` }}
    >
      <div className={styles.fixedPage}>
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
        <h1 className={appendStyles(styles.logo, transitionClass)}>
          <span className={styles.threeD}>{"<>"}</span>Lindsey Jackson
          <span className={styles.threeD}>{"</>"}</span>
        </h1>
        <div className={styles.children}>{children}</div>
        <Footer navLinks={navLinks} isCyclingText={isCyclingText} />
      </div>
    </div>
  );
};

export default Layout;
