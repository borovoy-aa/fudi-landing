$( document ).ready(function() {

    $('.login-items__menu').on('click', function(){
        $(this).toggleClass('active');
        return false;
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
    
    

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });


});

