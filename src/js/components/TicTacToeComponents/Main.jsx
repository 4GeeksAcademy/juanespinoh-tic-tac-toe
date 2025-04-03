import React, { useEffect } from "react";
import "./MainStyles.css";

import Form from "./Form";
import GameBoard from "./GameBoard";

const EndScreen = ({activePlayer,modo}) => {
if(modo==="empate"){
  return <div className="endScreen"><p style={{fontSize:"25px"}} className="text-white">Empate</p> </div>
}
if(activePlayer){
   return <div className="endScreen">
    <p className="text-white" style={{fontSize:"25px"}}>
    {`Victoria del jugador ${activePlayer.character}`}
    </p>
   </div>

}
  
}

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
      let hayVictoria = checkVictory(matrix);

      if (hayVictoria) {
        setVictory(hayVictoria);

        if (activePlayer.character !== player1.character) {
          setActivePlayer(player1);
        } else {
          setActivePlayer(player2);
        }
      } else {
        setVictory(hayVictoria);
      }
    }
  }, [turns]);

  const resetHandler=()=>{
    setPlayer1({ name: "", character: "" })
    setPlayer2({ name: "", character: "" })
    setActivePlayer({})
    setTurns(0)
    setVictory(false)
    setMatrix([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ])

  }

  return (
    <div className="mainBody  d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-white">TicTacToe in React.js</h1>
      <h3 className="text-white">{ `${activePlayer.character ? `Es turno de ${activePlayer.character}` :"" }`}</h3>
      <button className="btn btn-primary mb-2" onClick={resetHandler}>Reset</button>
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
          <EndScreen activePlayer={activePlayer} />
        ) :victory===false && turns===9 ?
        <EndScreen modo={"empate"} />:
        
        (
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
