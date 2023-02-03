import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <ul id="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-author">About the Author</a>
        </li>
        <li>
          <a href="#art">Concept Art</a>
        </li>
        <li>
          <a href="#buy-book">Reviews and Purchase</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
