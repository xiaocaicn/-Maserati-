// 拿到四个盒子
// 设置点击事件
// 点击s盒子时，sl回到原位置，s盒子隐藏，且sl继续左平移
$(function () {
    $('.search>a').click(function () {
        // animate的使用方式：jq对象.animate({})
        $('.search_l').animate({
            right: '0px',
            top: '0'
        }, 1000).siblings().animate({
            left: '270px'
        }, 500);
    });
    $('.shr').click(function () {
        $('.search_l').animate({
            right: '-1600px',
            top: '0'
        }, 500).siblings('.dealer').animate({
            left: '0px'
        }, 1500).siblings('.try').animate({
            left: '90px'
        }, 1500).siblings('.search').animate({
            left: '180px'
        }, 1500);
    })
    $('#droppable_2').mouseenter(function () {
        // console.log(1);
        $('#droppable_2s').animate({
            rorate: '90deg'
        }, 500)
    });
    $(function () {
        $('.blackA li').hover(function () {
            // console.log($(this));
            $(this).addClass('brb3');
            $(this).css({
                height: '40px'
            });
        }, function () {
            $(this).removeClass('brb3');
            $(this).css({
                height: '40px'
            })
        })
    })



    //轮播图
    const $banner = $('.banner');
    const $screen = $('.screen');
    const $arr = $('#arr');
    const $arrLeft = $('#left_arr');
    const $arrRight = $('#right_arr');
    // const $ulis = $('.screen>ul>li');
    const $ul = $('#bul');
    const $oLis = $('.screen>ol>li');
    const $parse = $('#parse');



    let timeId = setInterval(rightClick, 2000);
    let stop = 1;   
    $parse.click(function () {
        if (stop == 1) {
            clearInterval(timeId);
            stop = 0;
        } else {
            timeId = setInterval(rightClick, 2000);
            stop = 1;
        }
    })
    //鼠标移入移出：hover()
    $banner.hover(function () {
        // console.log($arr);
        $arr.css({
            display: 'block'
        });
    }, function () {
        $arr.css({
            display: ''
        });
    })
    // 右边
    $ul.append($('#bul>li').first().clone());
    // console.log($ul);
    let index = 0;
    let $ulis = $('#bul>li');

    $oLis.eq(0).addClass('current');
    $arrRight.click(rightClick)

    function rightClick() {
        index++;
        // console.log($ulis.length);
        // console.log($oLis[index]);
        if (index == $ulis.length) {
            index = 1;
            $ul.css({
                left: 0
            })
        }
        // 动画效果
        $ul.stop().animate({
            left: -index * $screen.width()
        });
        // console.log(index);
        $oLis.eq(index == $oLis.length ? 0 : index).addClass('current').siblings().removeClass('current');

    }

    // 左边
    $arrLeft.click(function () {
        index--;
        if (index < 0) {
            index = $ulis.length - 2;
            $ul.css({
                left: -($ulis.length - 1) * $screen.width()
            });
        }
        $ul.stop().animate({
            left: -index * $screen.width()
        })
        $oLis.eq(index).addClass('current').siblings().removeClass('current');
    })

    // 点击页码
    $oLis.click(function () {
        console.log(x);
        $(this).addClass('current').siblings().removeClass('current');
        index = $(this).index();
        $ul.stop().animate({
            left: -index * $screen.width()
        });
    })


    // 第二个轮播图
    let $history_ul = $('.history-image-list ul');
    let $history_ul_lis = $('.history-image-list ul>li');
    let $prev = $('#prev');
    let $next = $('#next');
    let $click_button = $('.click-button>.circular');
    let index1 = 0;
    // 下一张
    $next.click(function () {
        index1++;
        if (index1 >= 6) {
            index1 = 5;
            return;
        }
        $history_ul.animate({
            marginLeft: -$history_ul_lis.width() * index1 + 'px',
        }, 'normal');
        $click_button.eq(index1).addClass('current').siblings().removeClass('current');
        $prev.css({
            display: 'block',
        })
    });
    // 上一张
    $prev.click(function () {
        index1--;
        $history_ul.animate({
            marginLeft: -$history_ul_lis.width() * index1 + 'px',
        }, 'normal');
        $click_button.eq(index1).addClass('current').siblings().removeClass('current');
        if (index1 == 0) {
            $prev.css({
                display: '',
            });
        }
    });
    // 轮播图切换按钮
    $click_button.click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        index1 = $(this).index();
        $history_ul.animate({
            marginLeft: -$history_ul_lis.width() * index1 + 'px',
        }, 'normal');
        if (index1 == 0) {
            $prev.css({
                display: '',
            });
        }
        if (index1 > 0) {
            $prev.css({
                display: 'block',
            })
        }
    });
})