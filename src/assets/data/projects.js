import koana from "../img/Koana.png";
import pitchapp from "../img/projects/pitchapp";

console.log(
  `%cpitch app import:`,
  "color:red; font-size:14px; font-weight:bold",
  pitchapp
);

const projects = [
  {
    title: "Koana",
    content: "my video",
    imgs: [koana],
    github: null,
    url: "https://www.alohakoana.com/",
  },
  {
    title: "PaperBack",
    content: "my video",
    imgs: [koana],
    github: "https://github.com/lewis-j/Paper-back-pals-front-end",
    url: "https://www.paperbackpals.app/",
  },
  {
    title: "pitchApp",
    content: "my video",
    imgs: pitchapp,
    github: "https://github.com/lewis-j/pitchApp",
    url: "https://www.lindseyljackson.com/Sites/PitchApp/",
  },
  {
    title: "Porfolio",
    content: "my video",
    imgs: [koana],
    github: "https://github.com/lewis-j/Portfolio",
    url: "https://lindseyjackson.onrender.com",
  },
  {
    title: "3D quizletto",
    content: "my video",
    imgs: [koana],
    github: null,
    url: "https://lindseyjackson.onrender.com",
  },
];

export default projects;
