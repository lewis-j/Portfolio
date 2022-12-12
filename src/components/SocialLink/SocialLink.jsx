import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SocialLink.module.css";
import React, { useEffect, useState } from "react";
import { useThemeContext } from "../../context/ThemeContext/Theme";

const SocialLink = ({ faIcon, link, className = "", size = "2x" }) => {
  const { isDark } = useThemeContext();
  const [isTransition, setIsTransition] = useState(true);

  useEffect(() => {
    setIsTransition(true);
  }, [isDark]);
  return (
    <>
      <span
        className={styles.socialLink}
        onClick={() => window.open(link, "_blank")}
        onTransitionEnd={() => {
          setIsTransition(false);
        }}
      >
        <FontAwesomeIcon
          icon={faIcon}
          size={size}
          style={isTransition ? {} : { transition: "color 0s" }}
          className={`${styles.socialIcon} ${className}`}
        />
      </span>
    </>
  );
};

export default SocialLink;
