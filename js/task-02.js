const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector('#ingredients');

const liItems = ingredients.map((element) => {
  const liElem = document.createElement('li');
  liElem.classList.add('item');
  liElem.textContent = `${element}`;
  // console.log(liElem);
  return liElem;
});
// console.log(liItems);

ulElement.append(...liItems);

// ingredients.forEach((element) => {
//   const liElement = document.createElement('li');
//   liElement.textContent = `${element}`;
//   liElement.classList.add('item');
//   console.log(liElement);
//   ulElement.appendChild(liElement);
// });
