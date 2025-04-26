function getComputerChoice() {
  let random = Math.random();
  // console.log(random);        ***** just to see if the random function works fine ****
  let randomResult;
  if (random <= 0.33) {
    randomResult = "rock";
  } else if (random >= 0.34 && random <= 0.66) {
    randomResult = "paper";
  } else {
    randomResult = "scissors";
  }
  console.log(`***Copmuter Choice is ${randomResult}***`);
  return randomResult;
}
// console.log(getComputerChoice());            ***** just to see if the random function works fine ****

function getHumanChoice() {
  let humanPropmt = prompt("Enter Your Choice : ", "");
  return humanPropmt;
}

// console.log(getHumanChoice()); //     ***** just to see if the function works fine ****

function playGame() {
  function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();

    let winnerSelection;

    if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        winnerSelection = "Human";
      } else if (computerChoice === "paper") {
        winnerSelection = "Computer";
      } else {
        winnerSelection = "Draw";
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        winnerSelection = "Human";
      } else if (computerChoice === "scissors") {
        winnerSelection = "Computer";
      } else {
        winnerSelection = "Draw";
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        winnerSelection = "Human";
      } else if (computerChoice === "rock") {
        winnerSelection = "Computer";
      } else {
        winnerSelection = "Draw";
      }
    } else {
      alert("Wrong input, only use ROCK-PAPER-SCISSORS");
    }
    return winnerSelection;
  }

  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i <= 4; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    let roundWinner = playRound(humanSelection, computerSelection);

    if (roundWinner === "Human") {
      humanScore++;
    } else if (roundWinner === "Computer") {
      computerScore++;
    } else {
      console.log("Draw!");
      i--; // this line minus -1 from loop and makes sure that game is 5 rounds - without Draw rounds also counts and makse game less than 5 rounds. works great even for the loop with wrong entry.
    }
  }
  if (humanScore > computerScore) {
    alert("HUMAN IS WINNER!");
  } else if (humanScore < computerScore) {
    alert("COMPUTER IS WINNER!");
  } else {
    alert("*** DRAW ***");
  }
  console.log(`HUMAN : ${humanScore}\nCOMPUTER : ${computerScore}`);
}

playGame();
