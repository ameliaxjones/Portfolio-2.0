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
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/contacts"> Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div id="time"><DateTime/></div>
      <div className="footer">
        <img src="assets/footer.png" alt="footer" />
      </div>
      <div className="footer-right"></div>
    </Router>
  );
}

export default App;
