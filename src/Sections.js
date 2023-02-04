import React from "react";
import "./Sections.css";

function Sections({ header, text }) {
  return (
    <>
      <h2 className="headers">{header}</h2>
      <p className="paragraphs">{text}</p>
    </>
  );
}

export default Sections;
