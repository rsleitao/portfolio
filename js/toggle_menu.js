document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuVertical = document.querySelector('.menu-vertical');

    menuToggle.addEventListener('click', function () {
        menuVertical.classList.toggle('show');
    });
});
