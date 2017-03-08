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

    // chiffre du mois
    $('.white-block-blog').mouseover(function(){
      $('.figure-margin, .figure-month, .green-line, #figure-month-title').css({'background':'white', 'opacity':'0.6'});
      $('#more-figure-month').show();
        $('#more-figure-month').mouseover(function(){
          $('.figure-margin, .figure-month, .green-line, #figure-month-title').css({'background':'white', 'opacity':'0.6'});
          $('#more-figure-month').show();
        })
    });
    $('.white-block-blog').mouseout(function(){
      $('#more-figure-month').hide();
      $('.figure-margin, .figure-month, .green-line, #figure-month-title').css({'background':'transparent','opacity':'1'});
    });

    // grey-block-2
    $('.grey-block-2').mouseover(function(){
      $('.grey-block-2, .blue-title, .blog-title-2').css({'background':'#0251FB', 'opacity':'0.6'});
      $('#more-grey-block-2').show();
        $('#more-grey-block-2').mouseover(function(){
          $('.grey-block-2, .blue-title, .blog-title-2').css({'background':'#0251FB', 'opacity':'0.6'});
          $('#more-grey-block-2').show();
        })
    });
    $('.grey-block-2').mouseout(function(){
      $('#more-grey-block-2').hide();
      $('.grey-block-2, .blue-title, .blog-title-2').css({'background':'#E5E5E5','opacity':'1'});

    });

    // eavest-block
    $('.black-block-partner').mouseover(function(){
      $('.black-block-partner, .grey-letters-light, .main-title').css({'background':'white', 'opacity':'0.6'});
      $('#more-eavest-block').show();
        $('#more-eavest-block').mouseover(function(){
          $('.black-block-partner, .grey-letters-light, .main-title').css({'background':'white', 'opacity':'0.6'});
          $('#more-eavest-block').show();
        })
    });
    $('.black-block-partner').mouseout(function(){
      $('#more-eavest-block').hide();
      $('.black-block-partner, .grey-letters-light, .main-title').css({'background':'black','opacity':'1'});
    });

    // notre agrément
    $('.grey-block-3').mouseover(function(){
      $('.grey-block-3, .img-agreement').css({'background':'white', 'opacity':'0.6'});
      $('#more-our-agrement').show();
        $('#more-our-agrement').mouseover(function(){
          $('.grey-block-3, .img-agreement').css({'background':'white', 'opacity':'0.6'});
          $('#more-our-agrement').show();
        })
    });
    $('.grey-block-3').mouseout(function(){
      $('#more-our-agrement').hide();
      $('.grey-block-3, .img-agreement').css({'background':'#E5E5E5','opacity':'1'});
    });

    // partenaires
    $('.white-block-partner').mouseover(function(){
      $('.white-block-partner').css({'background':'white', 'opacity':'0.6'});
      $('#more-partner').show();
        $('#more-partner').mouseover(function(){
          $('.white-block-partner').css({'background':'white', 'opacity':'0.6'});
          $('#more-partner').show();
        })
    });
    $('.white-block-partner').mouseout(function(){
      $('#more-partner').hide();
      $('.white-block-partner').css({'background':'white','opacity':'1'});
    });
    // values
    $('.white-block-style').mouseover(function(){
      $('.white-block-style, .values').css({'background':'white', 'opacity':'0.6'});
      $('#more-values').show();
        $('#more-values').mouseover(function(){
          $('.white-block-style, .values').css({'background':'white', 'opacity':'0.6'});
          $('#more-values').show();
        })
    });
    $('.white-block-style').mouseout(function(){
      $('#more-values').hide();
      $('.white-block-style, .values').css({'background':'white','opacity':'1'});
    });
    // methodologie
    $('.white-block-style-2').mouseover(function(){
      $('.white-block-style-2, .our-methodologie, #methodo-2-block, .number, #methodo-p, #methodo-img1').css({'background':'white', 'opacity':'0.6'});
      $('#more-methodologie').show();
        $('.white-block-style-2').mouseover(function(){
          $('.white-block-style-2, .our-methodologie, #methodo-2-block, .number, #methodo-p, #methodo-img1').css({'background':'white', 'opacity':'0.6'});
          $('#more-methodologie').show();
        })
    });
    $('.white-block-style-2').mouseout(function(){
      $('#more-methodologie').hide();
      $('.white-block-style-2, .our-methodologie, #methodo-2-block, .number, #methodo-p, #methodo-img1').css({'background':'white','opacity':'1'});
    });
    // team
    $('.grey-block-4').mouseover(function(){
      $('.grey-block-4, .team, .team-img, .team-p').css({'background':'white', 'opacity':'0.6'});
      $('#more-team').show();
        $('.grey-block-4').mouseover(function(){
          $('.grey-block-4, .team, .team-img, .team-p').css({'background':'white', 'opacity':'0.6'});
          $('#more-team').show();
        })
    });
    $('.grey-block-4').mouseout(function(){
      $('#more-team').hide();
      $('.grey-block-4, .team, .team-img, .team-p').css({'background':'white','opacity':'1'});
    });

  });
