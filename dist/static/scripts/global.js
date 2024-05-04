document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const overlayMenu = document.getElementById('overlay-menu');
    const closeButton = document.getElementById('close-menu');

    burgerMenu.addEventListener('click', function () {
        overlayMenu.classList.toggle('hidden');
        overlayMenu.classList.toggle('flex');
    });

    closeButton.addEventListener('click', function () {
        overlayMenu.classList.add('hidden');
        overlayMenu.classList.remove('flex');
    });
});
