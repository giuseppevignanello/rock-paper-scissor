// Elements
//player icons
const playerIconElements = document.querySelectorAll(".player_icon");
const playerIconElementsArray = Array.from(playerIconElements);

//cpu icons
const cpuIconElements = document.querySelectorAll(".cpu_icon");
const cpuIconElmentArray = Array.from(cpuIconElements);

//result section
const resultSection = document.getElementById("result");

//cpu and result
const cpuAndResultElement = document.getElementById("cpuAndResult");

//try again button
const tryAgainButton = document.getElementById("try_again");

let playerChoice = "";
let cpuChoiceIcon = "";

let playerIconClicked = false;

//click function
playerIconElementsArray.forEach((icon) => {
  icon.addEventListener("click", function () {
    if (!playerIconClicked) {
      //change "clicked" value
      playerIconClicked = !playerIconClicked;
      //change icon color
      playerChoice = icon;
      playerChoice.classList.add("bg_selected");
      // show the CPU and Result section
      cpuAndResultElement.classList.remove("d-none");
      //   change cpu choose color

      const cpuChoiceElement = cpuChoice();
      cpuIconElmentArray.forEach((icon) => {
        if (cpuChoiceElement === icon.id) {
          cpuChoiceIcon = icon;
          cpuChoiceIcon.classList.add("bg_selected");
        }
      });
      // winning situation
      if (
        (playerChoice.id === "rock_player" && cpuChoiceElement === "scissor") ||
        (playerChoice.id === "scissor_player" &&
          cpuChoiceElement === "paper") ||
        (playerChoice.id === "paper_player" && cpuChoiceElement === "rock")
      ) {
        resultSection.innerText = "You Win";
        resultSection.classList.add("bg-success");
      }

      //Losing situation
      else if (
        (playerChoice.id === "rock_player" && cpuChoiceElement === "paper") ||
        (playerChoice.id === "scissor_player" && cpuChoiceElement === "rock") ||
        (playerChoice.id === "paper_player" && cpuChoiceElement === "scissor")
      ) {
        resultSection.innerText = "You Lose";
        resultSection.classList.add("bg-danger");
      } else {
        resultSection.innerText = "Tie";
        resultSection.classList.add("bg_selected");
      }
    }
  });
});

//click on tryAgainButton
tryAgainButton.addEventListener("click", function () {
  playerIconClicked = !playerIconClicked;
  playerChoice.classList.remove("bg_selected");
  cpuChoiceIcon.classList.remove("bg_selected");
});

// cpu random Choice function
function randomFunction() {
  return Math.floor(Math.random() * 3);
}

function cpuChoice() {
  let numberChoice = randomFunction();
  if (numberChoice == 0) {
    return "paper";
  } else if (numberChoice == 1) {
    return "rock";
  } else if (numberChoice == 2) {
    return "scissor";
  }
}
