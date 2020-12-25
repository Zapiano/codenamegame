import "../index.css";
import React from "react";

function Score(props) {
    const renderTeamScore = (name, score) => {
        return (
          <div className="w-6/12 py-4 bg-purple-200">
            <div className="text-center">{name}</div>
            <div className="text-center p-4">
              <span className="text-4xl ">{score}</span>
            </div>
          </div>
        );
    };

    return (
      <div className="Score w-full flex flex-row my-1">
          {renderTeamScore("Team A", props.score[0])}
          {renderTeamScore("Team B", props.score[1])}
      </div>
    );
}

function CurrentTurn(props) {
    return (
        <div className="CurrentTurn p-4 text-center bg-purple-300 rounded">
            <div>CURRENT TURN</div>
            <div className="p-2 text-2xl">{ props.currentTurn['team'] }</div>
            <div className="p-1 text-xl">{ props.currentTurn['role'] }</div>
        </div>
    );
}

function StatusMenu(props) {
    return (
      <div className="StatusMenu bg-purple-100 h-full rounded m-1">
        <div className="flex flex-col">
          <CurrentTurn currentTurn={props.currentTurn}/>
          <Score score={props.score} />
        </div>
      </div>
    );
}

export default StatusMenu;