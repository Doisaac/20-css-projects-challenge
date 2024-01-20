const navbar = document.querySelector('.navbar__links')
const hamburger = document.querySelector('.navbar__more')

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
})