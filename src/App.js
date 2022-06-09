import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DateTime from "./components/Time";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Toggle from "./components/Toggle";
import ToggleProjects from "./components/ToggleProjects";
import React, { useState } from "react";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState({
    about: false,
    projects: false,
  });

  function toggleAbout() {
    setTheme({
      about: !theme.about,
    });
  }

  function toggleProjects() {
    setTheme({
      projects: !theme.projects,
    });
  }

  return (
    <Router>
      <div class="nav-icon-border">
        <img id="nav-img" src="assets/home.png" alt="90's computer image" />
        <Link to="/"> Home</Link>

        <img
          id="nav-img"
          src="assets/about.png"
          alt="smiley face image"
          onClick={toggleAbout}
        />

        <a onClick={toggleAbout}>About</a>

        <img
          id="nav-img"
          src="assets/projects.png"
          alt="floppy disk image"
          onClick={toggleProjects}
        />
       
        <a onClick={toggleProjects}>Projects</a>

        <img id="nav-img" src="assets/contact.png" alt="envelope image" />
        <Link
          to="/"
          onClick={() => (window.location = "mailto:amelia92@hey.com")}
        >
          Contact
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div id="time">
        <DateTime />
      </div>
      <div className="footer">
        <img src="assets/footer2.png" alt="footer" />
      </div>
      <div className="footer-right"></div>
      {theme.about ? <Toggle /> : ""}
      {theme.projects ? <ToggleProjects /> : ""}
    </Router>
  );
}

export default App;
