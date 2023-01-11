import React from "react";
import { SocialLinks } from "./layout/SocialLinks/SocialLinks";
import styles from "./Footer.module.css";
import { Nav } from "./layout/Nav/Nav";

const Footer = ({ navLinks, isCyclingText }) => {
  return (
    <div className={styles.footer}>
      <Nav navLinks={navLinks} className={styles.nav} />
      <div className={styles.social}>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
