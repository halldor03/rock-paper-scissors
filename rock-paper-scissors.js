function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let result = choices[Math.floor(Math.random() * choices.length)];
  // to check computer's choice:
  console.log("Computer's choice: " + result);
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

function playGame() {
  let computerPoints = 0;
  let playerPoints = 0;
  const buttons = document.querySelectorAll(".rock, .paper, .scissors");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.classList;
      const computerSelection = computerPlay();
      // to check player's choice:
      console.log("Player's choice: " + playerSelection);
      playRound(computerSelection, playerSelection);
      [computerPoints, playerPoints] = scoring(
        computerSelection,
        playerSelection,
        computerPoints,
        playerPoints
      );
      // to check points:
      console.log("Computers's points: " + computerPoints);
      console.log("Player's points: " + playerPoints);
      if (playerPoints == 5 || computerPoints == 5) {
        if (playerPoints > computerPoints) {
          let wonGame = document.querySelector(".resultGameWon");
          wonGame.textContent = `You won the game ${playerPoints}:${computerPoints}! Press any key to play again!`;
          computerPoints = 0;
          playerPoints = 0;
          const buttons = document.querySelectorAll(".rock, .paper, .scissors");
          buttons.forEach((button) => {
            button.disabled = true;
          });
          restartGame();
        } else if (playerPoints < computerPoints) {
          let lostGame = document.querySelector(".resultGameLost");
          lostGame.textContent = `You lost the game ${computerPoints}:${playerPoints}! Press any key to play again!`;
          computerPoints = 0;
          playerPoints = 0;
          const buttons = document.querySelectorAll(".rock, .paper, .scissors");
          buttons.forEach((button) => {
            button.disabled = true;
          });
          restartGame();
        } else {
          let drawGame = document.querySelector(".resultGameDraw");
          drawGame.textContent = `It's a draw ${computerPoints}:${playerPoints}! Press any key to play again!`;
          computerPoints = 0;
          playerPoints = 0;
          const buttons = document.querySelectorAll(".rock, .paper, .scissors");
          buttons.forEach((button) => {
            button.disabled = true;
          });
          restartGame();
        }
      }
    });
  });
}

function restartGame() {
  const keyPushedRestart = (e) => {
    if (e.key) {
      const buttons = document.querySelectorAll(".rock, .paper, .scissors");
      buttons.forEach((button) => {
        button.disabled = false;
      });
      let resultRound = document.querySelector(".resultRound");
      resultRound.textContent = "";
      let wonGame = document.querySelector(".resultGameWon");
      wonGame.textContent = "";
      let lostGame = document.querySelector(".resultGameLost");
      lostGame.textContent = "";
      let currentPlayerScore = document.querySelector(".currentPlayerScore");
      currentPlayerScore.textContent = `Your points: 0`;
      let currentComputerScore = document.querySelector(
        ".currentComputerScore"
      );
      currentComputerScore.textContent = `Computer points: 0`;
      window.removeEventListener("keydown", keyPushedRestart);
    }
  };
  window.addEventListener("keydown", keyPushedRestart);
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
    let currentPlayerScore = document.querySelector(".currentPlayerScore");
    currentPlayerScore.textContent = `Your points: ${playerPoints}`;
    let currentComputerScore = document.querySelector(".currentComputerScore");
    currentComputerScore.textContent = `Computer points: ${computerPoints}`;
  } else if (
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerPoints += 1;
    let currentPlayerScore = document.querySelector(".currentPlayerScore");
    currentPlayerScore.textContent = `Your points: ${playerPoints}`;
    let currentComputerScore = document.querySelector(".currentComputerScore");
    currentComputerScore.textContent = `Computer points: ${computerPoints}`;
  } else {
    let currentPlayerScore = document.querySelector(".currentPlayerScore");
    currentPlayerScore.textContent = `Your points: ${playerPoints}`;
    let currentComputerScore = document.querySelector(".currentComputerScore");
    currentComputerScore.textContent = `Computer points: ${computerPoints}`;
  }
  return [computerPoints, playerPoints];
}

const startKey = document.querySelector(".startKey");
let startMessage = document.querySelector(".startMessage");
const buttons = document.querySelectorAll(".rock, .paper, .scissors");
buttons.forEach((button) => {
  button.disabled = true;
});
const keyPushed = (e) => {
  if (e.key) {
    const buttons = document.querySelectorAll(".rock, .paper, .scissors");
    buttons.forEach((button) => {
      button.disabled = false;
    });
    startMessage.textContent = "";
    let currentPlayerScore = document.querySelector(".currentPlayerScore");
    currentPlayerScore.textContent = `Your points: 0`;
    let currentComputerScore = document.querySelector(".currentComputerScore");
    currentComputerScore.textContent = `Computer points: 0`;
    playGame();
    window.removeEventListener("keydown", keyPushed);
  }
};
window.addEventListener("keydown", keyPushed);
