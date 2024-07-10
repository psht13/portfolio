import { getReviews } from './reviews-api-request';
import { notification } from './footer-notification';
import { swiperInitialize } from './reviews-swiper';

const cards = document.querySelector('.cards');

function scroll(elements) {
  elements.forEach(element => {
    element.addEventListener('click', () => {
      if (element.classList.contains('review-scroll')) {
        element.classList.remove('review-scroll');
      } else {
        element.classList.add('review-scroll');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', async event => {
  event.preventDefault();
  try {
    const info = await getReviews();
    const markup = createMarkup(info);
    cards.innerHTML = markup;
    const text = document.querySelectorAll('.message');
    scroll(text);
    swiperInitialize();
  } catch (error) {
    notification('error', 'Error', 'Loading reviews failed.');
    cards.innerHTML = 'Not found';
  }
});

function createMarkup(card) {
  return card
    .map(
      element =>
        `<div class="card swiper-slide" id="${element._id}">
  <img src="${element.avatar_url}" alt="avatar" class="photo" >
  <div class="text-content-reviews">
  <h3 class="name">${element.author}</h3>
  <p class="message">${element.review}</p>
  </div>
</div>`
    )
    .join('');
}
