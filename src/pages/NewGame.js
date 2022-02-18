import React from "react";
import "./NewGame.css";
import { useNavigate } from 'react-router-dom';
function NewGame() {
  const navigate = useNavigate();

  return (
    <div className="form">
      <img
        className="speaker" src={process.env.PUBLIC_URL + "/images/advertising 1.svg"}
      />
      <img className="img1" src={process.env.PUBLIC_URL + "/images/crush 1.svg"} />
      <button className="game-btn" onClick={()=>navigate('/details')}>New Game</button>
      <button className="multi-btn">Multi Payer</button>
      <button className="set-btn">Settings</button>
    </div>
  );
}


export default NewGame;
