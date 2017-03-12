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

// collapsed style

  $('.panel-heading').click(function() {
    if ($(this).hasClass('activestate')) {
      $(this).removeClass('activestate');
    } else {
      $('.panel-heading').removeClass('activestate');
      $(this).addClass('activestate');
    }
  });


// $('.panel-group .panel-collapse.in').prev().addClass('active');
// $('.panel-group')
//   .on('show.bs.collapse', function(e) {
//     $(e.target).prev('.panel-heading').addClass('active');
//   })
//   .on('hide.bs.collapse', function(e) {
//     $(e.target).prev('.panel-heading').removeClass('active');
//   });


// $('#headingOne, #headingTwo, #headingThree, #headingFour, #headingFive, #heading2One, #heading2Two, #heading2Three, #heading2Four, #heading2Five').click(function(){
//   $('.panel-title').css({'font-weight':'bold', 'color':'black'});
// if($(this)==="collapse"){
//   $('.panel-title').css({'font-weight':'100', 'color':'grey'});
// }else {
//   $('.panel-title').css({'font-weight':'bold', 'color':'black'});
// }
// });


  // $('#headingOne, #headingTwo, #headingThree, #headingFour, #headingFive, #heading2One, #heading2Two, #heading2Three, #heading2Four, #heading2Five').click(function(){
  //   $('.grey-letters').css({'font-weight':'bold', 'color':'black'});
  // });
  // if ($('.panel-heading ').attr('aria-expanded') == "true") {
  //   $('.grey-letters').css({'font-weight':'100', 'color':'grey'});
  // } else {
  //   $('.grey-letters').css({'font-weight':'100', 'color':'black'});
  // }
// -----

  // $('#accordion > .panel').on('show.bs.collapse', function (e) {
  // $('#accordion-header').css({'font-weight':'bold', 'color':'black'});
  // });
// --------

  // $('#accordion > .panel').on('show.bs.collapse', function (e) {
  // $('.grey-letters').css({'font-weight':'bold', 'color':'black'});
  // });




// end window load
});
