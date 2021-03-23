$(function () {
    let $select = $('#select-coutry');
    let $coutry_mess = $('#coutry-message');
    let $coutry_close = $('#close-button-coutry');

    let $ft_search = $('#footer-search');
    let $search_big = $('#search-big');
    let $input = $('#searchc-bing>input');

    $select.click(function () {
        $coutry_mess.animate({
            top: 0,
            opacity: 1
        }, 'slow');
        return false;
    });

    $coutry_close.click(function () {
        $coutry_mess.animate({
            top: '100%',
            opacity: ''
        }, 'slow')
    });

    $ft_search.click(function () {
        $search_big.css({
            display: "block",
        });
    });

    $search_big.click(function () {
        $search_big.css({
            display: "",
        })
    });

})