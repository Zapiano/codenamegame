import React, { useState } from 'react';
//import { onCreateNote, onDeleteNote } from './graphql/subscriptions';
import '../index.css'

// ------- components -------
import Game from './Game'
import NewGameForm from './NewGameForm'

// ---------- lib ----------
import  { getOrCreateGame } from '../lib/getOrCreateGame';

function Codename() {
  // set spellCheck attribute to false
  document.body.setAttribute("spellCheck", false);

  const [gameId, setGameId] = useState(null);
  const [game, setGame] = useState({})

  async function enterGame(gameName) {
    const currentGame = await getOrCreateGame(gameName);
    const currentGameId = await currentGame.id;
    console.log("Current game id", currentGameId)
    setGame(currentGame);
    setGameId(currentGameId);
  }

  const onNewGameClick = (gameName) => {
    enterGame(gameName);
  }

  const renderGame = () => {
    if (gameId != null) {
      return <Game game={game} gameId={gameId} />;
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

export default Codename;
