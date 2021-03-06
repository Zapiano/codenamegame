import "../index.css";
import React, { useState } from "react";

//Components
import Board from "./Board"
import StatusMenu from "./StatusMenu.js"

function Game(props) {
  const [score, setScore] = useState([6,7]);
  const [gameState, setGameState] = useState(props.game.cards);
  const [currentTurn, setCurrentTurn] = useState({"team": 0, "role": "guesser"})

  const updateScore = (cardId) => {
    const newScore = score.slice();
    newScore[gameState[cardId]['team'] - 1] -= 1;
    setScore(newScore);
  }

  const onCardClick = (cardId) => {
    const cardState = gameState[cardId];

    if (cardState["revealed"] === true) { return; } 

    // update score
    const isTeamCard = cardState["team"] !== null && cardState["team"] !== -1;
    if (isTeamCard) { updateScore(cardId); }

    // update gameState
    const newGameState = gameState.slice();
    newGameState[cardId]["revealed"] = true;
    setGameState(newGameState);
  };

  const onNextTurnClick = () => {
    const nextTurn = {...currentTurn};

    if (currentTurn["role"] === "guesser") {
      nextTurn["team"] = currentTurn["team"] === 0 ? 1 : 0;
      nextTurn["role"] = "master";
    } else {
      nextTurn["role"] = "guesser";
    }

    setCurrentTurn(nextTurn);
  };


  return (
    <div className="Game w-full xl:mx-20 lg:mx-10 md:mx-5 mx-2">
      <div className="flex py-20">
        <div className="w-2/12">
          <div>{props.game.id}</div>
          <StatusMenu 
            score={score} 
            currentTurn={currentTurn} 
          />
        </div>
        <div className="w-8/12">
          <Board
            gameState={gameState}
            onCardClick={(cardId) => onCardClick(cardId)}
            onNextTurnClick={() => onNextTurnClick()}
          />
        </div>
        <div className="w-2/12"></div>
      </div>
    </div>
  );
}

export default Game;
