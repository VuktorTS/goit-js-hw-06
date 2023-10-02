const inputControl = document.querySelector("#font-size-control");
const spanTextElement = document.querySelector("#text");

inputControl.addEventListener("input", (event) => {
  spanTextElement.style.fontSize = `${event.currentTarget.value}px`;
});
