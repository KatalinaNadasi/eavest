$(function() {

// navbar
  $(document).on('scroll', function(){
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
      $('.slider').hide();
    } else {
      $('.slider').show();
    }
  });
// footer-arrow hide show on scroll
  $(document).on('scroll', function(){
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
      $('.footer-arrow').hide();
    } else {
      $('.footer-arrow').fadeIn(1000);
    }
  });

  // Stop the arrow before footer
  $(window).scroll(function() {
  if ($(document).height() <= ($(window).height() + $(window).scrollTop()))
  {
    $('.footer-arrow').css({
      position: 'fixed',
      bottom: 150
      });
    } else
    {
    $('.footer-arrow').css({
      position: 'fixed',
      bottom: 20
      });
    }
  })
  // scroll up on click
  $('.footer-arrow').click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
  });
});



// hover tentative
// $('.product-content').mouseover(function()
//      {
//         $('.company-image-overlay').show();
//      });
// $('.product-content').mouseout(function()
//      {
//        $('.company-image-overlay').hide();
//      });
