const inputValue = document.querySelector('#validation-input');
const validValue = Number(inputValue.dataset.length);

inputValue.addEventListener('blur', (event) => {
  console.log(event.target.value.length);
  if (validValue === event.target.value.length) {
    if (event.target.classList.contains('invalid')) {
      event.target.classList.remove('invalid');
    }
    event.target.classList.add('valid');
    return;
  }

  if (event.target.classList.contains('valid')) {
    event.target.classList.remove('valid');
  }
  event.target.classList.add('invalid');
});

//?-- Як правильніше -- event.target - or - inputValue ---//

// inputValue.addEventListener('blur', (event) => {
//   console.log(inputValue.value.length);
//   if (validValue === inputValue.value.length) {
//     if (inputValue.classList.contains('invalid')) {
//       inputValue.classList.remove('invalid');
//     }
//     inputValue.classList.add('valid');
//     return;
//   }

//   if (inputValue.classList.contains('valid')) {
//     inputValue.classList.remove('valid');
//   }
//   inputValue.classList.add('invalid');
// });
