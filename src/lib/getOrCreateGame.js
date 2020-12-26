import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from '../graphql/mutations';

import initialGameState from "../helpers/initialGameState";

export async function getOrCreateGame(gameName, setGame) {
  const gameArray = await fetchGameByName(gameName);

  if (gameArray.length != 0) {
    const oldGameId = gameArray[0].id;
    const oldGame = await getGame(oldGameId);
    console.log("Getting old game configured", oldGame);
    return gameConfigured(oldGame, setGame);
  }

  console.log("No game was found with that name.")

  const newGame = await createGame(gameName);

  console.log("Configuring new game", newGame);
  configureGame(newGame, setGame);
}

function configureGame(newGame, setGame) {
  let cards = [];

  initialGameState.forEach((element, index) => {
    let card = createCard(element, newGame.id);
    cards[index] = card;
  });

  const game = {
    id: newGame.id,
    cards: cards,
  }

  setGame(game);
}

function gameConfigured(oldGame, setGame) {
  const game = {
    id: oldGame.id,
    cards: oldGame.cards.items,
  }

  setGame(game);
  console.log("Old game", game);
}

async function getGame(gameId) {
  console.log("Fetchin game by id", gameId);

  const apiData = await API.graphql({
    query: queries.getGame,
    variables: { id: gameId },
  });

  return apiData.data.getGame;
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

async function createCard(cardData, gameId) {
  console.log("Creating card")

  const apiData = await API.graphql({
    query: mutations.createCard,
    variables: { input: newCardInput(cardData, gameId) },
  });

  const cardArray = apiData.data.createCard;
  console.log("Card created", cardArray);

  return cardArray;
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

function newCardInput(cardData, gameId) {
  const newCardInput = {
    gameID: gameId,
    word: cardData['word'],
    team: cardData['team'],
    revealed: false, 
  }
  console.log("New card input:", newCardInput);
  return newCardInput;
}