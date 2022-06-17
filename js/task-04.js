const counterValue = document.querySelector('#value');

let count = 0;
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

function changeCounter(num) {
  // counterValue.innerHTML = num;
  counterValue.textContent = num;
}

// const addition = () => {
//   count += 1;
//   innerHTML(count);
// };
// const subtraction = () => {
//   count -= 1;
//   innerHTML(count);
// };

//---------------

function subtraction() {
  count -= 1;
  changeCounter(count);
}
function addition() {
  count += 1;
  changeCounter(count);
}
//-----------------
decrement.addEventListener('click', subtraction);
increment.addEventListener('click', addition);
