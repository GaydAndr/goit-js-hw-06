function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.background = color;
  span.textContent = color;
});

// function changeBodyColor() {
//   const color = getRandomHexColor();
//   document.body.style.background = getRandomHexColor();
//   btn.previousElementSibling.firstElementChild.textContent = color;
// }
