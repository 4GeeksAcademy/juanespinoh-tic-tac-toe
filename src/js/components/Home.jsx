import React, { useState, useEffect } from "react";
import "./HomeStyles.css";

import Main from "./TicTacToeComponents/Main";

//create your first component

const Home = () => {
  const [player1, setPlayer1] = useState({ name: "", character: "" });
  const [player2, setPlayer2] = useState({ name: "", character: "" });
  const [activePlayer, setActivePlayer] = useState({});
  const [turns, setTurns] = useState(0);
  const [victory, setVictory] = useState(false);

  const [matrix, setMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const propsObj = {
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
    setVictory
  };

  return (
    <div className="mainContainer d-flex justify-content-center align-items-center">
      <Main {...propsObj} />
    </div>
  );
};

export default Home;
