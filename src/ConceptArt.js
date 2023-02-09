import React from "react";
import "./ConceptArt.css";
import Row from "./Row";

function ConceptArt() {
  return (
    <>
      <h2 className="headers">Concept Art</h2>
      <Row
        path1={"Images/AdlP.jpg"}
        alt1={"Abismo de la Plata"}
        text1={"Abismo de la Plata"}
        path2={"Images/GhostTown.jpg"}
        alt2={"Abismo de la Plata Town"}
        text2={"Abismo de la Plata Town"}
      />
      <Row
        path1={"Images/MG2.jpg"}
        alt1={"Mine Grinder"}
        text1={"The Mine Grinder"}
        path2={"Images/Shack.jpg"}
        alt2={"Abandoned Shack"}
        text2={"Small Shack where a shady figure lies..."}
      />
      <Row
        path1={"Images/Tunnel.jpg"}
        alt1={"Tunnel"}
        text1={"One of the many tunnels in the Mine"}
        path2={"Images/Tunnel2.jpg"}
        alt2={"Other Tunnel"}
        text2={"Another tunnel in the Mine"}
      />
    </>
  );
}

export default ConceptArt;
