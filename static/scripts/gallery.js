const imagesContainer = document.getElementById('images-container')

function Image(img) {
    return `
    <div class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img src="${img}" loading="lazy" alt="Photo by Minh Pham"
        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

    <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
    </div>
</div>
    `
}
for (let i = 1; i <= 30; i++) {
    imagesContainer.innerHTML+=Image(`./static/media/images/work/ss/${i}.jpg`)
}

for (let i = 1; i <= 30; i++) {
    imagesContainer.innerHTML+=Image(`./static/media/images/work/ms/${i}.jpg`)
}