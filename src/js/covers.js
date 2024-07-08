document.addEventListener("DOMContentLoaded", function() {
  const coversSection = document.querySelector('.covers');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkVisibility() {
    if (isElementInViewport(coversSection)) {
      coversSection.classList.add('animate');
    } else {
      coversSection.classList.remove('animate');
    }
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  checkVisibility(); // Initial check
});