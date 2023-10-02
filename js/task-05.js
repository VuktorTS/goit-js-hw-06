const inputElement = document.querySelector("#name-input");
const spanOutputElement = document.querySelector("#name-output");

console.log(inputElement);

inputElement.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    spanOutputElement.textContent = "Anonymous";
    return;
  }
  spanOutputElement.textContent = event.currentTarget.value;
}
