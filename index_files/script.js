;(function($){
    "use strict";

    /* ==========================================================================
       Preloader
    ========================================================================== */
    $(window).on('load', function() {
         $('#status').fadeOut(); 
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});
    })

     /* ==========================================================================
       Counter Up
    ========================================================================== */
    var $counter = $('.counter');
    if($counter.length > 0){
        $counter.counterUp({
            delay: 20,
            time: 3000
        });
    }

    /* ==========================================================================
        Parallax
    ========================================================================== */
    var $parallax = $('.parallaxie');
    if($parallax.length > 0){
        $parallax.parallaxie({
            speed: .975
        });
    }

    /* ==========================================================================
    Screenshot carousel
    ========================================================================== */
    var $loop = $('.screen')
    if($loop.length > 0){
        $loop.owlCarousel({
        loop:true,
        nav: false,
        center:true,
        autoplay:true,
        autoplayTimeout:2000,
        margin:25,
        responsive:{
            320:{
                items:2,
                margin:10
            },
            481:{
                items:3,
                margin:60
            },
            991:{
                items:6
            }
        }
    });
    }

    /* ==========================================================================
    Screen carousel
    ========================================================================== */
    var $appSlide = $('.app-slide-auto')
    if($appSlide.length > 0){
         $appSlide.owlCarousel({
            dots: false,
            loop: true,
            animateOut: 'fadeOut',
            center: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 2500,
            autoWidth: true,
            touchDrag: false,
            items:3,
            mouseDrag: false
        })
    }

    /* ==========================================================================
    Testimonial Carousel
    ========================================================================== */
    var quoteCarousel = $('.quote')
    if(quoteCarousel.length > 0){
        quoteCarousel.owlCarousel({
            loop:true,
            autoplayTimeout:3500,
            items:1,
            nav: false,
            margin:20,
            items:1
        })
    }
    
     /* ==========================================================================
        Wow
    ========================================================================== */
    new WOW().init();

    /* ==========================================================================
        Menu click scroll
    ========================================================================== */

    var $navItem = $('.right-nav a, .demo a');
    if($navItem.length > 0 ){
        $navItem.on('click', function (e) {
            $(document).off("scroll");
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                || location.hostname == this.hostname) {

                var target = $(this.hash),
                headerHeight = $(".navbar").height()-2; // Get fixed header height

                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - headerHeight
                    }, 1000);
                    return false;
                }
            }
        });
    }
     /* ==========================================================================
        Accordion
    ========================================================================== */

    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);



})(jQuery); 