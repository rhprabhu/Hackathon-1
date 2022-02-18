import React, { useState } from 'react'
import "./Result.css";
import { useNavigate } from 'react-router-dom'

function Result() {
  const names = [
    {
      level: "1",
      winner: "niraj",
    },
    {
      level: "2",
      winner: "sachin",
    },
    {
      level: "3",
      winner: "niraj",
    },
    {
      level: "4",
      winner: "sachin",
    },
    {
      level: "5",
      winner: "niraj",
    },
  ];

  const [players, setPlayers] = useState(names);

  names.map((name) => {<li key={name.level}>{name.name}</li>;})
  console.log(names);

//   const onHandle = () => {
//   names.map((name) => {
//     <li key={name.level}>{name.name}</li>;
//   });
// }
  const navigate = useNavigate();
  return (
    <div className="form">
      <img className="speaker" src={process.env.PUBLIC_URL + "/images/advertising 1.svg"}
      />
      <div className="form1">
        <img className="win" src={process.env.PUBLIC_URL + "/images/win1.svg"}
        />
      </div>
{players.map((name) =>(
    <>  <div className="rectangle">
          <span className="level">{name.level}</span>
            <span className="player">{name.winner}</span> </div></>
         )) }

     
      <button className="play-btn" onClick={()=>navigate('/')}>Play again</button>
    </div>
  );
}

export default Result
