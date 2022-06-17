const inputValue = document.querySelector('#validation-input');
const validValue = Number(inputValue.dataset.length);

inputValue.addEventListener('blur', () => {
  console.dir(inputValue.value.length);
  if (validValue === inputValue.value.length) {
    if (inputValue.classList.contains('invalid')) {
      inputValue.classList.remove('invalid');
    }
    inputValue.classList.add('valid');
    return;
  }

  if (inputValue.classList.contains('valid')) {
    inputValue.classList.remove('valid');
  }
  inputValue.classList.add('invalid');
});
