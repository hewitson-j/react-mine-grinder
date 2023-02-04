import React from "react";
import "./Copyright.css";

function Copyright() {
  return (
    <>
      <br></br>
      <br></br>
      <hr></hr>
      <div id="copyright-and-legal">
        <br></br>
        Mine Grinder is a Copyright of David Hewitson, 2022
        <br></br>
        <a href="./public/PrivacyPolicy.html" class="policies">
          Privacy Policy (Updated 1/12/2023)
        </a>{" "}
        ||{" "}
        <a href="./public/ToS.html" class="policies">
          Terms of Service (Updated 1/12/2023)
        </a>
      </div>
    </>
  );
}

export default Copyright;
