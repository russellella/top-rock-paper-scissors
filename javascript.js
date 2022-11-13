// Returns Computer Selection - WORKS
function getComputerSelection() {
  let result = Math.floor(Math.random() * 3);
  if (result === 0) {
    return "rock";
  } else if (result === 1) {
    return "paper";
  } else if (result === 2) {
    return "scissors";
  }
  // For bug testing
  else {
    return "getComputerSelection Uh Oh!";
  }
}

// Plays 1 Round of RPS - WORKS
function playRound() {

  // PlayerInput prompt - WORKS
  let playerInput = prompt("Type rock, paper, or scissors")

  // Makes playerSelection lowercase - WORKS
  let playerSelection = playerInput.toLowerCase();

  // Runs getComputerSelection function
  let computerSelection = getComputerSelection();

  // If/Else for scores
  if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    x++;
    return "You win this round! Rock beats Scissors. You: " + x + " Computer: " + y;
  } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
    y++;
    return "You lose this round! Paper beats Rock. You: " + x + " Computer: " + y;
  } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
    y++;
    return "You lose this round! Scissors beats paper. You: " + x + " Computer: " + y;
  } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
    x++;
    return "You win this round! Paper beats rock. You: " + x + " Computer: " + y;
  } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
    y++;
    return "You lose this round! Rock beats scissors. You: " + x + " Computer: " + y;
  } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    x++;
    return "You win this round! Scissors beats paper. You: " + x + " Computer: " + y;
  } else if (((playerSelection == "scissors") && (computerSelection == "scissors"))
          || ((playerSelection == "rock") && (computerSelection == "rock"))
          || ((playerSelection == "paper") && (computerSelection == "paper"))) {
    return "This round is a tie! You: " + x + " Computer: " + y;
  } else {
    return "Round Uh Oh!";
  }
}

// Player Score - Starting
let x = 0;
// Computer Score - Starting
let y = 0;

// Game Play
function game() {
  for (let i = 0; i < 5; i++) {
  console.log(playRound());
}
if (x > y) {
  return "You win the game! You: " + x + " Computer: " + y;
} else if (x < y) {
  return "You lose the game :( You: " + x + " Computer: " + y;
} else if (x = y) {
  return "This game is a tie! You: " + x + " Computer: " + y;
} else {
  return "Game Uh Oh!"
}
}
