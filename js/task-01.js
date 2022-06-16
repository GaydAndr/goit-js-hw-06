const ulElement = document.querySelector('#categories');
const allCategories = [...ulElement.children];
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
