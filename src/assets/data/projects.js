import {
  pitchapp,
  koana,
  portfolio,
  paperback,
  microsoft_sublist,
} from "../img/projects";

const overViews = [
  {
    title: "Koana",
    overView: [
      {
        title: "About",
        text: "Koana is an award-winning coffee shop in Hawaii that provides a variety of locally grown coffees, teas, and chocolates.",
      },
      {
        title: "Code Review",
        text: "A fellow Bootcamp alumnus, [Benny Malberg](https://www.linkedin.com/in/benjamin-malberg/), asked me to help create an updated website for Koana. I developed the server code using Express and Typescript to communicate with the square POS API. Fortunately, Square provides the [Square Node.js SDK](https://www.npmjs.com/package/square) package for communicating with their API, which I could leverage to offer online-specific items for sale. The E-commerce website has a persisted cart, implemented using cookies that hold the Square order id inside the payload of an encrypted JSON web token. I also assisted in structuring and organizing the client-side code using react conventions, which allowed our website to scale more effectively as our client requested new features.",
      },
    ],
  },
  {
    title: "PaperBack Pals",
    overView: [
      {
        title: "About",
        text: "Often we lend our books to our friends or borrow books from them, and within a short time, we completely forget about that exchange. Libraries will remind us if a book is past its due date, but we rarely assign due dates to what we lend to our friends. This app was a way to solve that issue so that people would feel more secure and thus more willing when lending out their books.",
      },

      {
        title: "How it works",
        text: "Users will first fill their library by searching for books using the google books API. The search bar within the app also renders other users in the results to allow for adding friends and building your book-sharing network. Once you assemble your network, you can browse your friend's libraries and request books to borrow. \n\nA multipart notification system will communicate back and forth to allow users to track the physical pass of their books. First, request a particular book; if accepted, the book owner must confirm the book dropoff. Following a confirmation from the borrower to ensure the book's pickup,  the status will change to checked-out, and a due date will automatically be assigned.\n\nOnce the due date is up, a notification will be sent to the user to return the book, and the multipart notification system will follow the reverse process. This system's appeal is that the uncomfortable burden of the user to remind their friend is now the application's responsibility.  ",
      },
      {
        title: "Code Review",
        text: "This web app was a personal project I developed during the full-stack Nucamp Bootcamp course. The course follows the MERN stack (MongoDB, Express, React, NodeJs), so I decided to create a social networking application using a non-structured-query language as a personal challenge to myself. In retrospect, I may have gone with MySQL or some other structured query language because of the highly relational nature of creating a social app. Still, it was part of the course, and I wanted to get more familiar with the inner working of mongoose and MongoDB.",
      },
    ],
  },
  {
    title: "Pitch Tracker",
    overView: [
      {
        title: "About",
        text: "Usually, the Media Projects department of the SRJC offers WordPress website projects from non-profit organizations to choose from to complete the web development certificate program. In the semester I was attending, they had submitted a proposal to create a web application for the first time. The SRJC baseball team needed to upgrade their pen-and-pad system of tracking pitching statistics to a more modern approach. They needed an application to save the coordinates of pitches superimposed over a graphical pitcher's zone. These coordinated, as well as strike percentages, were vital data for the baseball team. ",
      },
      {
        title: "How it works",
        text: "A user, usually a coach, or any team manager, first would need to create a roster of pitchers and opposing teams for that particular season. Then a pitch session can start, which requires the user to select a pitcher from a chosen roster and a game type; if the type is 'Game,' an opposing team will need to be chosen, as well as the game number, as there are times when two games occur on the same day. \n\n Once the game has started, the app will display the pitch data collecting interface. Clicking the pitch zone will set a coordinate on the selected area and show the vertical pitch velocity input selector. You can continue placing the coordinate at different locations until the enter button is submitted. The batter's stance, pitch velocity, and pitch type are required to submit the pitch data form. After saving the submission, the coordinate will match the color of the pitch type. Entering the form with any end-play selections will restart the pitch count and require a new batter stance to be selected. You can choose new pitchers at any point during the game using the option within the side menu. \n\nThe side menu can open the interface to upload games saved on the browser's local storage. These games will transfer to the user's MySQL database. The club's pitch data page, which uses data for analytics,  will only use game data held on the MYSQL database. The club's pitch data page provides individual pitcher statistics.",
      },
      {
        title: "Code Review",
        text: "I was the lead developer of a three-person team, including a designer and a project manager. I took the mockups from our designer and converted them into a graphical interface using HTML, CSS, Javascript, Bootstrap, and JQuery.\n\nThe graphical interface for entering pitch data uses SVG. The Coordinates save as percentages that reference the values returned by the 'document.getBoundingClientRect()' method of the pitch graphic's rectangle dimensions.\n\nThe app required a complete content management system to update baseball rosters each season, containing full CRUD operations. It also needs to store the pitch data in a relational database. The technologies we are using to achieve this are PHP and MySQL. One of the issues with saving data to a MySQL database at a baseball field is that there needs to be an available network to upload data on demand. We held the data in local storage that we could later upload to the MySQL database. We went with PouchDB to help facilitate this, as it was an easy-to-use, fully-featured solution that leveraged the power of IndexDB and had good filtering capabilities. We realized that the library also could synchronize with CouchDB, but we wanted to keep our long-term storage solutions as a structured query language. PHP and MySQL were also part of the learning curriculum for the SRJC certificate program. \n\nI used Ajax requests to send and fetch data from our apache server, which used PHP to communicate with our MySQL database. As for the local transfer to the long-term storage, using the promise syntax, I retrieve the local data returned asynchronously from the NoSQL PouchDB store and batch upload it to the apache server.",
      },
    ],
  },
  {
    title: "Portfolio",
    overView: [
      {
        title: "About",
        text: "This website is a Portfolio I created to display my most notable projects. I envisioned a fixed layout leveraging the scroll bar to move components. I wanted the users to move through the website traditionally yet still have the fixed layout components displayed nicely. A horizontal scroll would be a way to achieve this. I had the scroll run animations for a given slide based on the page offset, as I wanted to provide a more visually appealing effect than a simple scroll effect. ",
      },
      {
        title: "Code Review",
        text: "As a personal challenge to myself, I wanted to create this portfolio with the least amount of dependencies possible. I did bootstrap this project using Vite, but besides the FontAwesome ReactJS component, I did not install any additional libraries in its current iteration. Instead of using ReactSpring or FramerMotion, all the animation components use keyframes, transitions, transforms, and react state management. Instead of using React Router, I created a custom router using React's createContext to pass a custom navigate method to my components. I did this to understand better what these 3rd party libraries may be doing underneath. ",
      },
    ],
  },
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
    title: "Microsoft Sublist",
    badges: [
      "ReactJS",
      "TailwindCSS",
      "Express",
      "NodeJS",
      "MongoDB",
      "Mongoose",
    ],
    content: "my video",
    imgs: microsoft_sublist,
    github: null,
    url: "https://mtodo-utility.netlify.app/",
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
