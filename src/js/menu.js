const throttle = require('lodash.throttle');
const debounce = require('lodash.debounce');

const refs = {
  header: document.querySelector('header'),
  body: document.querySelector('body'),
  menu: document.querySelector('.header__menu'),
  end: document.querySelector('.header__menu-end'),
  nav: document.querySelector('#nav'),
  hero: document.querySelector('#hero'),
  // about: document.querySelector('#recepie'),
  // cow: document.querySelector('#how-it-made'),
  // product: document.querySelector('#section-products'),
  // contact: document.querySelector('#schedule'),
  // link: document.querySelectorAll('.nav-list__link'),
};

const arr = [];
arr.push(refs.hero);
arr.push(refs.about);
arr.push(refs.cow);
arr.push(refs.product);
arr.push(refs.contact);

refs.menu.addEventListener('click', () => {
  refs.nav.classList.toggle('nav--show');
  refs.body.classList.toggle('hidden');
});

refs.end.addEventListener('click', () => {
  refs.nav.classList.toggle('nav--show');
  refs.body.classList.toggle('hidden');
});

window.addEventListener(
  'scroll',
  throttle(eve => {
    const heroScrol = refs.hero.getBoundingClientRect();
    if (heroScrol.y > -60) {
      refs.header.removeAttribute('style');
      return;
    }
    refs.header.style.backgroundColor = '#00000060';
  }, 250)
);

// window.addEventListener(
//   'scroll',
//   debounce(() => {
//     scrolEvent();
//   }, 100)
// );

// function scrolEvent() {
//   for (let index = 0; index < 5; index++) {
//     let scrol = arr[index].getBoundingClientRect();
//     if (scrol.y <= height && scrol.y >= height * -1) {
//       refs.link[index].classList.add('nav-list__link--color');
//       return;
//     }
//     refs.link[index].classList.remove('nav-list__link--color');
//   }
// }
