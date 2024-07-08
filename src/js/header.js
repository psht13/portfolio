document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.mobile-nav-toggle');
  const closeIcon = document.querySelector('.mobile-menu-close-btn');
  const navMenu = document.querySelector('.nav-menu');
  const mobileNavMenu = document.querySelector('.mobile-menu');
  const navList = document.querySelector('.menu-list');
  const mobileListMenu = document.querySelector('.mobile-nav-menu');
  const mobileContainer = document.querySelector('.mobile-menu-container');

  burgerMenu.addEventListener('click', e => {
    mobileNavMenu.classList.toggle('open');
  });

  navMenu.addEventListener('click', e => {
    e.preventDefault();
    navList.classList.toggle('hidden');
  });

  navList.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      navList.classList.add('hidden');
    }
  });

  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      navList.classList.add('hidden');
    });
  });

  mobileNavMenu.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      mobileNavMenu.classList.remove('open');
      return;
    }
  });

  mobileContainer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      mobileNavMenu.classList.remove('open');
      const sectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  closeIcon.addEventListener('click', e => {
    mobileNavMenu.classList.remove('open');
  });
});
