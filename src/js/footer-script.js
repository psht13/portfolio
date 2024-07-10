import { doPostRequest } from './footer-api-request';
import { notification } from './footer-notification';
import { showModal } from './modal';

// variables
const form = document.querySelector('.footer-form');
const commentInput = form.comment;
const emailInput = form.email;

// functions
async function onFormSubmit() {
  try {
    emailInput.value = localStorage.getItem('email') || emailInput.value;
    commentInput.value = localStorage.getItem('comment') || commentInput.value;

    const email = emailInput.value;
    const comment = commentInput.value;

    const data = (await doPostRequest(email, comment)).data;
    showModal(data.title, data.message);

    localStorage.setItem('email', '');
    localStorage.setItem('comment', '');
    form.reset();
  } catch {
    notification('error', 'Error', 'Server is not responding.');
  }
}

// event listeners
form.addEventListener('submit', e => {
  e.preventDefault();

  localStorage.setItem('email', emailInput.value.trim());
  localStorage.setItem('comment', commentInput.value.trim());

  onFormSubmit();
});

//inputs on load
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('email')) {
    emailInput.value = localStorage.getItem('email');
  }
  if (localStorage.getItem('comment')) {
    commentInput.value = localStorage.getItem('comment');
  }
});
