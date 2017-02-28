$(function() {

  $(document).on('scroll', function(){
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
      $('.slider').hide();
    } else {
      $('.slider').show();
    }
  });
  $(document).on('scroll', function(){
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
      $('.footer-arrow').hide();
    } else {
      $('.footer-arrow').fadeIn(1000);
    }
  });
});



// $(window).scroll(function() {
//     if ($(this).scrollTop() > 200) { //use `this`, not `document`
//         $('.fixedelement').css({
//             'display': 'none'
//         });
//     }
// });

// hover tentative
// $('.product-content').mouseover(function()
//      {
//         $('.company-image-overlay').show();
//      });
// $('.product-content').mouseout(function()
//      {
//        $('.company-image-overlay').hide();
//      });
