const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

inputValue.addEventListener('input', insertsValue);

function insertsValue() {
  outputValue.textContent = inputValue.value;
  if (inputValue.value === '') {
    outputValue.textContent = 'Anonymous';
  }
}

//-------------------

// inputValue.addEventListener('input', () => {
//   // console.dir(inputValue.value);
//   outputValue.textContent = inputValue.value;
//   if (inputValue.value === '') {
//     outputValue.textContent = 'Anonymous';
//   }
// });
