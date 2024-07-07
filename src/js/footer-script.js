import { doPostRequest } from './footer-api-request';
import { notification } from './footer-notification';
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
    notification('success', data.title, data.message);

    localStorage.setItem('email', '');
    localStorage.setItem('comment', '');
    form.reset();
  } catch {
    notification('error', 'Server Error', 'Please, try again.');
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
