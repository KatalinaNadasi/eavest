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
  $(window).scroll(function() {
  if ($(document).height() <= ($(window).height() + $(window).scrollTop()))
  {
    $('.footer-arrow').css({
      position: 'fixed',
      bottom: 150
      });
    } else {
    $('.footer-arrow').css({
      position: 'fixed',
      bottom: 20
    });
  }
  var doc = $(document);

  doc.scroll(function () {
      // make sure to wrap yours entire footer in some css selector
      var footer = $('#wholeFooter');
      var arrow = $('.footer-arrow');
      var s = $('#product-summary-position');

      var top = doc.scrollTop() + s.offset().top * 2 + p.height();
      var footerTop = footer.offset().top;

      var offset = footerTop - top;

      if (offset < 0) {
          p.css({'margin-top': '' + offset + 'px'});
      } else {
          p.css({'margin-top': 0});
      }
    });
  })
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
