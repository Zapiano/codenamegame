import "../index.css";
import React, { useState } from "react";

// Helpers
import initialGameState from "../helpers/initialGameState.js";

//Components
import Board from "./Board"

function Game(props) {
  const initialScore = [7, 7];

  const [score, setScore] = useState(initialScore);
  const [gameState, setGameState] = useState(initialGameState);

  const onCardClick = (team) => {
    const newScore = [...score];
    if (score[team - 1] == 0) {return;}

    newScore[team - 1] = score[team - 1] - 1;
    setScore(newScore);
  };

  return (
    <div className="Game container flex">
      <div className="w-2/12"></div>
      <Board
        score={score}
        gameState={gameState}
        onCardClick={(team) => onCardClick(team)}
      />
      <div className="w-2/12"></div>
    </div>
  );
}

export default Game;
