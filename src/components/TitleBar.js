import React from "react";

const TitleBar = (props) => {
  return (
    <div id="titleBar">
      <h1 id="stage">Sign Language Detection</h1>
      <h3 id="steps">Made by Avishake Adhikary</h3>
      <button id="detectButton" className="animated flash delay-3s">
        Detect
      </button>
    </div>
  );
};

export default TitleBar;
