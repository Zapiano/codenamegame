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

class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = { score: [6,7] }
  }

  onCardClick () {
    const newScore = this.state.score;
    newScore[1] = this.state.score[1] - 1;
    newScore[0] = this.state.score[0] - 1;
    this.setState({score: newScore});
  }

  renderCard(id) {
    return (
      <Card onCardClick={() => this.onCardClick()} id={id} />
    );
  }

  render() {
    return (
      <div className="Board w-8/12" >
        <div className="Score flex flex-row justify-around" >
          <div className="text-center">
            <div>Team 1</div> 
            <div>{this.state.score[0]}</div>
          </div>
          <div className="text-center">
            <div>Team 2</div>
            <div>{this.state.score[1]}</div>
          </div>
        </div>
        
        {this.renderCard(1)}
        {this.renderCard(2)}
        {this.renderCard(3)}
        {this.renderCard(4)}
        {this.renderCard(5)}
        {this.renderCard(6)}
        {this.renderCard(7)}
        {this.renderCard(8)}
        {this.renderCard(9)}
        {this.renderCard(10)}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    const game = dictionary.map(word => ({
      'word': word,
      'team': 0  
    }));
    
    this.state = { 
      game: game,
    };
  }

  render() {
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
}

function Codename() {
  return (
    <div className="Codename container">
      <Game />
    </div>
  );
}

export default Codename;