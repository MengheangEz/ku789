document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
        perPage: 3,
        gap: "20px",
        type: "loop",
        autoplay: true,
        interval: 2000,
        snap: true,
        breakpoints: {
            448: {
                perPage: 1,
            },
            768: {
                perPage: 2,
            },
        },
    });
    splide.mount();
});
