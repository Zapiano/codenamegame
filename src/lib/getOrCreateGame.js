import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from '../graphql/mutations';

export async function getOrCreateGame(gameName) {
  const gameArray = await fetchGameByName(gameName);

  if (gameArray.length != 0) {
    const oldGame = gameArray[0];
    console.log("mygame", oldGame);
    return oldGame;
  }

  console.log("No game was found with that name.")

  const newGame = await createGame(gameName);

  return newGame;
}

async function fetchGameByName(gameName) {
  console.log("Fetching games by name...", gameName);

  const filter = { name: { eq: gameName } };

  const apiData = await API.graphql({
    query: queries.listGames,
    variables: { filter: filter },
  });
  
  return apiData.data.listGames.items;
}

async function createGame(gameName) {
  console.log("Creating game")

  const apiData = await API.graphql({
    query: mutations.createGame,
    variables: { input: newGameInput(gameName) },
  });

  const gameArray = apiData.data.createGame;
  console.log("Game created", gameArray);

  return gameArray;
}

function newGameInput(gameName) {
  const newGameInput = {
    name: gameName,
    currentTeam: "0",
    currentRole: "master",
  };
  console.log("New game input", newGameInput);
  return newGameInput;
}