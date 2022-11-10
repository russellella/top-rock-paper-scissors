// Random computer selection - numerical value
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let result = getRndInteger(1, 4);

// Converts computer numerical value to selection
if (result == 1) {
    computerSelection = "rock";
  } else if (result == 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

// Temporary for testing - player input
const playerInput = "Rock";

// Makes playerSelection lowercase
let playerSelection = playerInput.toLowerCase();

// Comparisons for Win-Lose-Tie Messages
if ((playerSelection == "rock") && (computerSelection == "scissors")) {
  message = "You win! Rock beats Scissors.";
} else if ((playerSelection == "rock") && (computerSelection == "paper")) {
  message = "You lose! Paper beats Rock.";
} else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
  message = "You lose! Scissors beats paper.";
} else if ((playerSelection == "paper") && (computerSelection == "rock")) {
  message = "You win! Paper beats rock.";
} else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
  message = "You lose! Rock beats scissors.";
} else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
  message = "You win! Scissors beats paper.";
} else { message = "It's a tie!";
}

