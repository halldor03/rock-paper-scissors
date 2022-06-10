function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let result = choices[Math.floor(Math.random() * choices.length)];
  // to check computer's choice:
  console.log("Comp choice:" + result);
  return result;
}

function playerPlay() {
  let result = prompt("rock, paper or scissors?");
  if (typeof result == "string") {
    let result2 = result.toLowerCase();
    // to check my choice:
    console.log("My choice:" + result2);
    return result2;
  } else {
    // to check my choice:
    console.log("My choice:" + result);
    return result;
  }
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    console.log("It's a draw! You both get 0 points");
    return 0;
  } else if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    console.log(
      `You win the round! ${playerSelection} beats ${computerSelection}! You get 1 point`
    );
    return 1;
  } else if (
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    console.log(
      `You lose the round! ${computerSelection} beats ${playerSelection}! Opponent gets 1 point`
    );
    return -1;
  } else if (playerSelection === null || playerSelection == "") {
    alert("You forfeited the round!");
  } else {
    alert(`Wrong choice, must be "rock", "paper" or "scissors"!`);
  }
}

function playGame(numberOfGames) {
  for (let i = 0; i < numberOfGames; i++) {
    playRound(computerPlay(), playerPlay());
  }
}
// to play the game n times:
playGame(1);
