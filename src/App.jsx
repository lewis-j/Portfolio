import "./App.css";
import projects from "./assets/data/projects";
import profile from "./assets/img/about_portrait.jpg";
import "./styles/variables.css";
import Layout from "./layout/MainLayout/Layout";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Router, Route, useNavigate } from "./lib/router/Router";

function App() {
  const navigate = useNavigate();

  const ProfileComponent = () => (
    <img
      src={profile}
      alt="Lindsey Jackson's profile"
      onClick={() => {
        navigate("/about");
      }}
    />
  );

  const offsetSegments = 300;

  return (
    <div>
      <Router>
        <Layout offsetSegments={offsetSegments}>
          <Route
            to="/"
            component={
              <Home
                slides={projects}
                offsetSegments={offsetSegments}
                ProfileComponent={ProfileComponent}
              />
            }
          />
          <Route to="/about" component={<About />} />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
