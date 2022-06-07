import React from "react";
import Draggable from "react-draggable";
import "../Projects.css";

const ToggleProjects = () => {
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
                  <h2>Projects</h2>
                <p>
                  E
                </p>
              </div>
            </div>
          </Draggable>
        </div>
      )}
    </div>
  );
};

export default ToggleProjects;
