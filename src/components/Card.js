import "../index.css";
import React from "react";

// props.cardState["team"] == {
//   word: dictionary[index],
//   team: 1,
//   revealed: false,
// };


function Card(props) {
  const cardState = props.cardState;
  const cardTeam = cardState["team"];

  const teamOneClass = " bg-pink-500";
  const teamTwoClass = " bg-yellow-400";
  const loserClass = " bg-black text-gray-100";
  const teamNullClass = " bg-gray-300";
  let cardClass = "h-20 md:h-32 rounded shadow-sm text-center flex flex-col justify-center"
  let cardContent = '';

  if (cardTeam === '1') { cardClass += teamOneClass }
  if (cardTeam === '2') { cardClass += teamTwoClass }
  if (cardTeam === '-1') { cardClass += loserClass }
  if (cardTeam === 'null') { cardClass += teamNullClass }
  if (cardState["revealed"]) { cardContent = props.cardState["word"]; }

  return (
    <div className="Card w-1/3 md:w-1/5 m-0 p-1">
      <div
        onClick={() => props.onCardClick()}
        className={cardClass}
      >
        {cardContent}
      </div>
</div>
  );

}

export default Card;