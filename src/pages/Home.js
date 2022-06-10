import React from "react";
import Draggable from "react-draggable";
import "../Home.css";

function Home() {
  return (
    <div>
      <div id="icons"></div>
      <Draggable>
        <div id="border-me">
          <div id="hello"></div>
          <p id="hi">
            Hi! <br></br>
            I'm Amelia, <br></br>A Jr Web Developer.{" "}
          </p>
        </div>
      </Draggable>
      <Draggable>
        <div id="link-border">
          <div className="icons">
            <img id="linkedin" src="assets/linkedin.png" />
            <img id="github" src="assets/github.png" />
            <img id="github" src="assets/resumeicon.png" />
          </div>
          <div id="links">
            <a
              href="https://www.linkedin.com/in/amelia-jones-84589846/"
              
            >
              LinkedIn
            </a>

            <a href="https://github.com/ameliaxjones" target="_blank">
              Github
            </a>

            <a
              href="/assets/Amelia _Jones _Tech_Resume.pdf"
              target="_blank"
            >
              Resume
            </a>
           
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Home;
