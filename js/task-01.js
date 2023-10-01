const arrLiElemints = document.querySelectorAll(".item");
console.log(`Number of categories: ${arrLiElemints.length}`);

arrLiElemints.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
