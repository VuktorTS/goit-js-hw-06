function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBoxes = document.querySelector("#boxes");
const refs = {};
let stepSizeDiv = 30;
function createBoxes(amount) {
  const divArr = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = stepSizeDiv + "px";
    div.style.height = stepSizeDiv + "px";
    div.style.backgroundColor = getRandomHexColor();
    divArr.push(div);
    stepSizeDiv += 10;
  }
  // divBoxes.innerHTML = "";
  divBoxes.append(...divArr);
}

const inputElement = document.querySelector("#controls > input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", (event) => {
  if (inputElement.value <= 100 && inputElement.value > 0) {
    createBoxes(inputElement.value);
    // inputElement.value = "";
  } else {
    console.log("ERROR");
  }
});
destroyBtn.addEventListener("click", (event) => {
  divBoxes.innerHTML = "";
  stepSizeDiv = 30;
});
