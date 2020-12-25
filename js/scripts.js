//jshint esversion: 6

const toggleButton = document.getElementById('nav_toggle');
const navbarLinks = document.getElementById('nav_links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});