import React, { useState } from "react";
import style from "./Game.module.css";
import { GrClose } from "react-icons/gr";
import { BsCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
let result = [];
const Game = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const [level, setLevel] = useState(1);
  const [users, setUsers] = useState({
    firstPlayer: "niraj",
    secondPlayer: "sachin",
  });
  const navigate = useNavigate();

  let squares = [...cells];
  const [count, setcount] = useState(0);

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          // do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }

    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }
    setcount((prev) => prev + 1);
    checkForWinner(squares);
    setCells(squares);
  };

  const handleNext = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
    setTurn("x");
    setcount(0);
    if (level !== 5) {
      setLevel((prev) => prev + 1);
      result = [
        ...result,
        {
          level: level,
          winner:
            winner && count !== 10
              ? winner == "x"
                ? users.firstPlayer
                : users.secondPlayer
              : "draw",
        },
      ];
      console.log(count);
      setcount(0);
    } else {
      setLevel((prev) => prev + 1);
      result = [
        ...result,
        {
          level: level,
          winner:
            winner && count !== 10
              ? winner == "x"
                ? users.firstPlayer
                : users.secondPlayer
              : "draw",
        },
      ];
      console.log(count);
      setcount(0);
      navigate("/result", { state: result });
    }

    console.log(result);
  };
  const handleEnd = () => {
    handleNext();
    navigate("/result", { state: result });
  };

  const Cell = ({ num }) => {
    return (
      <td className={style.td} onClick={() => handleClick(num)}>
        {cells[num] === "x" ? (
          <GrClose className={style.X} />
        ) : cells[num] === "o" ? (
          <BsCircle className={style.O} />
        ) : (
          ""
        )}
      </td>
    );
  };
  //console.log(squares);
  //console.log(count);
  return (
    <div class={style.main}>
      <div className={style.gameHeading}>
        <span>Level {level}</span>
        <button
          className={style.handleButton}
          onClick={handleNext}
          disabled={!winner && count !== 9}
        >
          NEXT
        </button>
        <button className={style.handleButton} onClick={handleEnd}>
          END
        </button>
      </div>
      <div className={style.playersInfo}>
        <button className={style.XButtton}>
          {users.firstPlayer}
          <GrClose className={style.playIcons} />
        </button>
        <button className={style.OButtton}>
          {users.secondPlayer}
          <BsCircle className={style.playIcons} />
        </button>
      </div>
      <div className={style.container}>
        <table className={style.table}>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
        {winner && (
          <div className={style.winnerContent}>
            <p>
              {winner == "x" ? users.firstPlayer : users.secondPlayer} is the
              winner!
            </p>
          </div>
        )}
        {!winner && count === 9 ? (
          <div className={style.winnerContent}>
            <p>match Drawn</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Game;
