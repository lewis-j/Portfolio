import React, { useState } from "react";
import { SocialLink } from "../../../../components";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCopy,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import styles from "./SocialLinks.module.css";
import socialLinks from "../../../../assets/data/socialLinks";
import { appendStyles } from "../../../../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popup } from "../../../../components/Popup/Popup";
import { useThemeContext } from "../../../../context/ThemeContext/Theme";

export const SocialLinks = () => {
  const { transitionClass } = useThemeContext();

  const [emailIsOpen, setEmailIsOpen] = useState(false);
  const [hoverTimout, setHoverTimout] = useState();

  const handleClosePopup = (prevTimeoutId) => {
    clearTimeout(prevTimeoutId);
    const timeoutId = setTimeout(() => {
      setEmailIsOpen(false);
    }, 2000);
    setHoverTimout(timeoutId);
  };

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    alert(`${email} copied to clipboard`);
  };
  return (
    <div className={styles.socialLinks}>
      <SocialLink
        faIcon={faGithub}
        link={socialLinks.gitHub}
        className={transitionClass}
      />
      <SocialLink
        faIcon={faLinkedinIn}
        link={socialLinks.linkedIn}
        className={transitionClass}
      />
      <div className={appendStyles(styles.socialEmail, transitionClass)}>
        <FontAwesomeIcon
          icon={faEnvelope}
          size="2x"
          className={styles.emailIcon}
          onClick={() => setEmailIsOpen(!emailIsOpen)}
          onMouseEnter={() => {
            clearTimeout(hoverTimout);
            setEmailIsOpen(true);
          }}
          onMouseLeave={() => {
            handleClosePopup(hoverTimout);
          }}
        />
        <Popup
          isOpen={emailIsOpen}
          hoverTimout={hoverTimout}
          handleSetTimout={handleClosePopup}
        >
          <div
            className={appendStyles(styles.emailLink)}
            onClick={() => window.open(`mailto: ${socialLinks.email}`)}
          >
            {socialLinks.email + " "}
            <FontAwesomeIcon
              //   className={themeClass}
              size="sm"
              icon={faPaperPlane}
            />
          </div>
          <FontAwesomeIcon
            icon={faCopy}
            className={styles.copyClipboard}
            onClick={() => handleCopy(socialLinks.email)}
          />
        </Popup>
      </div>
    </div>
  );
};
