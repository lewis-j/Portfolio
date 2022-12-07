import React from "react";
import { cyclingText } from "../../assets";
import { CyclingText } from "../../components";
import { SocialLinks } from "./layout/SocialLinks/SocialLinks";
import styles from "./Footer.module.css";
import { Nav } from "./layout/Nav/Nav";

const Footer = ({ styleClasses, navLinks }) => {
  const { transitionClass } = styleClasses;

  return (
    <div className={styles.footer}>
      <Nav navLinks={navLinks} className={transitionClass} />
      <CyclingText textList={cyclingText} className={transitionClass} />
      <SocialLinks classes={styleClasses} />
    </div>
  );
};

export default Footer;
