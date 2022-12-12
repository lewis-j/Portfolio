import "./App.css";
import projects from "./assets/data/projects";
import profile from "./assets/img/about_portrait.jpg";
import "./styles/variables.css";
import Layout from "./layout/MainLayout/Layout";
import { useState } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Router, useNavigate } from "./lib/router/Router";
import { Route } from "./lib/router/Route";

function App() {
  const [slide, setSlide] = useState(-1);

  const navigate = useNavigate();

  const ProfileComponent = () => (
    <img
      src={profile}
      alt="Lindsey Jackson's profile"
      onClick={() => {
        console.log("clidked profile");
        navigate("/about");
      }}
    />
  );

  const offsetSegments = 300;

  return (
    <div>
      <Layout isLightTheme={slide === -1} offsetSegments={offsetSegments}>
        <Router>
          <Route
            to="/"
            component={
              <Home
                slide={slide}
                setSlide={setSlide}
                slides={projects}
                offsetSegments={offsetSegments}
                ProfileComponent={ProfileComponent}
              />
            }
          />
          <Route to="/about" component={<About />} />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
