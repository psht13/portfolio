import Accordion from 'accordion-js';
import Swiper from 'swiper/bundle';
import AOS from 'aos';

import './js/covers';
import './js/modal';
import './js/modal-handlers';
import './js/projects';
import './js/faq';
import './js/header';
import './js/footer-script';
import './js/benefits';
import './js/reviews-api-request';
import './js/reviews-script';
import './js/reviews-swiper';

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
  direction: 'horizontal',
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
    768: {
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

// Анімації

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
