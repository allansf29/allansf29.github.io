const navbarToggle = document.querySelector('#navbar-toggle');
const NavbarLinks = document.querySelector('#navbar-link');

navbarToggle.addEventListener('click', () => {
    console.log(navbarToggle);
    NavbarLinks.classList.toggle('show-links')
})