(function( $ ) {
  'use strict';

  // Loading..
  $(window).load(function() {
    $('#preloader').delay(350).fadeOut('slow');
  });

  $(document).ready(function() {

    // clik Loading...
    $('#smooth-loading').click(function(e){
      e.preventDefault();
      var t = $(this).attr('href');
      $('#preloader').delay(350).fadeIn('slow',function(){
        window.location.href = t;
      });
    });
    
    // vegasSlide Bg
    var $vegasSlide = $('.vegas-slide');

    $vegasSlide.vegas({
      slides: [
        { src: "images/slide_img01.jpg"},
        { src: "images/slide_img02.jpg" },
        { src: "images/slide_img03.jpg"}
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });

/*    $('a#prev').on('click', function (e) {
      e.preventDefault();
      $vegasSlide.vegas('next');
    });
    $('a#toggle').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass("pause");
      $(".slide-controller").toggleClass("active");
      $vegasSlide.vegas('toggle');
    });
    $('a#next').on('click', function (e) {
      e.preventDefault();
      $vegasSlide.vegas('previous');
    });*/



  });

})(window.jQuery);