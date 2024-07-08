import Accordion from 'accordion-js';
import Swiper from 'swiper/bundle';
import './js/covers';
import './js/modal';
import './js/modal-handlers';
import './js/projects';
import './js/faq';
import './js/header';
import './js/footer-script';
import './js/benefits';


// Скрипт для предотвращения мерцания изображений
document.querySelectorAll('.swiper-slide img').forEach(img => {
  img.onload = () => {
    img.classList.add('loaded'); // Добавляем класс после полной загрузки
  };
});

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
