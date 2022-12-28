import { pitchapp, koana, portfolio, paperback } from "../img/projects";

// const readMes = [{title: "koana", badges:}]

const projects = [
  {
    title: "Koana",
    badges: [
      "ReactJS",
      "TypeScript",
      "Express",
      "SquarePaymentAPI",
      "CSSModules",
    ],
    content: "my video",
    imgs: koana,
    github: null,
    url: "https://www.alohakoana.com/",
  },
  {
    title: "PaperBack",
    badges: [
      "ReactJS",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "ReactStrap",
      "Firebase",
      "PassportJS",
      "Axios",
      "SCSSModules",
      "JSONWEBTOKENS",
    ],
    content: "my video",
    imgs: paperback,
    github: "https://github.com/lewis-j/Paper-back-pals-front-end",
    url: "https://www.paperbackpals.app/",
  },
  {
    title: "pitchApp",
    badges: [
      "Javascript",
      "Jquery",
      "Bootstrap",
      "PHP",
      "MySql",
      "AJAX",
      "DOM",
    ],
    content: "my video",
    imgs: pitchapp,
    github: "https://github.com/lewis-j/pitchApp",
    url: "https://www.lindseyljackson.com/Sites/PitchApp/",
  },
  {
    title: "Porfolio",
    badges: ["ReactJS"],
    content: "my video",
    imgs: portfolio,
    github: "https://github.com/lewis-j/Portfolio",
    url: "https://lindseyjackson.onrender.com",
  },
  {
    title: "3D quizletto",
    content: "my video",
    badges: [],
    imgs: koana,
    github: null,
    url: "https://lindseyjackson.onrender.com",
  },
];

export default projects;
