const playerIconElements = document.querySelectorAll(".player_icon");
const playerIconElementsArray = Array.from(playerIconElements);
let playerIconClicked = false;

playerIconElementsArray.forEach((icon) => {
  icon.addEventListener("click", function () {
    if (!playerIconClicked) {
      playerIconClicked = !playerIconClicked;
      icon.classList.add("bg_green");
    }
  });
});
