import React, { useState } from "react";
import Draggable from "react-draggable";
import "../About.css";

const Toggle = () => {
  return (
    <div>
      <div>
        <Draggable cancel=".cancel">
          <div id="contentbox">
            <div id="content">
              <div className=" cancel scrollable-div-about">
                <img id="about-me" src="assets/desksmall.png" />
                <p>
                  I'm Amelia I am a junior web developer currently living in
                  Brisbane, Australia. I have always enjoyed creating things
                  from hacking together my myspace page, to drawing and
                  painting.{" "}
                </p>
                <p>
                  {" "}
                  I am a well-organised person, a problem solver with high
                  attention to detail who is always up for a challenge. On my
                  days off I enjoy art, messing around with Unity, hanging out
                  with my dog Leeroy and playing video games.
                  <div id="bottom-border">---</div>
                  <div id="video-game">
                    <p>Video game of the month: V Rising. </p>
                    <p>
                      If you like survival games with the added bonus of being a
                      vampire, building your own castle then definitely check
                      this game out!
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Toggle;
