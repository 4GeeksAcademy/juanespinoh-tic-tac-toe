import React, { useState } from "react";
import "./GameBoardStyles.css";

const Tile = ({
  activePlayer,
  setActivePlayer,
  player1,
  player2,
  setMatrix,
  matIndex,
  setTurns,
  victory,
}) => {
  const [tileCharacter, setTileCharacter] = useState(null);
  const [row, column] = matIndex;

  const actualizarMatrix = (row, column) => {
    setMatrix((prev) => {
      return prev.map((elem, index) => {
        if (index === column) {
          return elem.map((e, i) =>
            i === row ? `${activePlayer.character}` : e
          );
        } else {
          return elem;
        }
      });
    });
  };

  const activePLayerHandler = (row, column, tileCharacter, victory) => {
    setTileCharacter(activePlayer.character);
    actualizarMatrix(row, column, tileCharacter);
    

    if (activePlayer.character === player1.character) {
      if (victory === false) {
 
        setActivePlayer(player2);
      }
    } else {
      if (victory === false) {
  
        setActivePlayer(player1);
      }
    }

    setTurns((prev) => prev + 1);
  };

  if (tileCharacter) {
    return <div className="box">{tileCharacter}</div>;
  }

  return (
    <div
      className="box"
      onClick={() => activePLayerHandler(row, column, tileCharacter, victory)}
    >
      {tileCharacter}
    </div>
  );
};

const GameBoard = ({
  activePlayer,
  setActivePlayer,
  player1,
  player2,
  setMatrix,
  setTurns,
  setVictory,
  victory,
}) => {
  return (
    <div className="GameBoardBody container-fluid  ">
      <div className="row ">
        <div className="col-4 col1">
          <Tile
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            victory={victory}
            player1={player1}
            player2={player2}
            setMatrix={setMatrix}
            matIndex={[0, 0]}
            setTurns={setTurns}
            setVictory={setVictory}
          />
        </div>
        <div className="col-4 col2 ">
          <Tile
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            victory={victory}
            player1={player1}
            player2={player2}
            setMatrix={setMatrix}
            matIndex={[0, 1]}
            setTurns={setTurns}
            setVictory={setVictory}
          />
        </div>
        <div className="col-4 col3">
          <Tile
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            victory={victory}
            player1={player1}
            player2={player2}
            setMatrix={setMatrix}
            matIndex={[0, 2]}
            setTurns={setTurns}
            setVictory={setVictory}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-4 col4">
          <Tile
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            victory={victory}
            player1={player1}
            player2={player2}
            setMatrix={setMatrix}
            matIndex={[1, 0]}
            setTurns={setTurns}
            setVictory={setVictory}
          />
        </div>
        <div className="col-4 col5">
          <Tile
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            victory={victory}
            player1={player1}
            player2={player2}
            setMatrix={setMatrix}
            matIndex={[1, 1]}
            setTurns={setTurns}
            setVictory={setVictory}
          />
        </div>
        <div className="col-4 col6">
          <Tile
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            victory={victory}
            player1={player1}
            player2={player2}
            setMatrix={setMatrix}
            matIndex={[1, 2]}
            setTurns={setTurns}
            setVictory={setVictory}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-4 col7">
          <Tile
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            victory={victory}
            player1={player1}
            player2={player2}
            setMatrix={setMatrix}
            matIndex={[2, 0]}
            setTurns={setTurns}
            setVictory={setVictory}
          />
        </div>
        <div className="col-4 col8">
          <Tile
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            victory={victory}
            player1={player1}
            player2={player2}
            setMatrix={setMatrix}
            matIndex={[2, 1]}
            setTurns={setTurns}
            setVictory={setVictory}
          />
        </div>
        <div className="col-4 col9">
          <Tile
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            victory={victory}
            player1={player1}
            player2={player2}
            setMatrix={setMatrix}
            matIndex={[2, 2]}
            setTurns={setTurns}
            setVictory={setVictory}
          />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
