import Swiper, { Navigation, Pagination, Thumbs} from 'swiper';
const slider = document.querySelectorAll('.promo__slide');
const colors = Array.from(slider);

const promoThumbs = new Swiper('.promo__thumbs', {
  slidesPerView: 2,
  freeMode: true,
  watchSlidesVisibility: true,
});

const swiper = new Swiper('.promo__slider', {
  modules: [Navigation, Pagination, Thumbs],
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

// Переключение цвета
swiper.on('transitionEnd', function() {
  document.body.style.backgroundColor = colors[this.realIndex].dataset.color;
  document.body.style.transition = 'background-color 0.3s';
  document.querySelector('.color').style.background = `linear-gradient(${colors[this.realIndex].dataset.color}, 30%, white)`;
});
