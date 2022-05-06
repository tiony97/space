$(document).ready(function() {
    $('.menuOpen').on('click', function() {
       $('.menuOverlay').addClass('open');
    });
   
    $('.menuClose').on('click', function() {
      $('.menuOverlay').removeClass('open');
    });
});