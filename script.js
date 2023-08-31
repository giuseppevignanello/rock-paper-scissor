// Elements
//player icons
const playerIconElements = document.querySelectorAll(".player_icon");
const playerIconElementsArray = Array.from(playerIconElements);

//cpu icons
const cpuIconElements = document.querySelectorAll(".cpu_icon");
const cpuIconElmentArray = Array.from(cpuIconElements);

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
      icon.classList.add("bg_green");
      // show the CPU and Result section
      cpuAndResultElement.classList.remove("d-none");
      //   change cpu choose color

      const cpuChooseElement = cpuChoose();
      cpuIconElmentArray.forEach((icon) => {
        if (cpuChooseElement === icon.id) {
          icon.classList.add("bg_red");
        }
      });
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
