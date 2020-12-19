import '../index.css'
import React, { useState } from 'react';
import Game from './Game'

function Codename() {
  return (
    <div className="Codename flex h-full bg-purple-900">
      <Game />
    </div>
  );
}

export default Codename;
