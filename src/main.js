
import Accordion from 'accordion-js';
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
  navigation: {
    nextEl: '.js-about-slider-arrow',
    // prevEl: '.swiper-button-prev',
  },
});

