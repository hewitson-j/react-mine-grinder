import React from "react";
import "./Row.css";

function Row({ path1, alt1, text1, path2, alt2, text2 }) {
  return (
    <div className="row">
      <div class="column">
        <div class="fig-and-cap">
          <img src={path1} alt={alt1} class="pictures"></img>
          <p>{text1}</p>
        </div>
      </div>
      <div class="column">
        <div class="fig-and-cap">
          <img src={path2} alt={alt2} class="pictures"></img>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  );
}

export default Row;
