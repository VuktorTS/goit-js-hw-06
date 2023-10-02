let counterValue = 0;
const buttonIncrementsCounter = document.querySelector(
  "[data-action='decrement']"
);
const buttonDecrementsCounter = document.querySelector(
  "[data-action='increment']"
);
const spanElement = document.querySelector("#value");

buttonIncrementsCounter.addEventListener("click", () => {
  counterValue -= 1;
  spanElement.textContent = counterValue;
});

buttonDecrementsCounter.addEventListener("click", () => {
  counterValue += 1;
  spanElement.textContent = counterValue;
});
