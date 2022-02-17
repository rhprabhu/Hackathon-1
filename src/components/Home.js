import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="header">
          <img
            className="header_img"
            src={process.env.PUBLIC_URL + "/images/Rectangle 1.svg"}
          />
          <img
            className="tictactoe_img"
            src={process.env.PUBLIC_URL + "/images/tic-tac-toe 1.svg"}
          />
          <img
            className="xoxo_img"
            src={process.env.PUBLIC_URL + "/images/XOXO.svg"}
          />
        </div>

        <div className="section">
          <img src="images/Group 8.png" className="bg_color" />
         
          <img
            className="galaxy2_img"
            src={process.env.PUBLIC_URL + "/images/galaxy 2.svg"}
          />
          <img
            className="galaxy1_img"
            src={process.env.PUBLIC_URL + "/images/galaxy 1.svg"}
          />
        </div>
      </>
    );
  }
}
