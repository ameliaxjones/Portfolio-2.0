import React from "react";
import Draggable from "react-draggable";
import "../ErrorPage.css";

function ErrorPage() {
  return (
    <Draggable>
      <div id="error-border">
      <img id="error-icon" src="assets/erroricon.png" />
        <p id="txt-error">Error: Page Not Found.</p>
      </div>
    </Draggable>
    
  );
}

export default ErrorPage;
