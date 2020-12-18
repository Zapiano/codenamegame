import "../index.css";
import React, { useState } from "react";

// Components
import Card from "./Card"

function Board(props) {
  const renderCard = (cardState, index) => {
    return (
      <Card
        cardState={cardState}
        key={index}
        onCardClick={() => props.onCardClick(index)}
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

      <div className="flex flex-row flex-wrap">{cards}</div>
    </div>
  );
}

export default Board;