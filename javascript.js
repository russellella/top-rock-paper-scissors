// PlayerInput prompt - WORKS
let playerInput = prompt("Type rock, paper, or scissors")

// Random computer selection - numerical value - WORKS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let result = getRndInteger(1, 4);

// Converts computer numerical value to selection - WORKS
if (result == 1) {
    computerSelection = "rock";
  } else if (result == 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

/* DISABLED for testing
const playerInput = "Rock";
*/

// Makes playerSelection lowercase - WORKS
const playerSelection = playerInput.toLowerCase();

// Plays a round and returns a message - WORKS

function playRound(playerSelection, computerSelection) {
  if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    return "You win! Rock beats Scissors.";
  } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
    return "You lose! Paper beats Rock.";
  } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
    return "You lose! Scissors beats paper.";
  } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
    return "You win! Paper beats rock.";
  } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
    return "You lose! Rock beats scissors.";
  } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    return "You win! Scissors beats paper.";
  } else { return "It's a tie!";
  }
}

console.log(playRound(playerSelection, computerSelection));

/* Testing Area 
function game(playRound) {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
  }
}
*/


