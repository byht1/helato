const refs = {
  //   button: document.querySelectorAll('.button__arrow--size'),
  //   buttonEnd: document.querySelectorAll('.button__arrow--size-end'),
  //   card: document.querySelectorAll('.card'),
  list: document.querySelector('.products-list'),
};
let card = null;

let x = 0;

refs.list.addEventListener('click', event => {
  const eventName = event.target.nodeName;
  let button = null;

  if (eventName === 'svg') {
    const svg = event.target.parentNode;
    button = svg;
  } else if (eventName === 'use') {
    const use = event.target.parentNode;
    const svg = use.parentNode;
    button = svg;
  } else if (eventName === 'BUTTON') {
    button = event.target;
  } else {
    console.log('by');
    return;
  }

  if (x === 1) {
    flipEnd();
    x = 0;
    return;
  }

  card = document.querySelector(`#${button.dataset.id}`).children;
  card[0].style.transform = 'rotateY(180deg)';
  card[1].style.transform = 'rotateY(360deg)';
  x += 1;
});

function flipEnd() {
  card[0].style.transform = 'rotateY(0deg)';
  card[1].style.transform = 'rotateY(180deg)';
}
