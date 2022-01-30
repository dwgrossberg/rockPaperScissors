  
  //create three buttons, each with eventListeners
  //that call the playRound function with the correct playerSelection as its argument
  //display results through the DOM - new div
  //display a running score on the page
  //and announce the winner when one player reaches 5 points
  
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
  
  
  function reset () {
    let answer = prompt("Would you like to play again?");
    if (answer != null) {
      let currentUserPoints = Number(document.getElementById('userPoints').innerText);
      let currentComputerPoints = Number(document.getElementById('computerPoints').innerText);
      document.getElementById('winRound').innerText = '';
      document.getElementById('winGame').innerText = '';
      document.getElementById('computerPoints').innerText = 0;
      document.getElementById('userPoints').innerText = 0;
  } else {
    window.location.href = "https://www.wikihow.com/Play-Rock,-Paper,-Scissors";
  }
  }
  
  
  function updateUserPoints() {
    let currentUserPoints = Number(document.getElementById('userPoints').innerText);
    currentUserPoints += 1;
    let currentComputerPoints = Number(document.getElementById('computerPoints').innerText);
    if (currentComputerPoints === 5) {
      reset();
    } else if (currentUserPoints < 5) {
      document.getElementById('userPoints').innerText = currentUserPoints;
    } else if (currentUserPoints === 5) {
      document.getElementById('userPoints').innerText = currentUserPoints;
      document.getElementById('winGame').innerText = 'YOU WON!!!';
    } else {
    reset();
    }
    }
  
  
  function updateComputerPoints() {
    let currentComputerPoints = Number(document.getElementById('computerPoints').innerText);
    currentComputerPoints += 1;
    let currentUserPoints = Number(document.getElementById('userPoints').innerText);
    if (currentUserPoints === 5) {
      reset();
    } else if (currentComputerPoints < 5) {
      document.getElementById('computerPoints').innerText = currentComputerPoints;
    } else if (currentComputerPoints === 5) {
      document.getElementById('computerPoints').innerText = currentComputerPoints;
      document.getElementById('winGame').innerText = 'YOU WON!!!';
    } else {
    reset();
    }
    }
  
  
  function playRound(playerSelection, computerSelection) {
    if (!playerSelection) return;
    let playerLower = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    if (playerLower === "rock" && computerSelection === "paper") {
      updateComputerPoints();
      return "You loose " + computerSelection + " beats " + playerLower;
    } else if (playerLower === "rock" && computerSelection === "scissors") {
      updateUserPoints();
      return "You win " + playerLower + " beats " + computerSelection;
    } else if (playerLower === "paper" && computerSelection === "rock") {
      updateUserPoints();
      return "You win " + playerLower + " beats " + computerSelection;
    } else if (playerLower === "paper" && computerSelection === "scissors") {
      updateComputerPoints();
      return "You loose " + computerSelection + " beats " + playerLower;
    } else if (playerLower === "scissors" && computerSelection === "rock") {
      updateComputerPoints();
      return "You loose " + computerSelection + " beats " + playerLower;
    } else if (playerLower === "scissors" && computerSelection === "paper") {
      updateUserPoints();
      return "You win " + playerLower + " beats " + computerSelection;
    } else if (playerLower === computerSelection && (((Number(document.getElementById('userPoints').innerText)) === 5 ) || (Number(document.getElementById('computerPoints').innerText)) === 5)) {
      reset();
    } else if (playerLower === computerSelection) {
      return "Tie game! Pick again.";
    } else {
      return "Oooops! Something went wrong somewhere along the line...";
    }
  }
  
                        
  function onClick(e){
    let currentUserPoints = Number(document.getElementById('userPoints').innerText);
    let currentComputerPoints = Number(document.getElementById('computerPoints').innerText);  
    if ((e.target.id == "rock" || e.target.id == "paper" || e.target.id == "scissors") && (currentUserPoints === 5 || currentComputerPoints === 5)) {
      reset();
    } else if (e.target.id == "rock") {
      document.getElementById('winRound').innerText = playRound('rock', );
  } else if (e.target.id == "paper") {
      document.getElementById('winRound').innerText = playRound('paper', );
  } else if (e.target.id == "scissors") {
      document.getElementById('winRound').innerText = playRound('scissors', );
  }
  }
  
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => button.addEventListener('click', onClick));