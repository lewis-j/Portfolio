import "./App.css";
import projects from "./assets/data/projects";
import "./styles/variables.css";
import Layout from "./layout/MainLayout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Router, Route } from "./lib/router/Router";

function App() {
  const offsetSegments = 300;

  return (
    <div>
      <Router>
        <Layout offsetSegments={offsetSegments}>
          <Route
            to="/"
            component={
              <Home slides={projects} offsetSegments={offsetSegments} />
            }
          />
          <Route to="/about" component={<About />} />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
