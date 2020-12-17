import "../index.css";
import React, { useState } from "react";

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

export default Card;