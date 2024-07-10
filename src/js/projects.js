import Swiper from 'swiper/bundle';

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  watchSlidesProgress: true,
  /* grabCursor: true, */
  keyboard: {
    enabled: true,
  },
  mousewheel: true,
  effect: 'flip',
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },

  navigation: {
    nextEl: '.project-button-next',
    prevEl: '.project-button-prev',
  },
});

function updateNavigationButtons() {
  const nextButton = document.querySelector('.project-button-next');
  const prevButton = document.querySelector('.project-button-prev');

  if (swiper2.isEnd) {
    nextButton.classList.add('project-button-disabled');
    nextButton.setAttribute('disabled', true);
  } else {
    nextButton.classList.remove('project-button-disabled');
    nextButton.removeAttribute('disabled');
  }

  if (swiper2.isBeginning) {
    prevButton.classList.add('project-button-disabled');
    prevButton.setAttribute('disabled', true);
  } else {
    prevButton.classList.remove('project-button-disabled');
    prevButton.removeAttribute('disabled');
  }
}

swiper2.on('slideChange', updateNavigationButtons);
updateNavigationButtons();

document.querySelectorAll('.swiper2 .swiper-slide img').forEach(image => {
  image.addEventListener('click', () => {
    swiper2.slideNext();
  });
});
