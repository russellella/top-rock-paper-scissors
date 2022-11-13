
// PlayerInput prompt - WORKS
let playerInput = prompt("Type rock, paper, or scissors")

// Makes playerSelection lowercase - WORKS
const playerSelection = playerInput.toLowerCase();

// Returns Computer Selection - WORKS
function getComputerSelection() {
  let result = Math.floor(Math.random() * 3);
  if (result === 0) {
    return "rock";
  } else if (result === 1) {
    return "paper";
  } else if (result === 2) {
    return "scissors";
  } else {
    return "uh oh";
  }
}

// Plays 1 Round of RPS - WORKS
// CHECK IF TIE COUNTS AS ROUND
function playRound() {
  let computerSelection = getComputerSelection();
  if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    return "You win this round! Rock beats Scissors.";
  } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
    return "You lose this round! Paper beats Rock.";
  } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
    return "You lose this round! Scissors beats paper.";
  } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
    return "You win this round! Paper beats rock.";
  } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
    return "You lose this round! Rock beats scissors.";
  } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    return "You win this round! Scissors beats paper.";
  } else if (((playerSelection == "scissors") && (computerSelection == "scissors"))
          || ((playerSelection == "rock") && (computerSelection == "rock"))
          || ((playerSelection == "paper") && (computerSelection == "paper"))) {
    return "It's a tie!";
  } else {
    return "Oops, that doesn't work!";
  }
}


/*
function game() {
  for (let i = 0; i < 5; i++) {
  playRound();
  
}
}
*/
