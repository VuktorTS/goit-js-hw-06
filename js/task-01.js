const arrLiElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${arrLiElements.length}`);

arrLiElements.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
