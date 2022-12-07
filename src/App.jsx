import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./styles/variables.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  // const renderPage = (_page) => {
  //   switch (_page) {
  //     case "home":
  //       return <Home navigator={setPage} />;
  //     case "about":
  //       return <About navigator={setPage} />;
  //     default:
  //       return <Home navigator={setPage} />;
  //   }
  // };

  const aboutExpanded = page === "about";

  return (
    <div>
      <Home navigator={setPage} />
      {/* <About isExpanded={aboutExpanded} /> */}
    </div>
  );
}

export default App;
