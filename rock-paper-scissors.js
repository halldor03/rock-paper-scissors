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
    // to check your choice:
    console.log("Your choice:" + result2);
    return result2;
  } else {
    // to check your choice:
    console.log("Your choice:" + result);
    return result;
  }
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    console.log("It's a draw! You both get 0 points");
  } else if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    console.log(
      `You win the round, ${playerSelection} beats ${computerSelection}! You get 1 point`
    );
  } else if (
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    console.log(
      `You lose the round, ${computerSelection} beats ${playerSelection}! Opponent gets 1 point`
    );
  } else if (playerSelection === null || playerSelection == "") {
    console.log("You forfeited the round!");
  } else {
    console.log(
      `Wrong choice, must be "rock", "paper" or "scissors", try again!`
    );
    return playerPlay();
  }
}

function scoring(computerSelection, playerSelection, scb) {
  // tutaj nazwa scb zeby pokazac ze to nie musi byc konieczne obiekt zdefinowany w variable scoreboard, tylko wszystko co podamy tej funkcji
  if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    scb.wins += 1;
    console.log(`Your points: ${scb.wins}`);
    console.log(`Computer points: ${scb.losses}`);
  } else if (
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    scb.losses += 1;
    console.log(`Your points: ${scb.wins}`);
    console.log(`Computer points: ${scb.losses}`);
  }
  return [scb.wins, scb.losses];
}

function playGame(numberOfGames) {
  scoreboard = {
    wins: 0,
    losses: 0,
  };
  for (let i = 0; i < numberOfGames; i++) {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    playRound(computerSelection, playerSelection);
    [scoreboard.wins, scoreboard.losses] = scoring(
      computerSelection,
      playerSelection,
      scoreboard
    ); // tutaj ten argument jest opcjonalny
    // bo ta funkcja i tak ma dostep do tego variable
    // ale ja lubie jak wszystko jest od siebie niezalezne
    // a nie ze polega na tym ze w jakiejs innej funkcji jest jakis variable
  }
}
// to play the game n times:
playGame(5);
