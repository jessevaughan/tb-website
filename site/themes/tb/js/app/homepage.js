define([
  "jquery",
  "lib/slick.min"
], function($) {

  // var divs = $('span[id^="homeheader-"]').hide(),
  //     i = 0;

  // (function cycle() {
  //     divs.eq(i).fadeIn(400)
  //               .delay(4000)
  //               .fadeOut(400, cycle);
  //     i = ++i % divs.length;
  // })();

  // Hero Slider
  var heroSlider = $('.case-study-slider');

  heroSlider.on('init', function(event, slick){
    // left
    heroSlider.addClass('active');
  });

  heroSlider.slick({
    infinite: true,
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    speed: 500,
    fade: true,
    adaptiveHeight: false,
  });

  // Screenshots Slider
  var screenshotsSlider = $('.screenshots-slider');

  screenshotsSlider.slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    accesibility: false,
    arrows: false,
    dots: true,
    adaptiveHeight: false,
  });

});
