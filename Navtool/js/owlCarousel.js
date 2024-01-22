document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const prevButton = document.querySelector('.custom-slider-prev');
    const nextButton = document.querySelector('.custom-slider-next');

    const owl = $(slider);

    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        nav: false,
    });

    prevButton.addEventListener('click', function () {
        owl.trigger('prev.owl.carousel');
    });

    nextButton.addEventListener('click', function () {
        owl.trigger('next.owl.carousel');
    });
});
