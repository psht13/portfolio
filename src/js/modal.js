// variables
const backdrop = document.querySelector('#backdrop');

const title = document.querySelector('.modal-title');
const message = document.querySelector('.modal-text');

export function showModal(a, b) {
  title.textContent = a.trim();
  message.textContent = b.trim();

  backdrop.classList.add('modal-visible');
}

export function hideModal() {
  backdrop.classList.remove('modal-visible');
}
