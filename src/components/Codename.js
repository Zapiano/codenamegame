import React, { useState } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import '../index.css'

// ------- components -------
import Game from './Game'
import NewGameForm from './NewGameForm'

// ---------- lib ----------
import  { getOrCreateGame } from '../lib/getOrCreateGame';

function Codename() {
  // set spellCheck attribute to false
  document.body.setAttribute("spellCheck", false);

  const [game, setGame] = useState({})

  const onNewGameClick = (gameName) => {
    getOrCreateGame(gameName, setGame);
  }

  const renderGame = () => {
    if (game.id != null) {
      return <Game game={game} />;
    } else {
      return (
        <NewGameForm onNewGameClick={(gameName) => onNewGameClick(gameName)} />
      );
    }
  }

  return (
    <div className="Codename flex h-full bg-purple-900">
      { renderGame() }
    </div>
  );
}

export default withAuthenticator(Codename);
