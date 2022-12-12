import React, { useEffect } from "react";
import { appendStyles } from "../../util";
import styles from "./About.module.css";

const About = () => {
  // const expandStateStyle = isExpanded ? styles.expanded : styles.collapsed;
  // const container = !isExpanded ? styles.hideContainer : "";

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "visible");
  }, []);
  return (
    <div className={appendStyles(styles.wrapper)}>
      <div className={appendStyles(styles.container)}>
        <div className={styles.about}>testing</div>
      </div>
    </div>
  );
};

export default About;
