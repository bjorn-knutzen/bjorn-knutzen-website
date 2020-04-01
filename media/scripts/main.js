
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 40) {
        $(".hiddenScroll").addClass("showScrollContainer");
    } else {
        $(".hiddenScroll").removeClass("showScrollContainer");
    }
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(document).ready(function(){
    $('#nav-button').click(function(){
        $(this).toggleClass('open');
        $(".main-nav").toggleClass("open");
    });

    $('.link').click(function(){
        $(".main-nav").removeClass("open");
    });

    $('.link').click(function(){
        $("#nav-button").removeClass("open");
    });

    $('.default-state').each(function(i){    
        var row = $(this);
        setTimeout(function() {
        row.toggleClass('active', !row.hasClass('active'));
        }, 100*i);
    });
});
