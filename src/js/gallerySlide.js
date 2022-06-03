// set and cache variables
let w, container, carousel, item, radius, itemLength, rY, ticker;
let mouseX = 0;
let mouseY = 0;
let mouseZ = 0;
let addX = 0;

export function two() {
  $(document).ready(init);
}

export function init() {
  w = $(window);
  container = $('#contentContainer');
  carousel = $('#carouselContainer');
  item = $('.carouselItem');
  itemLength = $('.carouselItem').length;
  rY = 360 / itemLength;
  radius = Math.round(250 / Math.tan(Math.PI / itemLength));

  // set container 3d props
  TweenMax.set(container, { perspective: 5000 });
  TweenMax.set(carousel, { z: -radius * 2 });

  // create carousel item props

  for (var i = 0; i < itemLength; i++) {
    let $item = item.eq(i);
    let $block = $item.find('.carouselItemInner');

    //thanks @chrisgannon!
    TweenMax.set($item, {
      rotationY: rY * i,
      z: radius,
      transformOrigin: '50% 50% ' + -radius + 'px',
    });

    animateIn($item, $block);
  }

  // set mouse x and y props and looper ticker
  window.addEventListener('mousemove', onMouseMove, false);
  ticker = setInterval(looper, 1000 / 60);
}

export function animateIn($item, $block) {
  let $nrX = 360 * getRandomInt(2);
  let $nrY = 360 * getRandomInt(2);

  let $nx = -2000 + getRandomInt(4000);
  let $ny = -2000 + getRandomInt(4000);
  let $nz = -4000 + getRandomInt(4000);

  let $s = 1.5 + getRandomInt(10) * 0.8;
  let $d = 1 - getRandomInt(8) * 0.1;

  TweenMax.set($item, { autoAlpha: 1, delay: $d });
  TweenMax.set($block, {
    z: $nz,
    rotationY: $nrY,
    rotationX: $nrX,
    x: $nx,
    y: $ny,
    autoAlpha: 0,
  });
  TweenMax.to($block, $s, {
    delay: $d,
    rotationY: 0,
    rotationX: 0,
    z: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.to($block, $s - 0.5, {
    delay: $d,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: Expo.easeInOut,
  });
}

// Оюертає
export function onMouseMove(event) {
  mouseX = -(-(window.innerWidth * 0.5) + event.pageX) * 0.0015;
  mouseY = -(-(5000 * 0.5) + event.pageY) * 0.01;
  mouseZ =
    -radius - (Math.abs(-(window.innerHeight * 0.5) + event.pageY) - 200);
}

// Автоматичний оберт
export function looper() {
  addX += mouseX;
  TweenMax.to(carousel, 1, {
    rotationY: addX,
    rotationX: mouseY,
    ease: Quint.easeOut,
  });
  TweenMax.set(carousel, { z: mouseZ });
}

export function getRandomInt($n) {
  return Math.floor(Math.random() * $n + 1);
}
