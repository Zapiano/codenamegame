import "../index.css";
import React, { useState } from "react";

// Helpers
import initialGameState from "../helpers/initialGameState.js";

//Components
import Board from "./Board"
import StatusMenu from "./StatusMenu.js"


function Game(props) {
  const [score, setScore] = useState([6,7]);
  const [gameState, setGameState] = useState(initialGameState);

  const updateScore = (cardId) => {
    const newScore = score.slice();
    newScore[gameState[cardId]['team'] - 1] -= 1;
    setScore(newScore);
  }

  const onCardClick = (cardId) => {
    const cardState = gameState[cardId];

    if (cardState['revealed'] === true) { return; }
    
    // update score
    const isTeamCard = (cardState['team'] !== null && cardState['team'] !== -1);
    if ( isTeamCard ) { updateScore(cardId)}

    // update gameState
    const newGameState = gameState.slice();
    newGameState[cardId]['revealed'] = true;
    setGameState(newGameState);

  };

  return (
    <div className="Game w-full xl:mx-20 lg:mx-10 md:mx-5 mx-2">
      <div className="flex py-20">
        <div className="w-2/12">
          <StatusMenu score={score} />
        </div>
        <div className="w-8/12">
          <Board
            gameState={gameState}
            onCardClick={(cardId) => onCardClick(cardId)}
          />
        </div>
        <div className="w-2/12"></div>
      </div>
    </div>
  );
}

export default Game;
