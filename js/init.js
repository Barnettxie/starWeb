(function( $ ) {
  'use strict';

  // Loading..
  $(window).load(function() {
    $('#preloader').delay(300).fadeOut('slow');
  });

  $(document).ready(function() {

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

  });

})(window.jQuery);