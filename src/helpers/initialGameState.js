const dictionary = [
  "banana",
  "mexerica",
  "graviola",
  "melancia",
  "romã",
  "morango",
  "abacaxi",
  "caqui",
  "maçã",
  "pêra",
  "mamão",
  "carambola",
  "uva",
  "pêssego",
  "ameixa",
  "manga",
  "limão",
  "laranja",
  "açaí",
  "jabuticaba",
  "amora",
  "framboesa",
  "melão",
  "cupuaçú",
  "cereja"
];

// Helper function to suffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Set fixed initial conditions
const wordAmount = 25;
const teamOneWordAmount = 6;
const teamTwoWordAmount = 7;
const temOneOrTwoWordAmount = teamOneWordAmount + teamTwoWordAmount;

let initialGameState = Array.from(Array(wordAmount).keys()) ;
shuffleArray(initialGameState);
let suffledState = initialGameState.slice();

// Get arrays of all four groups of cards
let teamOneCardsIndex = suffledState.slice(0, teamOneWordAmount)
let teamTwoCardsIndex = suffledState.slice(teamOneWordAmount, temOneOrTwoWordAmount)
let loserCardIndex = suffledState.slice(temOneOrTwoWordAmount, temOneOrTwoWordAmount + 1);
let nullCardsIndex = suffledState.slice(temOneOrTwoWordAmount + 1, wordAmount);

// Fill initialGameState with right initial values
for(let index of teamOneCardsIndex) {
  initialGameState[index] = {
    word: dictionary[index],
    team: 1,
    revealed: false,
  };
}

for(let index of teamTwoCardsIndex) {
  initialGameState[index] = {
    word: dictionary[index],
    team: 2,
    revealed: false,
  };
}

for(let index of loserCardIndex) {
  initialGameState[index] = {
    word: dictionary[index],
    team: -1,
    revealed: false,
  };
}

for(let index of nullCardsIndex) {
  initialGameState[index] = {
    word: dictionary[index],
    team: 'null',
    revealed: false,
  };
}

export default initialGameState;