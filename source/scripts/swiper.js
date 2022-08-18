import Swiper, { Navigation, Pagination, Thumbs} from 'swiper';

const promoThumbs = new Swiper('.promo__thumbs', {
  slidesPerView: 2,
  freeMode: true,
  watchSlidesVisibility: true,
  // loop: true,
});

const swiper = new Swiper('.promo__slider', {
  modules: [Navigation, Pagination, Thumbs],
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  thumbs: {
    swiper: promoThumbs,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function () {
      return '<button class="swiper-pagination-bullet"></button>';
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const colors = ['#FEAFC3', '#69A9FF', '#FCC850'];
// const classes = document.querySelectorAll('.promo__slide.swiper-slide');
// console.log(classes.dataset.color);

swiper.on('transitionEnd', function() {
  document.body.style.backgroundColor = colors[this.realIndex];
  document.body.style.transition = 'background-color 0.3s';
  document.querySelector('.color').style.background = `linear-gradient(${colors[this.realIndex]}, 30%, white)`;
});
