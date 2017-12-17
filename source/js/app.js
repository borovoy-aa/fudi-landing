$( document ).ready(function() {

    $(".menu-collapsed").click(function() {
        $(this).toggleClass("menu-expanded");
      });

    $(".close-nav").click(function() {
        $(".menu-collapsed").removeClass("menu-expanded");
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        lazyLoad: true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            }
        },
    });

    var scrollTopMenu = $(".menu-collapsed");
    var scrollTop = $(".header__head");
    var mq = window.matchMedia( "(max-width: 480px)" );

    if (mq.matches) {
        $(window).scroll(function() {
            // declare variable
            var topPos = $(this).scrollTop();
    
            if (topPos > 400) {
                $(scrollTop).addClass('purpl-header');
                $(scrollTop).css('opacity', '1');
                // $(scrollTop).removeClass('header-opacity');
        
            } else {
                $(scrollTop).removeClass('purpl-header');
                // $(scrollTop).addClass('header-opacity');
                $(scrollTop).css('opacity', '0');
                $(scrollTopMenu).removeClass("menu-expanded");
            }
        });
    } else {
        $(window).scroll(function() {
            // declare variable
            var topPos = $(this).scrollTop();
    
            if (topPos > 400) {
                $(scrollTop).addClass('purpl-header');
        
            } else {
                $(scrollTop).removeClass('purpl-header');
            }
        });
}
    

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });

});

