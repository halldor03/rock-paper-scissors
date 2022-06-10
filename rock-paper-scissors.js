function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let result = choices[Math.floor(Math.random() * choices.length)];
  // to check computer's choice:
  console.log("Comp choice:" + result);
  return result;
}
function playerPlay() {
  let result = prompt("rock, paper or scissors?");
  let result_lowercase = result.toLowerCase();
  // to check my choice:
  console.log("My choice:" + result_lowercase);
  return result_lowercase;
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    console.log("It's a draw!");
  } else if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
  } else if (
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
  } else if (playerSelection == null || playerSelection == "") {
    alert("You forfeited the game!");
  } else {
    alert(`Wrong choice, must be "rock", "paper" or "scissors"!`);
  }
}
playRound(computerPlay(), playerPlay());
