const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElement = document.querySelector("#ingredients");

const arrNewLiElements = ingredients.map((ingredient) => {
  const newLiElement = document.createElement("li");
  newLiElement.classList.add("item");
  newLiElement.textContent = ingredient;
  return newLiElement;
});
listElement.append(...arrNewLiElements);
