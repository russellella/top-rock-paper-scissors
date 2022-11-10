
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let result = getRndInteger(1, 4);


if (result == 1) {
    computerChoice = "Rock";
  } else if (result == 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }


