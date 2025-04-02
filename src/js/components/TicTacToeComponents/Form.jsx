import React from "react";
import "./FormStyles.css"

const SelectName = ({ setFnc, playerNumber }) => {
  const nameChangeHandler = (e) =>
    setFnc((prev) => ({ ...prev, name: e.target.value }));
  return (
    <input
      type="text"
      placeholder={`Player ${playerNumber} Name`}
      onChange={nameChangeHandler}
    />
  );
};

const CharacterSelect = ({ setFnc1, setFnc2, character,setActivePlayer }) => {
  const characterChangeHandler = (character) => {
    setFnc1((prev) => {
      setActivePlayer({...prev,character})
      return {...prev,character}
    });
    if (character === "X") {
      setFnc2((prev) => ({ ...prev, character: "O" }));
    } else {
      setFnc2((prev) => ({ ...prev, character: "X" }));
    }
  };

  return (
    <button onClick={() => characterChangeHandler(character)}>
      <p>{character}</p>
    </button>
  );
};

const Form = ({setPlayer1,setPlayer2,setActivePlayer,player1,player2}) => {
  return <div className="formBody">
    <div className="formInputContainer">
        <SelectName  setFnc={setPlayer1} playerNumber={1}/>
        <SelectName setFnc={setPlayer2} playerNumber={2}/>

    </div>

    <div className="formButtonContainer">
      {
        player1.name==="" || player2.name==="" ? null:<>
         <CharacterSelect  character={"X"} setFnc1={setPlayer1} setFnc2={setPlayer2} setActivePlayer={setActivePlayer} />
         <CharacterSelect character={"O"} setFnc1={setPlayer1} setFnc2={setPlayer2} setActivePlayer={setActivePlayer} /></> 
      }
       
    </div>
  </div>;
};

export default Form;
