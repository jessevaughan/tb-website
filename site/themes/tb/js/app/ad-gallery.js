define([
  "jquery",
  "slick"
], function($) {

  $('.ad-carousel').slick({
    dots: true,
    centerMode: true,
    centerPadding: 0,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.ad-carousel').show();

});
