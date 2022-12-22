// RPS Buttons
const btn = document.querySelectorAll("button");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id); // change to (img.id)?
  });
});

  // Player Score - Starting
  let x = 0;
  // Computer Score - Starting
  let y = 0;

// Computer Selection
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

  // Plays 1 Round of RPS 
  function playRound(playerSelection) {
    let computerSelection = getComputerSelection();
    
    if ((playerSelection == "rock") && (computerSelection == "scissors")) {
      x++;
      let results = document.getElementById("roundresults").innerText = ("You win this round! Rock beats Scissors.");
      document.getElementById("score").innerText = ("You: " + x + " Computer: " + y);
      console.log("You win this round! Rock beats Scissors. You: " + x + " Computer: " + y);
      gameResults();
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
      y++;
      let results = document.getElementById("roundresults").innerText = ("You lose this round! Paper beats Rock.");
      document.getElementById("score").innerText = ("You: " + x + " Computer: " + y);
      console.log("You lose this round! Paper beats Rock. You: " + x + " Computer: " + y);
      gameResults();
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
      y++;
      let results = document.getElementById("roundresults").innerText = ("You lose this round! Scissors beats paper.");
      document.getElementById("score").innerText = ("You: " + x + " Computer: " + y);
      console.log("You lose this round! Scissors beats paper. You: " + x + " Computer: " + y);
      gameResults();
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
      x++;
      let results = document.getElementById("roundresults").innerText = ("You win this round! Paper beats rock.");
      document.getElementById("score").innerText = ("You: " + x + " Computer: " + y);
      console.log("You win this round! Paper beats rock. You: " + x + " Computer: " + y);
      gameResults();
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
      y++;
      let results = document.getElementById("roundresults").innerText = ("You lose this round! Rock beats scissors.");
      document.getElementById("score").innerText = ("You: " + x + " Computer: " + y);
      console.log("You lose this round! Rock beats scissors. You: " + x + " Computer: " + y);
      gameResults();
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
      x++;
      let results = document.getElementById("roundresults").innerText = ("You win this round! Scissors beats paper.");
      document.getElementById("score").innerText = ("You: " + x + " Computer: " + y);
      console.log("You win this round! Scissors beats paper.");
      gameResults();
    } else if (((playerSelection == "scissors") && (computerSelection == "scissors"))
            || ((playerSelection == "rock") && (computerSelection == "rock"))
            || ((playerSelection == "paper") && (computerSelection == "paper"))) {
              let results = document.getElementById("roundresults").innerText = ("This round is a tie!");
              document.getElementById("score").innerText = ("You: " + x + " Computer: " + y);
              console.log("This round is a tie! You: " + x + " Computer: " + y);
              gameResults();
    } else {
      console.log("Round Uh Oh!");
    }
}
  
  
function gameResults () {
  if (x >= 5) {
    document.getElementById("roundresults").innerText = ("");
    document.getElementById("gameresults").innerText = ("Victory!");
    document.getElementById("score").innerText = ("You: " + x + " Computer: " + y);
  } else if (y >=5) {
    document.getElementById("roundresults").innerText = ("");
    document.getElementById("gameresults").innerText = ("Defeat!");
    document.getElementById("score").innerText = ("You: " + x + " Computer: " + y);
  }
}


