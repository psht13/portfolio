import Swiper from 'swiper/bundle';

export function swiperInitialize() {
  const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 4,
    spaceBetween: 24,
    direction: 'horizontal',
    mousewheel: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
  });

  swiper3.on('slideChange', updateNavigationButtons);
  updateNavigationButtons();

  function updateNavigationButtons() {
    const nextButton = document.querySelector('.reviews-button-next');
    const prevButton = document.querySelector('.reviews-button-prev');

    if (swiper3.isEnd) {
      nextButton.classList.add('reviews-button-disabled');
      nextButton.setAttribute('disabled', true);
    } else {
      nextButton.classList.remove('reviews-button-disabled');
      nextButton.removeAttribute('disabled');
    }

    if (swiper3.isBeginning) {
      prevButton.classList.add('reviews-button-disabled');
      prevButton.setAttribute('disabled', true);
    } else {
      prevButton.classList.remove('reviews-button-disabled');
      prevButton.removeAttribute('disabled');
    }
  }

  document.querySelectorAll('.swiper3 .swiper-slide img').forEach(image => {
    image.addEventListener('click', () => {
      swiper2.slideNext();
    });
  });
}
