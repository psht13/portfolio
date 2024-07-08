const button = document.querySelector('.benefits-order-link');

button.addEventListener('click', function (e) {
    e.preventDefault();

    const elementID = button.getAttribute('href').substr(1)
    document.getElementById(elementID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
