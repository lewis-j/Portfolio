import React, { useEffect, useState } from "react";
import { appendStyles } from "../../util";
import styles from "./About.module.css";
import aboutPic from "../../assets/img/about_pic.png";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { skillsList } from "../../assets/data/aboutContent";

const About = () => {
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
    console.log("Downloading File");

    try {
      setIsDownLoading(true);
      console.log("isDownloaing");
      const response = await fetch(
        "Lindsey_Jackson_Resume_20-11-2022-15-14-24.pdf"
      );
      const blob = await response.blob();
      const fileUrl = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileUrl;
      alink.download = "Lindsey_Jackson_Resume_20-11-2022-15-14-24.pdf";
      // alink.click();
    } catch (error) {
      console.log(error);
    } finally {
      console.log("doneDownloading");
      setIsDownLoading(false);
    }
  };

  const renderSkillsList = (list) => {
    return list.map((skill) => {
      return (
        <div key={skill} className={styles.skill}>
          {skill}
        </div>
      );
    });
  };

  return (
    <div className={appendStyles(styles.wrapper)}>
      <div className={appendStyles(styles.container, styles.spaceBackground)}>
        <div className={styles.about}>
          <div className={styles.aboutImg}>
            <img src={aboutPic} alt="lindsey's portrait" />
          </div>
          <div className={styles.content}>
            <div className={styles.skills}>
              <h2 className={styles.title}>Prominent skills</h2>
              <div className={styles.skillList}>
                {renderSkillsList(skillsList)}
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
