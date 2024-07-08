import { getReviews } from './reviews-api-request';


const cards = document.querySelector('.cards')


window.addEventListener('DOMContentLoaded', async event => {
  event.preventDefault();
  try {
    const info = await getReviews();
    const markup = createMarkup(info);
    cards.innerHTML = markup;
  } catch (err) {
    console.log(err);
  }
});


function createMarkup(card) {
  return card.map((element) =>
    `<li class = "card">
  <img src="${element.avatar_url}" alt="" class = "photo" >
  <div class ="text-content-reviews">
  <h3 class = "name">${element.author}</h3>
  <p class = "message">${element.review}</p>
  </div>
</li>`).join('');
};
 

