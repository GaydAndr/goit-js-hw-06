function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls').firstElementChild,
  // createBtn: document.querySelector('[data-create]'),
  // destroyBtn: document.querySelector('[data-destroy]'),
  btns: document.querySelectorAll('button'),
  boxes: document.querySelector('#boxes'),
};

refs.btns.forEach((elem) => {
  elem.addEventListener('click', watchBtn);
});

function watchBtn(event) {
  const btnValue = Object.keys(event.target.dataset);
  if (btnValue[0] === 'create') {
    createBoxes(watchInput());
    return;
  }
  destroyBoxes();
  // console.log(Object.keys(event.target.dataset));
}

function watchInput() {
  // console.log(refs.input.value);
  return refs.input.value;
}

function createBoxes(amount) {
  // console.log(amount);
  if (amount > 100) {
    alert('Too much');
    return;
  }

  let divs = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    const color = getRandomHexColor();

    divEl.style.background = color;
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;

    width += 10;
    height += 10;

    divEl.textContent = 11;
    divs.push(divEl);

    // refs.boxes.append(divEl);
  }

  refs.boxes.append(...divs);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}
