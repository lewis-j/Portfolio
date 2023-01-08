import React, { useEffect } from "react";
import { appendStyles, downloadFile } from "../../util";
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
import OverlaySlideCards from "../../components/OverlaySlideCards/OverlaySlideCards";

const About = ({ offsetSegments }) => {
  const { setIsDark } = useThemeContext();

  const { setScrollPosition, slide, isIncrementing } = useScroll(
    4,
    offsetSegments
  );

  useEffect(() => {
    setIsDark(true);
  }, []);

  const handleDownload = () => downloadFile("Lindsey_Jackson_Resume.pdf");

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

  const slides = [
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
      className={appendStyles(styles.frameworksAndLibraries, styles.boxSection)}
    />,
    <Contact />,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <OverlaySlideCards
        slides={slides}
        slide={slide}
        isIncrementing={isIncrementing}
        className={styles.expand}
      />
      <div className={styles.resume} onClick={() => handleDownload()}>
        <FontAwesomeIcon icon={faDownload} />
        <h4>Resume</h4>
      </div>
      <Tabs
        list={["About", "Skills", "Tech", "Contact"]}
        current={slide}
        handleActive={setScrollPosition}
      />
    </div>
  );
};

export default About;
