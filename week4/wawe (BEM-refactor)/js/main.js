$(function () {
    $(".nav__list a, .footer__line a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.slider-container').slick({
        dots: true,
        arrows: false
    });

    $('.burger-btn').on('click', function () {
        $('.nav__list').toggleClass('nav__list--active')
        $('.burger-btn').toggleClass('burger-btn--active')
    });


    var mixer = mixitup('.gallery__container');
});