import "./App.css";
import projects from "./assets/data/projects";
import "./styles/variables.css";
import Layout from "./layout/MainLayout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Router, Route, useNavigate } from "./lib/router/Router";
import { useThemeContext } from "./context/ThemeContext/Theme";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const { setIsDark } = useThemeContext();

  const offsetSegments = 500;
  const projectScrollHeight = offsetSegments * projects.length + 1;
  const aboutScrollHeight = offsetSegments * 4;
  const [layoutHeight, setHeight] = useState(projectScrollHeight);

  const navLinks = [
    {
      title: "Home",
      linkHandler: () => {
        setIsDark(false);
        navigate("/");
        window.scrollTo(0, 0);
        if (projectScrollHeight !== layoutHeight)
          setHeight(projectScrollHeight);
      },
    },
    {
      title: "Projects",
      linkHandler: () => {
        navigate("/");
        window.scrollTo(0, offsetSegments + 50);
        if (projectScrollHeight !== layoutHeight)
          setHeight(projectScrollHeight);
      },
    },
    {
      title: "About",
      linkHandler: () => {
        navigate("/about");
        window.scrollTo(0, 0);
        setHeight(aboutScrollHeight);
      },
    },
  ];

  return (
    <div>
      <Router>
        <Layout
          containerHeight={layoutHeight}
          navLinks={navLinks}
          isCyclingText={window.scrollY < offsetSegments}
        >
          <Route
            to="/"
            component={
              <Home slides={projects} offsetSegments={offsetSegments} />
            }
          />
          <Route
            to="/about"
            component={<About offsetSegments={offsetSegments} />}
          />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
