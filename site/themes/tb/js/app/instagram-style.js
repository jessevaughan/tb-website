define([
  "jquery",
  "scrollnav"
], function($) {

  $('.guide_body').scrollNav({
      fixedMargin: 0,
      scrollOffset: 20,
      sectionElem: 'div',
      arrowKeys: true,
      showTopLink: false,
      insertTarget: '.side-nav',
      insertLocation: 'appendTo',
      showHeadline: false
  });

  document.getElementById('span-00').onclick = function(){
     document.getElementById('tip-ru').classList.toggle("expand");
  }
  document.getElementById('span-01').onclick = function(){
     document.getElementById('tip-01').classList.toggle("expand");
  }
  document.getElementById('span-02').onclick = function(){
     document.getElementById('tip-02').classList.toggle("expand");
  }
  document.getElementById('span-03').onclick = function(){
     document.getElementById('tip-03').classList.toggle("expand");
  }
  document.getElementById('span-04').onclick = function(){
     document.getElementById('tip-04').classList.toggle("expand");
  }
  document.getElementById('span-05').onclick = function(){
     document.getElementById('tip-05').classList.toggle("expand");
  }

  var $video = $('.video');
  $video.on('canplaythrough', function() {
    this.play();
  });

});
