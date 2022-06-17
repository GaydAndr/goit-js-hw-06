const inputValue = document.querySelector('#font-size-control');
const txtSpan = document.querySelector('#text');

inputValue.addEventListener('input', changeFontSize);

function changeFontSize() {
  // 1
  txtSpan.style.fontSize = `${inputValue.value}px`;
}

// function changeFontSize(event) {  // 2
//   txtSpan.style.fontSize = `${event.target.value}px`;
// }
