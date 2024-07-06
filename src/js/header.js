document.addEventListener('DOMContentLoaded', function () {
  const mobileNavMenu = document.querySelector('.mobile-menu');
  const burgerMenu = document.querySelector('.mobile-nav-toggle');
  const closeIcon = document.querySelector('.mobile-menu-close-btn');
  burgerMenu.addEventListener('click', e => {
    mobileNavMenu.classList.toggle('open');
  });
  mobileNavMenu.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      mobileNavMenu.classList.remove('open');
    }
    // if (!e.target.closest('a')) {
    //   mobileNavMenu.classList.remove('open');
    // }
  });
  closeIcon.addEventListener('click', e => {
    mobileNavMenu.classList.remove('open');
  });
});
