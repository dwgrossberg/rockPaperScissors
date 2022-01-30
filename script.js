function computerPlay() {
    let computerPick = Math.floor((Math.random() * 100) + 1);
    if (computerPick <= 33) {
      return "rock";
    } else if (computerPick <= 66) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function playRound(playerSelection, computerSelection) {
    if (!playerSelection) return;
    let playerLower = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    if (playerLower === "rock" && computerSelection === "paper") {
      return "You loose " + computerSelection + " beats " + playerLower;
    } else if (playerLower === "rock" && computerSelection === "scissors") {
      return "You win " + playerLower + " beats " + computerSelection;
    } else if (playerLower === "paper" && computerSelection === "rock") {
      return "You win " + playerLower + " beats " + computerSelection;
    } else if (playerLower === "paper" && computerSelection === "scissors") {
      return "You loose " + computerSelection + " beats " + playerLower;
    } else if (playerLower === "scissors" && computerSelection === "rock") {
      return "You loose " + computerSelection + " beats " + playerLower;
    } else if (playerLower === "scissors" && computerSelection === "paper") {
      return "You win " + playerLower + " beats " + computerSelection;
    } else if (playerLower === computerSelection) {
      return "Tie game! Pick again.";
    } else {
      return "Oooops! Something went wrong somewhere along the line...";
    }
  }
  
  function playGame(rounds) {
      for (let i = 0; i < Number(rounds); i++) {
          console.log(playRound(prompt("Pick rock, paper, or scissors to begin"), ));
      }
  }

  playGame(prompt("Pick a number of times to play"));