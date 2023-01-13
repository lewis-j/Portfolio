import { imageWithTheme } from "../../../../util";
import home from "./home.png";
import projects from "./projects.png";
import readMe from "./readMe.png";
import readMeExpand from "./readMeExpand.png";
import about from "./about.png";
import projectsMobile from "./projectsMobile.png";
import aboutMobile from "./aboutMobile.png";

const images = [
  home,
  projects,
  readMe,
  readMeExpand,
  about,
  projectsMobile,
  aboutMobile,
];
const imgs = imageWithTheme(images, [home, readMeExpand]);

export default imgs;
