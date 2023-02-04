import React from "react";
import "./AboutAuthor.css";

function AboutAuthor() {
  return (
    <>
      <h2 className="headers">About the Author</h2>
      <img
        src="./Images/DH.jpg"
        alt="Author - David Hewitson"
        id="author-image"
        className="pictures"
      ></img>
      <p className="paragraphs" id="about-author-p">
        David Hewitson is the author of the Mine Grinder series. Born in Utah,
        USA, David had an appreciation for the horror and thriller genres of
        movies and other media. He was inspired to write this book once all the
        ideas of the Grinder came together in 2022.
        <br></br>
        <br></br>* Any other content you want to include will be here.
        <br></br>
        <br></br>
      </p>
    </>
  );
}

export default AboutAuthor;
