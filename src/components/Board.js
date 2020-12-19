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
    <div className="Board">
      <div 
        onClick={() => props.onNextTurnClick()}
        className="p-2 rounded shadow-sm bg-purple-100"
      >
        Next turn
      </div>
      <div className="flex flex-row flex-wrap">{cards}</div>
    </div>
  );
}

export default Board;