import React from "react";
import Draggable from "react-draggable";
import "../About.css";

const Toggle = () => {
  const [show, toggleShow] = React.useState(true);

  return (
    <div>
      <button onClick={() => toggleShow(!show)}>
        toggle: {show ? "show" : "hide"}
      </button>
      {show && (
        <div>
          <Draggable>
            <div id="contentbox">
              <div id="content">
              <img id="about-me" src="assets/desksmall.png" />
                <p>
                  I'm Amelia I am a junior web developer currently living in
                  Brisbane, Australia. I have always enjoyed creating things
                  from hacking together my personal myspace page to drawing and
                  painting. I am a well-organised person, a problem solver with
                  high attention to detail who is always up for a challange. On
                  my days off I enjoy art, messing around with Unity, hanging out with my dog Leeroy and playing video games.
                </p>
                <div id="video-game">Video game of the month: V rising</div>
              </div>
            </div>
          </Draggable>
        </div>
      )}
    </div>
  );
};

export default Toggle;
