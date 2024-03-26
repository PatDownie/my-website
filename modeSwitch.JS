const leftBTN = document.getElementById("leftBTN");
const rightBTN = document.getElementById("rightBTN");
const pageContainer = document.getElementById("pageContainer");

const lightModeIcon = document.getElementById("lightModeIcon");
const darkModeIcon = document.getElementById("darkModeIcon");
const clownModeIcon = document.getElementById("clownModeIcon");

let currentMode = 0;
let leftOrRight = "";
let iconArray = [lightModeIcon, darkModeIcon, clownModeIcon];

console.log(iconArray[1]);

//0 = light, 1 = dark, 2 = rainbow

function incrementMode() {
  if (currentMode === 2) {
    currentMode = 0;
  } else {
    currentMode++;
  }
}

function decrementMode() {
  if (currentMode === 0) {
    currentMode = 2;
  } else {
    currentMode--;
  }
}

function changeMode() {
  if (currentMode === 0) {
    pageContainer.className = "lightMode";
  } else if (currentMode === 1) {
    pageContainer.className = "darkMode";
  } else if (currentMode === 2) {
    pageContainer.className = "clownMode";
  }
}

function updateIcons1() {
  if (leftOrRight === "left") {
    iconArray[currentMode].className = "leaveRight";
  } else {
    iconArray[currentMode].className = "leaveLeft";
  }
}

function updateIcons2() {
  if (leftOrRight === "left") {
    iconArray[currentMode].className = "enterLeft";
  } else {
    iconArray[currentMode].className = "enterRight";
  }
}

function rightBtnPress() {
  leftOrRight = "right";
  updateIcons1();
  incrementMode();
  updateIcons2();
  changeMode();
}

function leftBtnPress() {
  leftOrRight = "left";
  updateIcons1();
  decrementMode();
  updateIcons2();
  changeMode();
}

rightBTN.addEventListener("click", rightBtnPress);

leftBTN.addEventListener("click", leftBtnPress);
