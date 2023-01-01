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

const About = ({ animationTime = 600 }) => {
  const { setIsDark } = useThemeContext();
  const [isDownLoading, setIsDownLoading] = useState(false);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    // document.body.style.overflow = "hidden";
    // setIsDark(true);
    // return () => {
    //   document.body.style.overflow = "visible";
    // };
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

  const renderSlides = (slides) => {
    return slides.map((item, idx) => {
      //https://stackoverflow.com/questions/10247255/css-transition-between-left-right-and-top-bottom-positions
      const style = { left: "0", transform: "translateX(0)" };
      if (slide < idx) {
        style.transform = "translateX(-100%)";
        style.left = "100%";
      }
      return (
        <section
          className={styles.section}
          key={idx + item}
          style={style}
          onClick={() => setSlide((prev) => prev + 1)}
        >
          {item}
        </section>
      );
    });
  };

  const joinedFrameWorksAndLibraries = frameworksAndLibraries.map(
    (itemSet, i) =>
      itemSet.map((item, j) => <div key={`${item} ${i}${j}`}>{item}</div>)
  );
  const slides = ["picture", "About", "skills"];

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.slidingSections}>{renderSlides(slides)}</div>
    </div>
  );
};

export default About;
