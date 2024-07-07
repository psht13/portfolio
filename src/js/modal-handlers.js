import { hideModal } from './modal';

// variables
const closeButton = document.querySelector('#modal-close-btn');
const backdrop = document.querySelector('#backdrop');

backdrop.addEventListener('click', e => {
  if (e.currentTarget === e.target) hideModal();
  else return;
});

closeButton.addEventListener('click', () => {
  hideModal();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    hideModal();
  } else return;
});
