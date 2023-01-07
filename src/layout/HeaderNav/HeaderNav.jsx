import { appendStyles } from "../../util";
import styles from "./HeaderNav.module.css";
import { useState } from "react";
import { TitleBrand } from "../../components";
import { useThemeContext } from "../../context/ThemeContext/Theme";

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useThemeContext();

  const menuBtnStyle = isOpen
    ? appendStyles(styles.hamburgerMenu, styles.open)
    : styles.hamburgerMenu;
  const themeStyle = isDark
    ? appendStyles(styles.dark, menuBtnStyle)
    : menuBtnStyle;
  return (
    <div className={styles.container}>
      <TitleBrand title="Lindsey Jackson" className={styles.logo} />
      <div className={themeStyle} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default HeaderNav;
