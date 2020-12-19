import "../index.css";
import React, { useState } from "react";

function Score(props) {
    const renderTeamScore = (name, score) => {
        return (
          <div className="w-6/12">
            <div className="text-center">{name}</div>
            <div className="text-center p-4">
              <span className="text-4xl ">{score}</span>
            </div>
          </div>
        );
    };

    return (
      <div className="Score w-full flex flex-row">
          {renderTeamScore("Team A", props.score[0])}
          {renderTeamScore("Team B", props.score[1])}
      </div>
    );
}

function StatusMenu(props) {
    return (
      <div className="StatusMenu">
        <div className="flex">
          <Score score={props.score} />
        </div>
      </div>
    );
}

export default StatusMenu;