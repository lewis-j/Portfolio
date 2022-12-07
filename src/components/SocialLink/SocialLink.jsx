import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SocialLink.module.css";
import React from "react";

const SocialLink = ({ faIcon, link, className = "", size = "2x" }) => {
  return (
    <>
      <span
        className={styles.socialLink}
        onClick={() => window.open(link, "_blank")}
      >
        <FontAwesomeIcon
          icon={faIcon}
          size={size}
          className={`${styles.socialIcon} ${className}`}
        />
      </span>
    </>
  );
};

export default SocialLink;
