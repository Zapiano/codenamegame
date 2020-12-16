import './index.css'
import React, { useState } from 'react';
import dictionary from './dictionary.js';

function Card (props) {
  return (
    <div className="Card w-1/5 m-0 p-1 inline-block" >
      <div onClick={()=> props.onCardClick() } className="bg-gray-300 h-20 rounded shadow-sm text-center flex flex-col justify-center">
        Paralelepípedo {props.id}
      </div>
    </div>
  );
}

function Board(props) {
  const [score, setScore] = useState([7,7]);

  const onCardClick = () => {
    const newScore = [...score];
    newScore[1] = score[1] - 1;
    newScore[0] = score[0] - 1;
    setScore(newScore);
  }

  const renderCard = (id) => {
    return (
      <Card onCardClick={() => onCardClick()} id={id} />
    );
  }

  return (
    <div className="Board w-8/12" >
      <div className="Score flex flex-row justify-around" >
        <div className="text-center">
          <div>Team 1</div>
          <div>{score[0]}</div>
        </div>
        <div className="text-center">
          <div>Team 2</div>
          <div>{score[1]}</div>
        </div>
      </div>

      {renderCard(1)}
      {renderCard(2)}
      {renderCard(3)}
      {renderCard(4)}
      {renderCard(5)}
      {renderCard(6)}
      {renderCard(7)}
      {renderCard(8)}
      {renderCard(9)}
      {renderCard(10)}
    </div>
  );
}

function Game(props) {
  const initialState = dictionary.map(word => ({
    'word': word,
    'team': 0,
    'revealed': false,
  }));

  const [game, setGame] = useState(initialState)

  return (
    <div className="Game container flex">
      <div className="w-2/12">
      </div>
      <Board />
      <div className="w-2/12">
      </div>
    </div>
  );
}

function Codename() {
  return (
    <div className="Codename container">
      <Game />
    </div>
  );
}

export default Codename;
