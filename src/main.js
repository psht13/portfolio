import Accordion from 'accordion-js';

import Swiper from 'swiper/bundle';
import './js/projects';

new Accordion('.accordion-container', {
  openOnInit: [0],
});

var swiper1 = new Swiper('.swiper1', {
  slidesPerView: 6,
  spaceBetween: 0,
  loop: true,
  mousewheel: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    769: {
      slidesPerView: 3,
    },

    // when window width is >= 640px
    1440: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: '.js-about-slider-arrow',
    // prevEl: '.swiper-button-prev',
  },
});

