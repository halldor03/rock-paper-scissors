let choices = ["rock", "paper", "scissors"];

function playRound() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    // check computer choice:
    alert(computerSelection);
    let playerSelection = prompt("rock, paper or scissors?");

    if (playerSelection === computerSelection) {
      alert("It's a draw!");
    } else if (
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      alert(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else {
      alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
  }
}
playRound();
