$(document).ready(function(){
    /**Sticky Nav */
    $('.js--section-features').waypoint(function(direction){

        if(direction=="down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'60px;'
    });

    /**Scroll*/

    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
    })

    $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);
    })


    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });


    /**Animations on Scroll
     * offset means how much before animation should start
     * at wp-1 animation would be triggered
    */

    $('.js--wp-1').waypoint(function(direction)
    {
        $('.js--wp-1').addClass('animated fadeIn')
    },{offset:'60%'
    });

    $('.js--wp-2').waypoint(function(direction)
    {
        $('.js--wp-2').addClass('animated fadeInUp')
    },{offset:'60%'
    });

    $('.js--wp-3').waypoint(function(direction)
    {
        $('.js--wp-3').addClass('animated fadeIn')
    },{offset:'60%'
    });

    $('.js--wp-4').waypoint(function(direction)
    {
        $('.js--wp-4').addClass('animated pulse')
    },{offset:'60%'
    });

    $('.js--nav-icon').click(function(){
        const nav=$('.js--main-nav');
        const icon=$('.js--nav-icon i');
        /*Makes sliding table open*/
        nav.slideToggle(200)
        
        /**Changes the list icon to close*/
        if(icon.hasClass('ion-ios-menu')){
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        }else{
            icon.removeClass('ion-ios-close');
            icon.addClass('ion-ios-menu');
        }


    })
});