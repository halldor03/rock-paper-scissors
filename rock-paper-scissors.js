console.log("Hello world");
let choices = ["rock", "paper", "scissors"];

function computerPlay() {
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}
function playerPlay() {
  let playerSelection = prompt("rock, paper or scissors?");
  return playerSelection;
}
// function playRound() {
//   // to check computer choice:
//   alert(computerPlay());
//   computerPlay();
//   playerPlay();
//   if (
//     (playerPlay() === "paper" && computerPlay() === "rock") ||
//     (playerPlay() === "scissors" && computerPlay() === "paper") ||
//     (playerPlay() === "rock" && computerPlay() === "scissors")
//   ) {
//     alert("You win! <3");
//   } else if (
//     (playerPlay() === "paper" && computerPlay() === "paper") ||
//     (playerPlay() === "scissors" && computerPlay() === "scissors") ||
//     (playerPlay() === "rock" && computerPlay() === "rock")
//   ) {
//     alert("Tie!");
//   } else {
//     alert("You lose! :(");
//   }
// }
// playRound();

// function test1() {
//   return computerPlay;
// }

// function test2() {
//   return playerPlay;
// }

// function playRound() {
//   // to check computer choice:
//   alert(computerPlay());
// test1()
// test2()
//   if (
//     (playerPlay === "paper" && computerPlay === "rock") ||
//     (playerPlay === "scissors" && computerPlay === "paper") ||
//     (playerPlay === "rock" && computerPlay === "scissors")
//   ) {
//     alert("You win! <3");
//   } else if (
//     (playerPlay === "paper" && computerPlay === "paper") ||
//     (playerPlay === "scissors" && computerPlay === "scissors") ||
//     (playerPlay === "rock" && computerPlay === "rock")
//   ) {
//     alert("Tie!");
//   } else {
//     alert("You lose! :(");
//   }
// }
// playRound();
