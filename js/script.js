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
// footer-arrow hide /show on scroll
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
    var elementOffset = $('#footer').offset().top;
    var footerTop = (elementOffset - $(window).scrollTop());
    if(footerTop > ($(window).height() - 20)) {
      $('.footer-arrow').css({
        position: 'fixed',
        bottom: 20
        });
      }

    if( footerTop < ($(window).height() - 20) ){
        $('.footer-arrow').addClass('fixed');
          $('.footer-arrow').css({
            position: 'fixed',
            bottom: ($(window).height() - footerTop),
        });
    }
})

  // scroll up on click arrow big
  $('.footer-arrow').click(function(){
  $('html, body').animate({scrollTop:0}, 'speed');
  });
    // scroll up on click arrow small
  $('#scroll-back-to-top').click(function(){
  $('html, body').animate({scrollTop:0}, 'speed');
  });

// redirection accordion au hover



// afficher l'accordion total au click qui est en display none avant
      // $( "#more-product-2" ).click(function(){
      //    $( "#panel-body" ).show();
      //    $( "#over" ).hide();
      //    $('.activestate').css({'font-weight': 'bold', 'color': 'black'});
      // });


  // $('#more-product-2').click(function(){
  //   $('.panel-body').show();
  //   $('.activestate').css({'font-weight': 'bold', 'color': 'black'});
  // });


// end window load
});

// ACCORDION redirection selon nombre de produits
var refundProducts = 2
var tocallProducts = 6
$(function() {

  if (refundProducts <= 5) {
    $('#short-accordion-1').show();
  } else {
    $('#long-accordion-1').show();
  };

  if (tocallProducts > 5) {
    $('#long-accordion-2').show();
  } else {
    $('#short-accordion-2').show();
  };

});
