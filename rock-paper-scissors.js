function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let result = choices[Math.floor(Math.random() * choices.length)];
  // to check computer's choice:
  console.log("Computer's choice:" + result);
  return result;
}

function playRound(computerSelection, playerSelection) {
  let resultRound = document.querySelector(".resultRound");
  if (computerSelection == playerSelection) {
    resultRound.textContent = `It's a draw! You both chose ${computerSelection} and get 0 points.`;
  } else if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    resultRound.textContent = `You win the round, ${playerSelection} beats ${computerSelection}! You get 1 point.`;
  } else if (
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    resultRound.textContent = `You lose the round, ${computerSelection} beats ${playerSelection}! Opponent gets 1 point.`;
  }
}

function scoring(
  computerSelection,
  playerSelection,
  computerPoints,
  playerPoints
) {
  if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerPoints += 1;
    console.log(`Your points: ${playerPoints}`);
    console.log(`Computer points: ${computerPoints}`);
  } else if (
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerPoints += 1;
    console.log(`Your points: ${playerPoints}`);
    console.log(`Computer points: ${computerPoints}`);
  }
  return [computerPoints, playerPoints];
}

function playGame() {
  const buttons = document.querySelectorAll(".rock, .paper, .scissors");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.classList;
      const computerSelection = computerPlay();
      // to check player's choice:
      console.log("Player's choice:" + playerSelection);
      playRound(computerSelection, playerSelection);
      let computerPoints = 0;
      let playerPoints = 0;
      [computerPoints, playerPoints] = scoring(
        computerSelection,
        playerSelection,
        computerPoints,
        playerPoints
      );
      if (playerPoints > computerPoints) {
        let wonRound = document.querySelector(".resultGameWon");
        wonRound.textContent = `You won the game ${playerPoints}:${computerPoints}!`;
      } else if (playerPoints < computerPoints) {
        let lostRound = document.querySelector(".resultGameLost");
        lostRound.textContent = `You lost the game ${computerPoints}:${playerPoints}!`;
      } else {
        let drawRound = document.querySelector(".resultGameDraw");
        drawRound.textContent = `It's a draw ${computerPoints}:${playerPoints}!`;
      }
    });
  });
}

const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  console.log("Starting the game...");
  playGame();
});

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
