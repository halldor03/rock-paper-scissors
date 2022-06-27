const computerSelection = function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let result = choices[Math.floor(Math.random() * choices.length)];
  // to check computer's choice:
  // console.log("Computer's choice:" + result);
  return result;
};

const playRound = function playRound(computerSelection, playerSelection) {
  let currentResult = document.querySelector(".currentResult");
  if (computerSelection == playerSelection) {
    currentResult.textContent = `It's a draw! You both chose ${computerSelection} and get 0 points.`;
  } else if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    currentResult.textContent = `You win the round, ${playerSelection} beats ${computerSelection}! You get 1 point.`;
  } else if (
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    currentResult.textContent = `You lose the round, ${computerSelection} beats ${playerSelection}! Opponent gets 1 point.`;
  }
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // to check player's choice:
    // console.log("Player's choice:" + button.id);
    playRound(computerSelection(), button.id);
  });
});

// function scoring(
//   computerSelection,
//   playerSelection,
//   computerPoints,
//   playerPoints
// ) {
//   if (
//     (playerSelection == "scissors" && computerSelection == "paper") ||
//     (playerSelection == "rock" && computerSelection == "scissors") ||
//     (playerSelection == "paper" && computerSelection == "rock")
//   ) {
//     playerPoints += 1;
//     console.log(`Your points: ${playerPoints}`);
//     console.log(`Computer points: ${computerPoints}`);
//   } else if (
//     (computerSelection == "scissors" && playerSelection == "paper") ||
//     (computerSelection == "rock" && playerSelection == "scissors") ||
//     (computerSelection == "paper" && playerSelection == "rock")
//   ) {
//     computerPoints += 1;
//     console.log(`Your points: ${playerPoints}`);
//     console.log(`Computer points: ${computerPoints}`);
//   }
//   return [computerPoints, playerPoints];
// }

// function playGame(numberOfGames) {
//   let computerPoints = 0;
//   let playerPoints = 0;
//   for (let i = 0; i < numberOfGames; i++) {
//     let computerSelection = computerPlay();
//     let playerSelection = playerPlay();
//     playRound(computerSelection, playerSelection);
//     [computerPoints, playerPoints] = scoring(
//       computerSelection,
//       playerSelection,
//       computerPoints,
//       playerPoints
//     );
//   }
//   if (playerPoints > computerPoints) {
//     alert(`You won the game ${playerPoints}:${computerPoints}!`);
//   } else if (playerPoints < computerPoints) {
//     alert(`You lost the game ${computerPoints}:${playerPoints}!`);
//   } else {
//     alert(`It's a draw ${computerPoints}:${playerPoints}!`);
//   }
// }

// to play the game n times:
// playGame(3);
