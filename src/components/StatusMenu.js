import "../index.css";
import React, { useState } from "react";

function StatusMenu(props) {
    return (
        <div className="StatusMenu">
            <div>
                <div>
                    Team A
                </div>
                <div>
                    { props.score[0] }
                </div>
            </div>
            <div>
                <div>
                    Team B
                </div>
                <div>
                    { props.score[1] }
                </div>
            </div>
        </div>
    );
}

export default StatusMenu;