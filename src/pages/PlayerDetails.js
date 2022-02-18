import React from "react";
import "./PlayerDetails.css";
import { useState } from "react";

function PlayerDetails() {
    const [name,setName]=useState("")
  const goback = () => {
    window.location.href = "./";
  };

  const Go = () => {
    window.location.href = "./game";
  };

  return (
    <div className="form">
      <img
        className="speaker"
        src={process.env.PUBLIC_URL + "/images/advertising 1.svg"}
      />
      <img
        className="vector"
        onClick={goback}
        src={process.env.PUBLIC_URL + "/images/vector.svg"}
      />
      <h1 className="heading">Player Details</h1>
      <input type="text" className="text-line" />
      <span className="ply1">Player 1</span>
      <h2 className="name1">Name</h2>
      <span className="ply2">Player 2</span>
      <input type="text" className="text-line_1" />
      <h2 className="name2">Name</h2>
      <button className="btn-go" onClick={Go}>
        Go
      </button>
    </div>
  );
}

export default PlayerDetails;
