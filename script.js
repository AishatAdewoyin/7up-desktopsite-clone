document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.fa-bars');
    const navbar = document.querySelector('.navbar');

    hamburgerIcon.addEventListener('click', function() {
        navbar.classList.toggle('open'); // Toggle the navbar visibility on click
    });
});
