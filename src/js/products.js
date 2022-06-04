const refs = {
  sction: document.querySelector('.section-products'),
  img: document.querySelectorAll('.card__touch'),
};
let card = null;
let cards = null;

refs.sction.addEventListener('click', event => {
  const eve = event.target.closest('.card');
  if (!eve) {
    flipEnd();
    classRemove();
    return;
  } else if (event.target.closest('.activ-card')) {
    flipEnd();
    eve.classList.remove('activ-card');
    classRemove();
    return;
  }

  const activElement = document.querySelector('.activ-card');

  if (activElement) {
    flipEnd();
    classRemove();
  }

  cards = eve;
  card = eve.children;
  eve.classList.add('activ-card');
  card[1].style.transform = 'rotateY(180deg)';
  card[2].style.transform = 'rotateY(360deg)';
  for (const images of refs.img) {
    images.remove();
  }

  function classRemove() {
    cards.classList.remove('activ-card');
  }
});

function flipEnd() {
  card[1].style.transform = 'rotateY(0deg)';
  card[2].style.transform = 'rotateY(180deg)';
  card[1].classList.remove('activ-card');
}
