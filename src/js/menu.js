const throttle = require('lodash.throttle');

const refs = {
  header: document.querySelector('header'),
  body: document.querySelector('body'),
  menu: document.querySelector('.header__menu'),
  end: document.querySelector('.header__menu-end'),
  nav: document.querySelector('#nav'),
  hero: document.querySelector('#hero'),
  about: document.querySelector('#recepie'),
  cow: document.querySelector('#how-it-made'),
  product: document.querySelector('#section-products'),
  contact: document.querySelector('#schedule'),
  link: document.querySelectorAll('.nav-list__link'),
};
const height = window.outerHeight / 2;

const arr = [];
arr.push(refs.hero);
arr.push(refs.about);
arr.push(refs.cow);
arr.push(refs.product);
arr.push(refs.contact);

scrolEvent();

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

window.addEventListener(
  'scroll',
  throttle(eve => {
    scrolEvent(eve);
  }, 100)
);

function scrolEvent() {
  for (let i = 0; i > 5; i++) {
    const scrol = arr[i].getBoundingClientRect();
    console.log('🚀 ~ scroll', scrol);

    if (scrol >= height && scrol <= height * -2) {
      refs.link[i].classList.add('nav-list__link--color');
    }
    refs.link[i].classList.remove('nav-list__link--color');
  }
}
