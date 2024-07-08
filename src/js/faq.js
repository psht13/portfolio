const accordionLi = document.querySelectorAll(".accordion");

accordionLi.forEach(item => {
  item.addEventListener("click", () => {
      item.classList.toggle("active");
  })
})