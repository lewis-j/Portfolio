import React, { useEffect, useRef, useState } from "react";
import { appendStyles } from "../../util";
import styles from "./About.module.css";
import aboutPic from "../../assets/img/about_pic.png";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  skillsList,
  frameworksAndLibraries,
  aboutMe,
} from "../../assets/data/aboutContent";

const About = ({ animationTime = 500 }) => {
  const { setIsDark } = useThemeContext();
  const [isDownLoading, setIsDownLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setIsDark(true);
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleDownload = async () => {
    try {
      setIsDownLoading(true);
      const response = await fetch("Lindsey_Jackson_Resume.pdf");
      const blob = await response.blob();
      const fileUrl = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileUrl;
      alink.download = "Lindsey_Jackson_Resume.pdf";
      alink.click();
    } catch (error) {
      console.log(error);
    } finally {
      setIsDownLoading(false);
    }
  };

  const renderList = (list) => {
    return list.map((item) => {
      return (
        <div key={item} className={styles.listitem}>
          {item}
        </div>
      );
    });
  };

  const joinedFrameWorksAndLibraries = frameworksAndLibraries.map(
    (itemSet, i) =>
      itemSet.map((item, j) => <div key={`${item} ${i}${j}`}>{item}</div>)
  );

  return (
    <div className={appendStyles(styles.wrapper)}>
      <div
        className={appendStyles(styles.container, styles.spaceBackground)}
        style={{ animationDuration: `${animationTime}ms` }}
      >
        <div className={styles.about}>
          <div
            className={styles.aboutImg}
            style={{
              animationDuration: `${animationTime / 2}ms`,
              animationDelay: `${animationTime * 0.75}ms`,
            }}
          >
            <img src={aboutPic} alt="lindsey's portrait" />
          </div>
          <div
            className={styles.content}
            style={{
              animationDuration: `${animationTime / 2}ms`,
              animationDelay: `${animationTime}ms`,
            }}
          >
            <div className={styles.section}>
              <h3 className={styles.title}>Who am I?</h3>
              <div className={styles.aboutMe}>{aboutMe}</div>
            </div>
            <div className={styles.section}>
              <h3 className={styles.title}>Prominent skills</h3>
              <div className={styles.list}>{renderList(skillsList)}</div>
            </div>
            <div className={styles.section}>
              <h3 className={styles.title}>Frameworks/Libraries</h3>
              <div className={styles.list}>
                {renderList(joinedFrameWorksAndLibraries)}
              </div>
            </div>
            <div className={styles.resume} onClick={handleDownload}>
              <span>Download Resume</span>
              {isDownLoading ? (
                <FontAwesomeIcon spin icon={faSpinner} />
              ) : (
                <FontAwesomeIcon icon={faDownload} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
