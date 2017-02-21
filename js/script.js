$(function() {

  $(document).on('scroll', function(){
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
      $('.slider').hide();
    } else {
      $('.slider').show();
    }
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
