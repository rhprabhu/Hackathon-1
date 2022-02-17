import React from 'react'
import "./Result.css";

function Result() {
  return (
    <div className="form">
      <img
        className="speaker"
        src={process.env.PUBLIC_URL + "/images/advertising 1.svg"}
      />
      <div className="form1">
        <img
          className="win"
          src={process.env.PUBLIC_URL + "/images/win1.svg"}
        />
      </div>
      <div class="rectangle">
        <span className="level">Level1</span>
        <span className="player">Player1</span>
      </div>
      <div class="rectangle1"></div>
        <button className="play-btn">Play again</button>
    </div>
  );
}

export default Result
