document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const overlayMenu = document.getElementById('overlay-menu');
    const closeButton = document.getElementById('close-menu');
    const yearContainer = document.querySelector('span.year-container');
    const currentYear = new Date().getFullYear();

    yearContainer.innerHTML = `${currentYear}-${String(currentYear + 1).slice(-2,)};

    burgerMenu.addEventListener('click', function () {
        overlayMenu.classList.toggle('hidden');
        overlayMenu.classList.toggle('flex');
    });

    closeButton.addEventListener('click', function () {
        overlayMenu.classList.add('hidden');
        overlayMenu.classList.remove('flex');
    });
});
