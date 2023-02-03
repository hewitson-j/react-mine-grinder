import React from "react";
import "./AnimationButton.css";

function AnimationButton() {
  return (
    //     <div id="animation-pause">
    //     <label id="timer-label">Time to lights out:</label>
    //     <br>
    //     <a id="minutes">05</a>:<a id="seconds">00</a>
    //     <br>
    //     <input type="button" id="stop-button" value="Prevent Animation">
    // </div>

    <div id="animation-pause">
      <label>Time to lights out:</label>
      <br></br>
      <a id="minutes">05</a>:<a id="seconds">00</a>
      <br></br>
      <input type="button" id="stop-button" value="Prevent Animation"></input>
    </div>
  );
}

export default AnimationButton;
