const refs = {
  body: document.querySelector('body'),
  menu: document.querySelector('.header__menu'),
  burger: document.querySelector('.header__menu-burger'),
  end: document.querySelector('.header__menu-end'),
  nav: document.querySelector('#nav'),
};

refs.menu.addEventListener('click', () => {
  refs.burger.classList.toggle('is-open');
  refs.end.classList.toggle('is-open');
  refs.nav.classList.toggle('nav--show');
  refs.nav.classList.toggle('visually-hidden-two');
  setTimeout(() => {
    refs.body.classList.toggle('hidden');
  }, 250);
});
