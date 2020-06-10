// --------------轮播图----------
! function($) {
    const $lunbo = $('.lunbo');
    const $picul = $('.lunbo ul');
    const $picli = $picul.children();
    const $btnli = $('.lunbo .lunbo-nav ol li');
    const $leftarrow = $('.left-jt');
    const $rightarrow = $('.right-jt');
    let $index = 0;
    let $timer = null;
    let $clonebox = $picli.first().clone(true, true);
    let $liwidth = $picli.eq(0).width();

    $picul.append($clonebox).css({
        width: $picul.children().length * $liwidth
    });

    $btnli.hover(function() {
        $index = $(this).index() - 1;
        tabswitch();

    });
    $rightarrow.on('click', function() {
        tabswitch();
    });
    $leftarrow.on('click', function() {
        $index -= 2;
        tabswitch();
    });

    function tabswitch() {
        $index++;
        if ($index === $btnli.length + 1) {
            $picul.css({
                left: 0
            });
            $index = 1;
        }
        if ($index === -1) {
            $picul.css({
                left: -$btnli.length * $liwidth
            });
            $index = $btnli.length - 1;
        }
        if ($index === $btnli.length) {
            $btnli.eq(0).addClass('l-active').siblings('ol li').removeClass('l-active');
        } else {
            $btnli.eq($index).addClass('l-active').siblings('ol li').removeClass('l-active');
        }
        $picul.stop(true).animate({
            left: -$liwidth * $index
        });
    }

    $lunbo.on('hover', function() {
        setTimeout($timer);
    })

    $timer = setInterval(() => {
        // $rightarrow.click();
        tabswitch();
    }, 2000);
}(jQuery);
//     ------------二级侧边栏效果-----------------------
! function($) {

    let $menuli = $('.leftbox li');
    let $cartlist = $('.cartlist');
    let $items = $('.cartlist .item');

    $menuli.on('mouseover', function() {
        $(this).addClass('m-active').siblings('li').removeClass('m-active');
        $cartlist.show();
        if ($(window).scrollTop() > $('.main').offset().top) {
            $cartlist.css({
                top: $(window).scrollTop() - $('.main').offset().top
            })
        } else {
            $cartlist.css({
                top: 0
            })
        }
        $items.eq($(this).index()).show().siblings('.item').hide();
    });
    $menuli.on('mouseout', function() {
        $menuli.removeClass('m-active');
        $cartlist.hide();
    });
    $cartlist.on('mouseover', function() {
        $(this).show();
    });
    $cartlist.on('mouseout', function() {
        $(this).hide();
    });


    //2.根据本地存储，显示用户信息
    // if (localStorage.getItem('username')) {
    //     $('.login').hide();
    //     $('.admin').show();
    //     $('.admin span').html(localStorage.getItem('username'));
    // }

    // $('.admin a').on('click', function() {
    //     $('.login').show();
    //     $('.admin').hide();
    //     localStorage.removeItem('username');
    // });

}(jQuery);
// ----------------------猜你喜欢（渲染）----------------
! function($) {

    let array_default = [];
    let array = [];
    let prev = null;
    let next = null;


    const $list = $('.index-list');
    $.ajax({
        url: 'http://10.31.162.45/1688/php/index.php',
        dataType: 'json'
    }).done(function(data) {
        console.log(data)
        let $strhtml = '<ul>';
        $.each(data, function(index, value) {
            $strhtml += `
                <li>
                    <a href="detail.html?goods_id=${value.goods_id}" target="_blank">
                        <img class="lazy"src="${value.goods_big_logo}" data-original="${value.goods_big_logo}" width="200" height="200"/>
                        <p>${value.goods_id}${value.goods_name}</p>
                        <span class="price">￥${value.goods_price}</span>
                        <span>${value.goods_number}</span>
                    </a>
                </li>
            `;
        });
        $strhtml += '</ul>';
        $list.html($strhtml);

        $(function() {
            $("img.lazy").lazyload({ effect: "fadeIn" });
        });

        array_default = [];
        array = [];
        prev = null;
        next = null;

        $('.index-list li').each(function(index, element) {
            array[index] = $(this);
            array_default[index] = $(this);
        });
    });

}(jQuery);
//-------------------------爆品（渲染）----------
! function($) {

    let array_default = [];
    let array = [];
    let prev = null;
    let next = null;

    const $list = $('.bp-list ');
    $.ajax({
        url: 'http://10.31.162.45/1688/php/index.php',
        dataType: 'json'
    }).done(function(data) {
        console.log(data)
        let $strhtml = '<ul>';
        $.each(data, function(index, value) {
            $strhtml += `
                <li>
                    <a href="detail.html?goods_id=${value.goods_id}" target="_blank">
                        <img class="lazy"src="${value.goods_big_logo}" data-original="${value.goods_big_logo}" width="176" height="176"/>
                        <p>${value.goods_id}${value.goods_name}</p>
                        <span class="price">￥${value.goods_price}</span>
                        <span>${value.goods_number}</span>
                    </a>
                </li>
            `;
        });
        $strhtml += '</ul>';
        $list.html($strhtml);

        $(function() {
            $("img.lazy").lazyload({ effect: "fadeIn" });
        });

        array_default = [];
        array = [];
        prev = null;
        next = null;
        $('.bp-list li').each(function(index, element) {
            array[index] = $(this);
            array_default[index] = $(this);
        });
    });

}(jQuery);
// --------------------厂货通（渲染）----------------------------
! function($) {

    let array_default = [];
    let array = [];
    let prev = null;
    let next = null;

    const $list = $('.cht-list ');
    $.ajax({
        url: 'http://10.31.162.45/1688/php/index.php',
        dataType: 'json'
    }).done(function(data) {
        console.log(data)
        let $strhtml = '<ul>';
        $.each(data, function(index, value) {
            $strhtml += `
                <li>
                    <a href="detail.html?goods_id=${value.goods_id}" target="_blank">
                        <img class="lazy"src="${value.goods_big_logo}" data-original="${value.goods_big_logo}" width="110" height="110"/>
                        <p>${value.goods_id}${value.cat_id}</p>
                        
                    </a>
                </li>
            `;
        });
        $strhtml += '</ul>';
        $list.html($strhtml);

        //添加懒加载
        $(function() {
            $("img.lazy").lazyload({ effect: "fadeIn" });
        });

        array_default = []; //排序前的li数组
        array = []; //排序中的数组
        prev = null;
        next = null;
        //将页面的li元素加载到两个数组中
        $('.bp-list li').each(function(index, element) {
            array[index] = $(this);
            array_default[index] = $(this);
        });
    });

}(jQuery);
// -----------------------tab切换-------------
$(function() {
    const $btns = $('.bottom-new button');
    const $items = $('.bottom-new .b-item');
    $btns.hover(function() { //多个按钮元素绑定了点击事件。
        $(this).addClass('b-first').siblings('.bottom-new button').removeClass('b-first');

        $items.eq($(this).index()).show().siblings('.bottom-new .b-item').hide();
    });
});