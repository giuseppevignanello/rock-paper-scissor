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

let playerIconClicked = false;

//click function
playerIconElementsArray.forEach((icon) => {
  icon.addEventListener("click", function () {
    if (!playerIconClicked) {
      //change "clicked" value
      playerIconClicked = !playerIconClicked;
      //change icon color
      icon.classList.add("bg_selected");
      // show the CPU and Result section
      cpuAndResultElement.classList.remove("d-none");
      //   change cpu choose color

      const cpuChooseElement = cpuChoose();
      cpuIconElmentArray.forEach((icon) => {
        if (cpuChooseElement === icon.id) {
          icon.classList.add("bg_selected");
        }
      });
      // winning situation
      if (
        (icon.id === "rock_player" && cpuChooseElement === "scissor") ||
        (icon.id === "scissor_player" && cpuChooseElement === "paper") ||
        (icon.id === "paper_player" && cpuChooseElement === "rock")
      ) {
        resultSection.innerText = "You Win";
        resultSection.classList.add("bg-success");
      }

      //Losing situation
      else if (
        (icon.id === "rock_player" && cpuChooseElement === "paper") ||
        (icon.id === "scissor_player" && cpuChooseElement === "rock") ||
        (icon.id === "paper_player" && cpuChooseElement === "scissor")
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

// cpu random choose function
function randomFunction() {
  return Math.floor(Math.random() * 3);
}

function cpuChoose() {
  let numberChoose = randomFunction();
  if (numberChoose == 0) {
    return "paper";
  } else if (numberChoose == 1) {
    return "rock";
  } else if (numberChoose == 2) {
    return "scissor";
  }
}
