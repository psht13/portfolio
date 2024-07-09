import { getReviews } from './reviews-api-request';
const cards = document.querySelector('.cards')
import iziToast from 'izitoast';


function showMessageError() {
    iziToast.error({
    
        message: "error",
        maxWidth: '432px',
        position: 'topRight',
        messageSize: 16,
        backgroundColor: '#ef4040',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        theme: 'dark',
    }); 
}

    
      
document.addEventListener('DOMContentLoaded', async event => {
    event.preventDefault();
    try {
      const info = await getReviews();
      console.log(info)
    const markup = createMarkup(info);
    cards.innerHTML = markup;
    } catch (error) {
      showMessageError();
      cards.innerHTML = 'Not found';
  }
});


function createMarkup(card) {
  return card.map((element) => 
    `<ul class = "card swiper-slide-element" id="${element._id}">
  <img src="${element.avatar_url}" alt="" class = "photo" >
  <div class ="text-content-reviews">
  <h3 class = "name">${element.author}</h3>
  <p class = "message">${element.review}</p>
  </div>
</ul>`).join('');

};


        
