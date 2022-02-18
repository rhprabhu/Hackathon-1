import React from "react";
import "./PlayerDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Game from "./Game";

function PlayerDetails() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState({});
  const [secondNameErr, setSecondNameErr] = useState({});
  const navigate = useNavigate();
  const goback = () => {
    window.location.href = "./";
  };

  const mystyle = {
    color: "red",
    marginLeft: "45px",
    marginTop: "15px",
  };

  const mystyle_1 = {
    color: "red",
    marginLeft: "45px",
     marginTop: "15px",
  };
  const Go = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid === true) {
      navigate("/game", {
        state: { firstName: firstName, secondname: secondName },
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
  };

  const formValidation = () => {
    const firstNameErr = {};
    const secondNameErr = {};
    let isValid = true;

    if (firstName.trim().length < 1) {
      firstNameErr.firstNameShort = "Please Enter the name of Player 1";
      isValid = false;
    }

    if (secondName.trim().length < 1) {
      secondNameErr.secondNameShort = "Please Enter the name of Player 2";
      isValid = false;
    }
    setFirstNameErr(firstNameErr);
    setSecondNameErr(secondNameErr);
    return isValid;
  };
  return (
    <div className="form" onSubmit={onSubmit}>
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
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="text-line"
        placeholder="Name"
      />
      <span className="ply1">Player 1</span>
      {Object.keys(firstNameErr).map((key) => {
        return <div style={mystyle}>{firstNameErr[key]}</div>;
      })}
      <span className="ply2">Player 2</span>
      <input
        type="text"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
        className="txt-line"
        placeholder="Name"
      />
      {Object.keys(secondNameErr).map((key) => {
        return <div style={mystyle_1}>{secondNameErr[key]}</div>;
      })}
      <button className="btn-go" onClick={Go}>
        Go
      </button>
    </div>
  );
}

export default PlayerDetails;
