$(function () {
    $home_button = $('<img>');
    $home_button.addClass('home-button');
    $home_button.prop('src', 'images/index/logo/next (2).png');
    $('body').append($home_button);
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 400) {
            $('.home-button').css({
                display: 'block'
            });
        }
        if ($(window).scrollTop() <= 400) {
            $('.home-button').css({
                display: ''
            });
        }
    })

    $('.home-button').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
    })
})