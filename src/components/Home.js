import React from 'react'
import './Home.css';

function Home() {
  return (
    <div className="form">
      <img className='speaker' src={process.env.PUBLIC_URL + "/images/advertising 1.svg"} />
      <img src={process.env.PUBLIC_URL + "/images/crush 1.svg"} />
      <button className="game-btn">New Game</button>
      <button className="multi-btn">Multi Payer</button>
      <button className="set-btn">Settings</button>
    </div>
  );
}

export default Home;