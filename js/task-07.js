const inputValue = document.querySelector('#font-size-control');
const txtSpan = document.querySelector('#text');

inputValue.addEventListener('input', changeFontSize);

function changeFontSize() {
  // console.log(inputValue.value);
  txtSpan.style.fontSize = `${inputValue.value}px`;
}
