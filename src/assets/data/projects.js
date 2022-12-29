import { pitchapp, koana, portfolio, paperback } from "../img/projects";

const overViews = [
  {
    title: "Koana",
    overView:
      "Koana is an award-winning coffee shop in Hawaii that provides a variety of locally grown coffees, teas, and chocolates. A fellow Bootcamp alumnus, [Benny Malberg](https://www.linkedin.com/in/benjamin-malberg/), asked me to help create an updated website for Koana. I developed the server code using Express and Typescript to communicate with the square POS API. Fortunately, Square provides a node package for communicating with their API, which I could leverage to offer online-specific items for sale. I created a persisted cart using the square '/orders' endpoints. I also helped to structure and organize the client-side code using react convention, which would help our website to scale more effectively as our client requested new features.",
  },
  { title: "PaperBack Pals", overView: "test" },
  { title: "Pitch Tracker", overView: "test" },
  { title: "Portfolio", overView: "test" },
  // { title: "3D quiz", overView: "test" },
];

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
    title: "PaperBack Pals",
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
    title: "Pitch Tracker",
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
    title: "Portfolio",
    badges: ["ReactJS"],
    content: "my video",
    imgs: portfolio,
    github: "https://github.com/lewis-j/Portfolio",
    url: "https://lindseyjackson.onrender.com",
  },
  {
    title: "3D quiz",
    content: "my video",
    badges: [],
    imgs: koana,
    github: null,
    url: "https://lindseyjackson.onrender.com",
  },
];

const _projects = projects.map((project) => {
  const result = overViews.find(({ title }) => project.title === title);
  if (result?.overView) {
    return { ...project, overView: result.overView };
  }
  return project;
});
console.log(
  `%cprojects:`,
  "color:green; font-size:14px; font-weight:bold",
  _projects
);

export default _projects;
