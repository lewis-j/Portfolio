import { appendStyles } from "../../util";
import projects from "../../assets/data/projects";
import Footer from "../../layout/Footer/Footer";
import styles from "./Layout.module.css";
import { useNavigate, useRouter } from "../../lib/router/Router";
import { useThemeContext } from "../../context/ThemeContext/Theme";

const Layout = ({ children, offsetSegments }) => {
  const navigate = useNavigate();
  const { transitionClass, isDark, setIsDark } = useThemeContext();
  const { route } = useRouter();

  const containerHeight = offsetSegments * projects.length + 1;

  const navLinks = [
    {
      title: "Home",
      linkHandler: () => {
        setIsDark(false);
        navigate("/");
        window.scrollTo(0, 0);
      },
    },
    {
      title: "Projects",
      linkHandler: () => {
        navigate("/");
        window.scrollTo(0, offsetSegments + 50);
      },
    },
    {
      title: "About",
      linkHandler: () => {
        navigate("/about");
      },
    },
  ];
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
        <Footer
          navLinks={navLinks}
          isCyclingText={window.pageYOffset < offsetSegments}
        />
      </div>
    </div>
  );
};

export default Layout;
