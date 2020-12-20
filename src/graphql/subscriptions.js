/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard {
    onCreateCard {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard {
    onUpdateCard {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard {
    onDeleteCard {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
