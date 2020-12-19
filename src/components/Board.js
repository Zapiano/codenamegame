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
      <div className="flex flex-row flex-wrap">{cards}</div>
    </div>
  );
}

export default Board;