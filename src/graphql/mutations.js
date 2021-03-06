/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          gameID
          name
          team
          role
          createdAt
          updatedAt
        }
        nextToken
      }
      cards {
        items {
          id
          gameID
          word
          team
          revealed
          createdAt
          updatedAt
        }
        nextToken
      }
      currentTeam
      currentRole
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          gameID
          name
          team
          role
          createdAt
          updatedAt
        }
        nextToken
      }
      cards {
        items {
          id
          gameID
          word
          team
          revealed
          createdAt
          updatedAt
        }
        nextToken
      }
      currentTeam
      currentRole
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          gameID
          name
          team
          role
          createdAt
          updatedAt
        }
        nextToken
      }
      cards {
        items {
          id
          gameID
          word
          team
          revealed
          createdAt
          updatedAt
        }
        nextToken
      }
      currentTeam
      currentRole
      createdAt
      updatedAt
    }
  }
`;
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
      id
      gameID
      word
      team
      revealed
      createdAt
      updatedAt
    }
  }
`;
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
      id
      gameID
      word
      team
      revealed
      createdAt
      updatedAt
    }
  }
`;
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
      id
      gameID
      word
      team
      revealed
      createdAt
      updatedAt
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      gameID
      name
      team
      role
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      gameID
      name
      team
      role
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      gameID
      name
      team
      role
      createdAt
      updatedAt
    }
  }
`;
