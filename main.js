//Full Screen Menu
$(document).ready(function() {
    $('.menuOpen').on('click', function() {
       $('.menuOverlay').addClass('open');
    });
   
    $('.menuClose').on('click', function() {
      $('.menuOverlay').removeClass('open');
    });
});

//Fix navigation to top of page
var stickyOffset = $('nav').offset().top;
var stickyOffset2 = $('.responsiveNav').offset().top;

$(window).scroll(function() {

    if ( $(window).scrollTop() > stickyOffset){
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    } 

    //Responsive Nav
    if ( $(window).scrollTop() > stickyOffset2){
        $('.responsiveNav').addClass('fixed');
    } else {
        $('.responsiveNav').removeClass('fixed');
    }
});
