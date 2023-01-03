import React, { useEffect, useState } from "react";
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
import useScroll from "../../hooks/useScroll";

const About = ({ offsetSegments }) => {
  const { setIsDark } = useThemeContext();
  const [isDownLoading, setIsDownLoading] = useState(false);

  const { setScrollPosition, slide, isIncrementing } = useScroll(
    4,
    offsetSegments
  );

  useEffect(() => {
    setIsDark(true);
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

  const joinedFrameWorksAndLibraries = frameworksAndLibraries.map(
    (itemSet, i) =>
      itemSet.map((item, j) => <div key={`${item} ${i}${j}`}>{item}</div>)
  );

  const renderSlides = (...slides) => {
    return slides.map((item, idx) => {
      //https://stackoverflow.com/questions/10247255/css-transition-between-left-right-and-top-bottom-positions
      const style = {
        left: "0",
        transform: "translateX(0)",
        zIndex: 100,
      };
      if (slide === idx) style.zIndex = 111;
      if (slide + 1 === idx) style.zIndex = 110;

      if (!isIncrementing) {
        if (slide === idx) style.zIndex = 110;
        if (slide + 1 === idx) style.zIndex = 111;
      }

      if (slide < idx) {
        style.transform = "translateX(-100%)";
        style.left = "100%";
      }
      return (
        <section className={`${styles.section}`} key={idx + item} style={style}>
          {item}
        </section>
      );
    });
  };

  const AboutImg = () => (
    <div className={styles.aboutImg}>
      <img src={aboutPic} alt="lindsey's portrait" />
    </div>
  );

  const AboutMe = () => (
    <div className={styles.aboutMe}>
      <h2 className={styles.title}>Who am I</h2>
      <div className={styles.aboutContent}>{aboutMe}</div>
    </div>
  );

  const Skills = () => (
    <div className={styles.skills}>
      <h2 className={styles.title}>PROMINENT SKILLS</h2>
      <ul>
        {skillsList.map((skill, idx) => (
          <li className={styles.skillsItem} key={Math.random() * idx}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );

  // const Tabs = ({}) => {

  // }

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.slidingSections}>
        {renderSlides(<AboutImg />, <AboutMe />, <Skills />)}
      </div>
    </div>
  );
};

export default About;
