const counterValue = document.querySelector('#value');
console.log(counterValue);
let count = 0;
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

function innerHTML(num) {
  counterValue.innerHTML = num;
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
  innerHTML(count);
}
function addition() {
  count += 1;
  innerHTML(count);
}
//-----------------
decrement.addEventListener('click', subtraction);
increment.addEventListener('click', addition);
