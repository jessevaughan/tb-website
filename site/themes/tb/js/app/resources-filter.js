define([
  "jquery"
], function($) {

  var url = $(location).attr('href');
  var cur = url.split("/");
  var reg = cur[3];
  console.log(reg);

  window.onload = function() {

    if (reg === "en-GB"){
      $("#enGB").click();
    } else if (reg === "en-AU"){
      $("#enAU").click();
    } else if (reg === "ja-JP"){
      $("#jaJP").click();
    } else if (reg === "fr-FR"){
      $("#frFR").click();
    } else if (reg === "de-DE"){
      $("#deDE").click();
    } else if (reg === "es-ES"){
      $("#esES").click();
    } else if (reg === "nl-NL"){
      $("#nlNL").click();
    } else {
      $("#enUS").click();
    }

    $("#all").click();
    $('*[data-category*="noresults"]').hide();

  };

  var byProperty = [],
      byColor = [],
      byLocation = [];

  $("input[name=rs-region]").on("change", function() {
    if (this.checked) byProperty.push("[data-category~='" + $(this).attr("value") + "']");
    else removeA(byProperty, "[data-category~='" + $(this).attr("value") + "']");
  });

  $("input[name=rs-vertical]").on("change", function() {
    if (this.checked) byColor.push("[data-category~='" + $(this).attr("value") + "']");
    else removeA(byColor, "[data-category~='" + $(this).attr("value") + "']");
  });

  $("input[name=rs-product]").on("change", function() {
    if (this.checked) byLocation.push("[data-category~='" + $(this).attr("value") + "']");
    else removeA(byLocation, "[data-category~='" + $(this).attr("value") + "']");
  });

  $("input").on("change", function() {
    var str = "Include items \n";
    var selector = '',
        cselector = '',
        nselector = '';

    var $lis = $('.rs-grids > div'),
      $checked = $('input:checked');

    if ($checked.length) {

      if (byProperty.length) {
        if (str == "Include items \n") {
          str += "    " + "with (" + byProperty.join(',') + ")\n";
          $($('input[name=rs-region]:checked')).each(function(index, byProperty) {
            if (selector === '') {
              selector += "[data-category~='" + byProperty.id + "']";
            } else {
              selector += ",[data-category~='" + byProperty.id + "']";
            }
          });
        } else {
          str += "    AND " + "with (" + byProperty.join(' OR ') + ")\n";
          $($('input[name=rs-vertical]:checked')).each(function(index, byProperty) {
            selector += "[data-category~='" + byProperty.id + "']";
          });
        }
      }

      if (byColor.length) {
        if (str == "Include items \n") {
          str += "    " + "with (" + byColor.join(' OR ') + ")\n";
          $($('input[name=rs-vertical]:checked')).each(function(index, byColor) {
            if (selector === '') {
              selector += "[data-category~='" + byColor.id + "']";
            } else {
              selector += ",[data-category~='" + byColor.id + "']";
            }
          });
        } else {
          str += "    AND " + "with (" + byColor.join(' OR ') + ")\n";
          $($('input[name=rs-vertical]:checked')).each(function(index, byColor) {
            if (cselector === '') {
              cselector += "[data-category~='" + byColor.id + "']";
            } else {
              cselector += ",[data-category~='" + byColor.id + "']";
            }
          });
        }
      }

      if (byLocation.length) {
        if (str == "Include items \n") {
          str += "    " + "with (" + byLocation.join(' OR ') + ")\n";
          $($('input[name=rs-product]:checked')).each(function(index, byLocation) {
            if (selector === '') {
              selector += "[data-category~='" + byLocation.id + "']";
            } else {
              selector += ",[data-category~='" + byLocation.id + "']";
            }
          });
        } else {
          str += "    AND " + "with (" + byLocation.join(' OR ') + ")\n";
          $($('input[name=rs-product]:checked')).each(function(index, byLocation) {
            if (nselector === '') {
              nselector += "[data-category~='" + byLocation.id + "']";
            } else {
              nselector += ",[data-category~='" + byLocation.id + "']";
            }
          });
        }
      }

      $lis.hide();
      console.log(selector);
      console.log(cselector);
      console.log(nselector);

      if (cselector === '' && nselector === '') {
        $('.rs-grids > div').filter(selector).show();
      } else if (cselector === '') {
        $('.rs-grids > div').filter(selector).filter(nselector).show();
      } else if (nselector === '') {
        $('.rs-grids > div').filter(selector).filter(cselector).show();
      } else {
        $('.rs-grids > div').filter(selector).filter(cselector).filter(nselector).show();
      }

    } else {
      $lis.show();
    }

    $("#result").html(str);

  });

  function removeA(arr) {
    var what, a = arguments,
      L = a.length,
      ax;
    while (L > 1 && arr.length) {
      what = a[--L];
      while ((ax = arr.indexOf(what)) !== -1) {
        arr.splice(ax, 1);
      }
    }
    return arr;
  }

});