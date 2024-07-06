document.addEventListener('DOMContentLoaded', function () {
  const mobileNavMenu = document.querySelector('.mobile-menu');
  const burgerMenu = document.querySelector('.mobile-nav-toggle');
  const closeIcon = document.querySelector('.mobile-menu-close-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navList = document.querySelector('.menu-list');

  burgerMenu.addEventListener('click', e => {
    mobileNavMenu.classList.toggle('open');
  });
  navMenu.addEventListener('click', e => {
    e.preventDefault();
    navList.classList.toggle('hidden');
  });

  mobileNavMenu.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      mobileNavMenu.classList.remove('open');
    }
  });
  closeIcon.addEventListener('click', e => {
    mobileNavMenu.classList.remove('open');
  });
});
