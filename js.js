//                  ************* START *************
// let round = document.querySelector("input").value;
// ***ROUNDS WINNER***
const pointContainer = document.querySelector(".points-container");
const humanPointDiv = document.querySelector(".human-points");
const computerPointDiv = document.querySelector(".computer-points");
let winnerAnnounce = document.createElement("h3");
winnerAnnounce.setAttribute("style", "color:var(--red); padding:1rem;");
//  ********

const reset = document.querySelector(".reload");

const computerChoiceDiv = document.querySelector(".computer-choice");
const computerChoiceLbl = document.createElement("label");
computerChoiceDiv.appendChild(computerChoiceLbl);
const humanPoint = document.querySelector(".human-point-label");
const computerPoint = document.querySelector(".computer-point-label");
humanPoint.textContent = 0;
computerPoint.textContent = 0;
const buttons = document.querySelectorAll(".contentP");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.textContent.toLowerCase();

    function getComputerChoice() {
      let random = Math.random();
      let randomResult;
      if (random <= 0.33) {
        randomResult = "rock";
      } else if (random >= 0.34 && random <= 0.66) {
        randomResult = "paper";
      } else {
        randomResult = "scissors";
      }

      if (
        computerChoiceLbl.textContent == "" ||
        computerChoiceLbl.textContent == null
      ) {
        computerChoiceLbl.textContent = `Copmuter Choice is : ${randomResult}`;
      } else {
        computerChoiceLbl.textContent === "";
        computerChoiceLbl.textContent = `Copmuter Choice is : ${randomResult}`;
      }

      return randomResult;
    }

    function playGame() {
      function playRound(humanChoice, computerChoice) {
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
        }

        return winnerSelection;
      }

      // for (let i = 0; i <= 4; i++) {
      const humanSelection = humanChoice;
      const computerSelection = getComputerChoice();

      let roundWinner = playRound(humanSelection, computerSelection);

      if (roundWinner === "Human") {
        // humanScore++;
        humanPoint.textContent++;
      } else if (roundWinner === "Computer") {
        // computerScore++;
        computerPoint.textContent++;
      } else {
        console.log("Draw!");
      }
    }
    //         **** ROUNDS ****
    if (humanPoint.textContent == 5 || computerPoint.textContent == 5) {
      if (humanPoint.textContent > computerPoint.textContent) {
        humanPointDiv.style.display = "none";
        computerPointDiv.style.display = "none";
        winnerAnnounce.textContent = "YOU ARE THE WINNER";
        pointContainer.appendChild(winnerAnnounce);
        reset.style.display = "block";
      } else if (humanPoint.textContent < computerPoint.textContent) {
        humanPointDiv.style.display = "none";
        computerPointDiv.style.display = "none";
        winnerAnnounce.textContent = "YOU ARE THE Loser";
        pointContainer.appendChild(winnerAnnounce);
        reset.style.display = "block";
      } else {
        humanPointDiv.style.display = "none";
        computerPointDiv.style.display = "none";
        winnerAnnounce.textContent = "DRAW";
        pointContainer.appendChild(winnerAnnounce);
        reset.style.display = "block";
      }
    }

    playGame();
  });
});

reset.addEventListener("click", () => {
  location.reload();
});
