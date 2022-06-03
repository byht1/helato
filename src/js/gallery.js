import { init } from './gallerySlide';

const refs = {
  slideGalledy: document.querySelector('.slaid-gallery'),
  divGallery: document.querySelector('#contentContainer'),
  section: document.querySelector('#carouselContainer'),
  list: document.querySelector('.gallery-list'),
  img: document.querySelectorAll('.gallety-list__photo'),
  body: document.querySelector('body'),
};

let galleryHtml = [];

refs.list.addEventListener('click', generHTML);
refs.divGallery.addEventListener('click', end);

function generHTML() {
  galleryHtml = [];
  refs.slideGalledy.classList.toggle('is-hidden');
  refs.body.classList.add('modal-boby');

  console.log('hi');

  fotArr();

  const section = document.querySelector('#carouselContainer');

  section.insertAdjacentHTML('beforeend', galleryHtml.join(''));
  init();
}

function fotArr() {
  for (let i = 0; i < refs.img.length; i++) {
    const x = `<figure id="item${i + 1}" class="carouselItem trans3d">
    <div class="carouselItemInner trans3d">
      <img
      src="${refs.img[i].getAttribute('src')}"
      alt="ice coffee"
      class="gallety-list__photo gallety-list__photo-big"
      loading="lazy"/>
    </div>
  </figure>`;
    galleryHtml.push(x);
  }

  refs.divGallery.insertAdjacentHTML(
    'beforeend',
    `<section id="carouselContainer" class="trans3d"></section>`
  );
}

function end() {
  if (event.target.nodeName === 'IMG') {
    return;
  }
  refs.body.classList.remove('modal-boby');
  refs.slideGalledy.classList.toggle('is-hidden');
  refs.divGallery.innerHTML = '';
}
