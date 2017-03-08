// OVERLAY ALL PAGE
  $(function() {

// block produits remboursés
    $('.overlay-1').mouseover(function(){
      $('.overlay-1, .overlay-item-1').css({'background':'white', 'opacity':'0.6'});
      $('#more-1').show();
        $('#more-1').mouseover(function(){
          $('.overlay-1, .overlay-item-1').css({'background':'white', 'opacity':'0.6'});
          $('#more-1').show();
        })
    });
    $('.overlay-1').mouseout(function(){
      $('#more-1').hide();
      $('.overlay-1, .overlay-item-1').css({'background':'transparent','opacity':'1'});
    });

// block produits à rappeler
  $('.overlay-2').mouseover(function(){
    $('.overlay-2, .overlay-item-2').css({'background':'white', 'opacity':'0.6'});
    $('#more-2').show();
      $('#more-2').mouseover(function(){
        $('.overlay-2, .overlay-item-2').css({'background':'white', 'opacity':'0.6'});
        $('#more-2').show();
      })
    });
    $('.overlay-2').mouseout(function(){
      $('#more-2').hide();
      $('.overlay-2').css({'background':'transparent','opacity':'1'});
      $('.overlay-item-2').css({'background':'white','opacity':'1'});
    });

// block produit du mois overlay
    $('.white-block').mouseover(function(){
    $('.white-block').css({'background':'rgba(255, 255, 255, 0.92)', 'opacity':'1'});
    $('.img-product, #month-product-title').css({'background':'rgba(255, 255, 255, 0.92)', 'opacity':'0.6'});
    $('#more-3').show();
    $('#more-3').css({'opacity':'1'});
      $('#more-3').mouseover(function(){
        $('.white-block, .img-product').css({'background':'white', 'opacity':'0.6'});
        $('#more-3').show();
      })
    });
    $('.white-block').mouseout(function(){
      $('#more-3').hide();
      $('.white-block, .img-product, #month-product-title').css({'background':'white','opacity':'1'});
    });

// block produit du mois affichage sm only overlay
    $('.white-block').mouseover(function(){
      $('.white-block, .img-product, #month-product-title').css({'background':'rgba(255, 255, 255, 0.92)', 'opacity':'0.6'});
      $('#more-3-sm').show().css({'opacity':'1'});
        $('#more-3-sm').mouseover(function(){
          $('.white-block, .img-product').css({'background':'white', 'opacity':'0.6'});
          $('#more-3-sm').show();
        })
      });
      $('.white-block').mouseout(function(){
        $('#more-3-sm').hide();
        $('.white-block, .img-product, #month-product-title').css({'background':'white','opacity':'1'});
      });

    // SECTION BLOG grey-block overlay
    $('.grey-block').mouseover(function(){
      $('.grey-block, .blog-img, .blue-title-1, .blog-title-1').css({'background':'#0251FB', 'opacity':'0.6'});
      $('#more-grey-block').show();
        $('#more-grey-block').mouseover(function(){
          $('.grey-block, .blue-title-1, .blog-img, .blog-title-1').css({'background':'#0251FB', 'opacity':'0.6'});
          $('#more-grey-block').show();
        })
    });
    $('.grey-block').mouseout(function(){
      $('#more-grey-block').hide();
      $('.grey-block, .blue-title-1, .blog-img, .blog-title-1').css({'background':'#E5E5E5','opacity':'1'});

    });



  });
