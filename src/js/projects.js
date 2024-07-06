// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation'; 

   const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
   modules: [Navigation, Keyboard, Mousewheel],
    watchSlidesProgress: true,
    grabCursor: true,
    autoplay: {
    delay: 2500,
      disableOnInteraction: false,
    },
      keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
    mousewheel: true,
  // Navigation arrows
    navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
    },  
 });

 function updateNavigationButtons() {
  const nextButton = document.querySelector('.button-next');
  const prevButton = document.querySelector('.button-prev');
  
  if (swiper2.isEnd) {
    nextButton.classList.add('swiper-button-disabled');
    nextButton.setAttribute('disabled', true);
  } else {
    nextButton.classList.remove('swiper-button-disabled');
    nextButton.removeAttribute('disabled');
  }

  if (swiper2.isBeginning) {
    prevButton.classList.add('swiper-button-disabled');
    prevButton.setAttribute('disabled', true);
  } else {
    prevButton.classList.remove('swiper-button-disabled');
    prevButton.removeAttribute('disabled');
  }
}

swiper2.on('slideChange', updateNavigationButtons);
updateNavigationButtons();