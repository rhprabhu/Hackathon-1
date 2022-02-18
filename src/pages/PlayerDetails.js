import React from "react";
import style from "./PlayerDetails.module.css";
import { useNavigate } from 'react-router-dom';

function PlayerDetails() {
  //using navigate to redirect the page and setting path
  const navigate = useNavigate();
  return (
    <div className={style.form}>
      <img
        className={style.speaker}
        src={process.env.PUBLIC_URL + "/images/advertising 1.svg"}
      />
      <img
        className={style.vector}
        onClick={() => navigate("/")}
        src={process.env.PUBLIC_URL + "/images/vector.svg"}
      />
      <h1 className={style.heading}>Player Details</h1>
      <input type="text" className={style.textline} placeholder="Name" />
      <span className={style.ply1}>Player 1</span>
      <span className={style.ply2}>Player 2</span>
      <input type="text" className={style.textline1} placeholder="Name" />
      <button className={style.btngo} onClick={() => navigate("/game")}>
        Go
      </button>
    </div>
  );
}

export default PlayerDetails;
