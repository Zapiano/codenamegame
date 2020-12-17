import "../index.css";
import React, { useState } from "react";
import initialGameState from "../helpers/initialGameState.js";

function Card(props) {
  return (
    <div className="Card w-1/5 m-0 p-1 inline-block">
      <div
        onClick={() => props.onCardClick(props.cardState["team"])}
        className="
        bg-gray-300 
        h-20 rounded 
        shadow-sm 
        text-center 
        flex 
        flex-col 
        justify-center"
      >
        {props.cardState["word"]}
      </div>
    </div>
  );
}

function Board(props) {
  const renderCard = (cardState, index) => {
    return (
      <Card
        cardState={cardState}
        key={index}
        onCardClick={(team) => props.onCardClick(team)}
      />
    );
  };

  const cards = [];

  props.gameState.forEach((cardState, index) =>
    cards.push(renderCard(cardState, index))
  );

  return (
    <div className="Board w-8/12">
      <div className="Score flex flex-row justify-around">
        <div className="text-center">
          <div>Team 1</div>
          <div>{props.score[0]}</div>
        </div>
        <div className="text-center">
          <div>Team 2</div>
          <div>{props.score[1]}</div>
        </div>
      </div>

      {cards}
    </div>
  );
}

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
