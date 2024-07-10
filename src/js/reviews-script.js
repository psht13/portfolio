import { getReviews } from './reviews-api-request';
import { notification } from './footer-notification';

document.addEventListener('DOMContentLoaded', async event => {
  event.preventDefault();

  try {
    const info = await getReviews();
    updateCards(info);
    // Initialize swiper after reviews are filled in the DOM
  } catch (error) {
    notification('error', 'Error', error.toString());
    const cards = document.querySelectorAll('.cards .card');
    cards.forEach(card => {
      card.querySelector('.name').textContent = 'Not found';
      card.querySelector('.message').textContent = '';
      card.querySelector('.photo').src = '';
    });
  }
});

function updateCards(reviews) {
  const cards = document.querySelectorAll('.cards .card');

  reviews.forEach((review, index) => {
    if (index < cards.length) {
      const card = cards[index];
      const nameElement = card.querySelector('.name');
      const messageElement = card.querySelector('.message');
      const photoElement = card.querySelector('.photo');

      if (nameElement) {
        nameElement.textContent = review.author;
      } else {
        console.error('Name element not found in card', card);
      }

      if (messageElement) {
        messageElement.textContent = review.review;
      } else {
        console.error('Message element not found in card', card);
      }

      if (photoElement) {
        photoElement.src = review.avatar_url;
        photoElement.alt = `${review.author} avatar`;
      } else {
        console.error('Photo element not found in card', card);
      }
    } else {
      console.error('More reviews received than there are card elements');
    }
  });

  // If there are more cards than reviews, clear the extra cards
  if (reviews.length < cards.length) {
    for (let i = reviews.length; i < cards.length; i++) {
      const card = cards[i];
      const nameElement = card.querySelector('.name');
      const messageElement = card.querySelector('.message');
      const photoElement = card.querySelector('.photo');

      if (nameElement) {
        nameElement.textContent = '';
      }

      if (messageElement) {
        messageElement.textContent = '';
      }

      if (photoElement) {
        photoElement.src = '';
        photoElement.alt = '';
      }
    }
  }
}
