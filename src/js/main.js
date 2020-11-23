/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;


// CUSTOM SCRIPTS

$(document).ready(function () {
    //
    $('.know-pharmacy__content .instructions a').click(function (e) {
        e.preventDefault();
        $(this).parent().find('a').removeClass('btn_active');
        $(this).addClass('btn_active');
        var url = $(this).attr('data-link');
        var price = $(this).attr('data-price');

        var pharma_block = $(this).parents('.know-pharmacy')
        pharma_block.find('.cost').html(price);
        pharma_block.find('.btn_find').attr('href', url);
    });

    //MOBILE MENU
    var nav = $('.header__nav');

    $('.btn-burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });


    //HEADER SCROLL

    function onHeaderScrol() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 40) {
            jQuery(".header").addClass('header_active');
        } else {
            jQuery(".header").removeClass('header_active');
        }
    }

    $(document).on('scroll', function () {
        onHeaderScrol()
    });

    // VIDEO PLAY

    var promotionVideo = $('#promotion-video').get(0);

    if (promotionVideo) {
        var playBtn = $('#playButton');

        playBtn.click(function () {
            promotionVideo.play();
        });

        promotionVideo.addEventListener('play', function () {
            playBtn.hide();
            promotionVideo.controls = true
        });

        promotionVideo.addEventListener('pause', function () {
            playBtn.show();
            promotionVideo.controls = false
        });
    }

});
