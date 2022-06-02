// import gallerBig from '../templares/gallery.hbs';

const refs = {
  section: document.querySelector('#carouselContainer'),
  img: document.querySelectorAll('.gallety-list__photo'),
};
// const z = refs.img[0].getAttribute('src')}
let galleryHtml = [];

for (let i = 0; i < refs.img.length; i++) {
  //   console.log('🚀 ~ z', z);
  //   const x = `<figure id="item${i + 1}" class="carouselItem trans3d">
  //   <div class="carouselItemInner trans3d">
  //   <img src="${
  //     refs.img[i].dataset.img
  //   }" class="gallety-list__photo-slid" loading="lazy"/>
  //       </div>
  //       </figure>`;

  const x = `<figure id="item${i + 1}" class="carouselItem trans3d">
  <div class="carouselItemInner trans3d">
  <img
              src="${refs.img[i].getAttribute('src')}"
              alt="ice coffee"
              class="gallety-list__photo"
              loading="lazy"
            />
      </div>
      </figure>`;

  galleryHtml.push(x);
}

console.log(galleryHtml);

refs.section.insertAdjacentHTML('beforeend', galleryHtml.join(''));

// const b = a.map((x, i) => {
//   `<figure id="item${
//     i + 1
//   }" class="carouselItem trans3d"><div class="carouselItemInner trans3d">
//   <img
//               src="${x.dataset}"
//               class="gallety-list__photo-slid"
//               loading="lazy"
//             />
//       </div>`;
// });
