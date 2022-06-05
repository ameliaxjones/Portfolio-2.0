import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DateTime from "./components/Time";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <div class="nav-icon-border">
        <div class="icon">
          <img src="assets/home.png" alt="90's computer image" />
          <Link to="/"> Home</Link>{" "}
        </div>
        <div class="icon">
          <img src="assets/about.png" alt="simley face image" />
          <Link to="/about"> About</Link>{" "}
        </div>
        <div class="icon">
          <img src="assets/projects.png" alt="floppy disk image" />
          <Link to="/projects"> Projects</Link>
        </div>
        <div class="icon">
          <img src="assets/contact.png" alt="envelope image" />
          <Link to="/contacts"> Contact</Link>{" "}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div id="time">
        <DateTime />
      </div>
      <div className="footer">
        <img src="assets/footer.png" alt="footer" />
      </div>
      <div className="footer-right"></div>
    </Router>
  );
}

export default App;
