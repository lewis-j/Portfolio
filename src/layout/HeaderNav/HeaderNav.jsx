import { appendStyles } from "../../util";
import styles from "./HeaderNav.module.css";
import { useEffect, useState } from "react";
import { TitleBrand } from "../../components";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import { Nav } from "../Footer/layout/Nav/Nav";
import { SocialLinks } from "../Footer/layout/SocialLinks/SocialLinks";

const HeaderNav = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useThemeContext();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const menuBtnStyle = isOpen
    ? appendStyles(styles.hamburgerMenu, styles.open)
    : styles.hamburgerMenu;
  const themeStyle = isDark
    ? appendStyles(styles.dark, menuBtnStyle)
    : menuBtnStyle;
  const menuTheme = isDark ? appendStyles(styles.dark) : styles.light;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TitleBrand title="Lindsey Jackson" className={styles.logo} />
        <div className={themeStyle} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
      {isOpen && (
        <div
          className={appendStyles(menuTheme, styles.menu)}
          onClick={(e) => {
            if (e.target.tagName === "H3") {
              setIsOpen(false);
            }
          }}
        >
          <Nav navLinks={navLinks} className={styles.nav} />
          <div className={styles.social}>
            <SocialLinks />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderNav;
