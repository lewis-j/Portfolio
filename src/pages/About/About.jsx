import React, { useEffect } from "react";
import { appendStyles } from "../../util";
import styles from "./About.module.css";
import aboutPic from "../../assets/img/about_pic.png";
import { useThemeContext } from "../../context/ThemeContext/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faMapLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  skillsList,
  frameworksAndLibraries,
  aboutMe,
} from "../../assets/data/aboutContent";
import useScroll from "../../hooks/useScroll";
import { DescriptionList, Tabs } from "../../components";

const About = ({ offsetSegments }) => {
  const { setIsDark } = useThemeContext();

  const { setScrollPosition, slide, isIncrementing } = useScroll(
    4,
    offsetSegments
  );

  useEffect(() => {
    setIsDark(true);
  }, []);

  const handleDownload = async () => {
    try {
      const response = await fetch("Lindsey_Jackson_Resume.pdf");
      const blob = await response.blob();
      const fileUrl = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileUrl;
      alink.download = "Lindsey_Jackson_Resume.pdf";
      alink.click();
    } catch (error) {
      console.log(error);
    }
  };

  const renderSlides = (...slides) => {
    console.log("slide", slide);
    return slides.map((item, idx) => {
      //https://stackoverflow.com/questions/10247255/css-transition-between-left-right-and-top-bottom-positions
      const style = {
        left: "0",
        transform: "translateX(0)",
        zIndex: 100,
      };
      if (slide === idx) style.zIndex = 112;
      if (slide + 1 === idx) style.zIndex = 110;

      if (!isIncrementing) {
        if (slide === idx) style.zIndex = 110;
        if (slide + 1 === idx) style.zIndex = 112;
        if (slide + 2 === idx) style.zIndex = 111;
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
    <div className={appendStyles(styles.aboutMe, styles.boxSection)}>
      <h2 className={styles.title}>Who am I</h2>
      <div className={styles.aboutContent}>{aboutMe}</div>
    </div>
  );

  const ListItems = ({ title, list, className }) => (
    <div className={className}>
      <h2 className={styles.title}>{title}</h2>
      <ul>
        {list.map((item, idx) => (
          <li className={styles.item} key={Math.random() * idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const Contact = () => (
    <div className={appendStyles(styles.contact, styles.boxSection)}>
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.contactItem}>
        <DescriptionList icon={faUser} title="Name" data="Lindsey Jackson" />
        <DescriptionList
          icon={faMapLocationDot}
          title="Location"
          data="Sonoma County, California"
        />
        <DescriptionList
          icon={faEnvelope}
          title="Email"
          data="LindseyLewisJackson@gmail.com"
        />
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.slidingSections}>
        {renderSlides(
          <AboutImg />,
          <AboutMe />,
          <ListItems
            title="PROMINENT SKILLS"
            list={skillsList}
            className={appendStyles(styles.skills, styles.boxSection)}
          />,
          <ListItems
            title="Frameworks and Libraries"
            list={frameworksAndLibraries.map((item) => item.join(", "))}
            className={appendStyles(
              styles.frameworksAndLibraries,
              styles.boxSection
            )}
          />,
          <Contact />
        )}
      </div>
      <div className={styles.resume} onClick={() => handleDownload()}>
        <FontAwesomeIcon icon={faDownload} />
        <h4>Resume</h4>
      </div>
      <Tabs
        list={["About me", "Skills", "Technologies", "Contact"]}
        current={slide}
        handleActive={setScrollPosition}
      />
    </div>
  );
};

export default About;
