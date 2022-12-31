import React from "react";
import { cyclingText } from "../../assets";
import { CyclingText, TypingText } from "../../components";
import { SocialLinks } from "./layout/SocialLinks/SocialLinks";
import styles from "./Footer.module.css";
import { Nav } from "./layout/Nav/Nav";

const Footer = ({ navLinks, isCyclingText }) => {
  return (
    <div className={styles.footer}>
      <Nav navLinks={navLinks} />
      <CyclingText
        textList={cyclingText}
        isCyclingText={isCyclingText}
        animationTime={2000}
      />
      {/* <TypingText textList={cyclingText} /> */}
      <SocialLinks />
    </div>
  );
};

export default Footer;
