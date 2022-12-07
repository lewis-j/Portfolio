import React, { useEffect } from "react";
import { appendStyles } from "../../util";
import styles from "./About.module.css";

const About = ({ isExpanded }) => {
  const expandStateStyle = isExpanded ? styles.expanded : styles.collapsed;
  const container = !isExpanded ? styles.hideContainer : "";

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isExpanded]);
  return (
    <div className={appendStyles(styles.container, container)}>
      <div className={appendStyles(styles.about, expandStateStyle)}>
        Testing
      </div>
    </div>
  );
};

export default About;
