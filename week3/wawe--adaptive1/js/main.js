$(function () {

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