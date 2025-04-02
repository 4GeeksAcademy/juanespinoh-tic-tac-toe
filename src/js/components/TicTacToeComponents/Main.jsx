import React, { useEffect } from "react";
import "./MainStyles.css";

import Form from "./Form";
import GameBoard from "./GameBoard";

const Main = ({
  player1,
  player2,
  setPlayer1,
  setPlayer2,
  activePlayer,
  setActivePlayer,
  setMatrix,
  matrix,
  turns,
  setTurns,
  victory,
  setVictory,
}) => {
  function checkVictory(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        //   chequeo diagonal
        if (arr[1][1] !== "") {
          if (arr[1][1] === arr[0][0] && arr[1][1] === arr[2][2]) {
            return true;
          }
          if (arr[1][1] === arr[0][2] && arr[1][1] === arr[2][0]) {
            return true;
          }
        }
        // chequeo horizontal

        if (arr[i][0] !== "" && arr[i][1] !== "" && arr[i][2] !== "") {
          if (arr[i][0] === arr[i][1] && arr[i][0] === arr[i][2]) {
            return true;
          }
        }
        // chequeo vertical

        if (arr[1][1] !== "" || arr[1][0] !== "" || arr[1][2] !== "") {
          if (
            arr[1][j] === arr[2][j] &&
            arr[1][j] === arr[0][j] &&
            arr[0][j] !== "" &&
            arr[1][j] !== "" &&
            arr[2][j] !== ""
          ) {
            return true;
          }
        }
      }
    }

    return false;
  }
  useEffect(() => {
    if (turns >= 5) {
      console.log(activePlayer)
      setVictory(checkVictory(matrix));
      console.log(activePlayer)
    }
  }, [turns]);

  return (
    <div className="mainBody  d-flex justify-content-center align-items-center flex-column">
      <h1>TicTacToe in React.js</h1>
      <h3>Its X turn</h3>
      <div className="mainGame">
        {player1.name === "" ||
        player2.name === "" ||
        player1.character === "" ||
        player2.character === "" ? (
          <Form
            setPlayer1={setPlayer1}
            setPlayer2={setPlayer2}
            player1={player1}
            player2={player2}
            setActivePlayer={setActivePlayer}
          />
        ) : victory ? (
          `Victoria del jugador ${activePlayer.character}`
        ) : (
          <GameBoard
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            player1={player1}
            player2={player2}
            setMatrix={setMatrix}
            setTurns={setTurns}
            setVictory={setVictory}
            victory={victory}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
