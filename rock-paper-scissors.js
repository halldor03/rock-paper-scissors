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
    return "draw"; // remis
  } else if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    console.log(
      `You win the round, ${playerSelection} beats ${computerSelection}! You get 1 point`
    );
    return "won"; // wygrales!
  } else if (
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    console.log(
      `You lose the round, ${computerSelection} beats ${playerSelection}! Opponent gets 1 point`
    );
    return "lost"; // przegrales
  } else if (playerSelection === null || playerSelection == "") {
    console.log("You forfeited the round!");
    return "lost";
  } else {
    console.log(
      `Wrong choice, must be "rock", "paper" or "scissors", try again!`
      // wygodniej by to bylo miec chyba w playerPlay();
      // wtedy moglbys pytac tak dlugo az nie ma dobrej odpowiedz
      // uzywa sie do tego while albo rekurencji
      // ale to bedzie jeszcze
      // uwielbiam rekurencje hihi jest czadowa jak sie ja zczai
    );
    return "draw";
    // return playerPlay(); SORKI AZ TAK NIE CZAJE A BY MI ZEPSULO POMYSL
  }
}

function playGame(numberOfGames) {
  let computerPoints = 0;
  let playerPoints = 0;
  for (let i = 0; i < numberOfGames; i++) {
    let computerSelection = computerPlay(); // smieszne jest to ze widac co komputer zrobi wczesniej <3
    let playerSelection = playerPlay();
    let result = playRound(computerSelection, playerSelection);
    if (result === "won") {
      playerPoints++;
      console.log("won");
    } else if (result === "lost") {
      // (result === "lost")
      computerPoints++;
      console.log("lost");
    } // jak result === "draw" to nic sie nie zmienia
    console.log(
      `Player points: ${playerPoints}\nComputer points: ${computerPoints}`
    );
  }
}
// to play the game n times:
playGame(5);
