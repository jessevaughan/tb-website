define([
  "jquery",
  "jqueryui",
  "jqueryuitouch",
  "sidr",
  "jquerycookie"
], function($) {

  (function($) {

  if (document.getElementById('mktoForm_1506')) {

    MktoForms2.loadForm("//app-sj03.marketo.com", "964-WFU-818", 1506, function(form) {

      form.onSuccess(function() {

        var langPathTail = '/view';

        window.location.href = window.location.pathname.split(langPathTail)[0] + langPathTail;

        return false;
      });
    }).whenReady(function(form) {

      // Custom Website Element Code
      var websiteElementName = 'Website';
      var websiteElement = form.getFormElem().find('#' + websiteElementName);
      var websiteTrafficElementName = 'Website Traffic';
      if (websiteElement) {
        form.addHiddenFields({
          websiteTrafficElementName: 0
        });
        websiteElement.change(function() {
          // @NOTE usage of anchor.href would not resolve all edge cases
          var value = this.value;
          var protocolParts = value.split('://');
          if (protocolParts.length > 1) {
            value = protocolParts[1];
          }
          value = value.replace(/w{3}([0-9]{1,})?[^a-z]?([.])/gi, '').split(':')[0].split('/')[0].split('?')[0].split('#')[0];
          this.value = value;
          var surl = 'http://api.similarweb.com/Site/' + value + '/v1/visits?gr=monthly&start=1-2015&end=4-2015&md=false&UserKey=ad7e9aa7645c98888f98dbbc47e1b857&Format=JSON';
          $.ajax({
            type: 'GET',
            url: surl,
            crossDomain: true,
            contentType: 'application/json; charset=utf-8',
            dataType: 'jsonp',
            jsonpCallback: 'loginIdCheck',
            success: function(msg) {
              var currentYearTraffic = 0;
              form.setValues({
                websiteTrafficElementName: currentYearTraffic
              });
            },
            async: false,
            cache: false
          });
        });

      }

      // Custom Phone Element Code
      var phoneElementName = 'Phone';
      var phoneElement = form.getFormElem().find('#' + phoneElementName);
      if (phoneElement) {
        phoneElement.attr('placeholder', '(555) 555-5555');
        phoneElement.keyup(function(event) {
          if (event.which != 8) {
            var tempValue = this.value.replace(/[^\d]/g, '');
            if (tempValue.length == 10) {
              tempValue = '(' + tempValue.substr(0, 3) + ') ' + tempValue.substr(3, 3) + '-' + tempValue.substr(6);
            } else if (tempValue.length == 11) {
              tempValue = tempValue.substr(0, 1) + ' ' + '(' + tempValue.substr(1, 3) + ') ' + tempValue.substr(4, 3) + '-' + tempValue.substr(6);
            }
            this.value = tempValue;
          }
        });
      }

      if (phoneElement || websiteElement) {
        form.onValidate(function() {
          form.submitable(true);

          if (websiteElement) {
            // Website value should contain a dot for validation
            if (websiteElement.val().indexOf('.') <= -1) {
              form.submitable(false);
              form.showErrorMessage('Please enter a valid URL', websiteElement);
            }
          }
        });
      }

    });
  }

  })(jQuery); // End jQuery <3 Drupal

  (function($) {

  if (document.getElementById('mktoForm_1505')) {

    MktoForms2.loadForm("//app-sj03.marketo.com", "964-WFU-818", 1505, function(form) {

      form.onSuccess(function() {

        var langPathTail = '/view';

        window.location.href = window.location.pathname.split(langPathTail)[0] + langPathTail;

        return false;
      });
    }).whenReady(function(form) {

      // Custom Website Element Code
      var websiteElementName = 'Website';
      var websiteElement = form.getFormElem().find('#' + websiteElementName);
      var websiteTrafficElementName = 'Website Traffic';
      if (websiteElement) {
        form.addHiddenFields({
          websiteTrafficElementName: 0
        });
        websiteElement.change(function() {
          // @NOTE usage of anchor.href would not resolve all edge cases
          var value = this.value;
          var protocolParts = value.split('://');
          if (protocolParts.length > 1) {
            value = protocolParts[1];
          }
          value = value.replace(/w{3}([0-9]{1,})?[^a-z]?([.])/gi, '').split(':')[0].split('/')[0].split('?')[0].split('#')[0];
          this.value = value;
          var surl = 'http://api.similarweb.com/Site/' + value + '/v1/visits?gr=monthly&start=1-2015&end=4-2015&md=false&UserKey=ad7e9aa7645c98888f98dbbc47e1b857&Format=JSON';
          $.ajax({
            type: 'GET',
            url: surl,
            crossDomain: true,
            contentType: 'application/json; charset=utf-8',
            dataType: 'jsonp',
            jsonpCallback: 'loginIdCheck',
            success: function(msg) {
              var currentYearTraffic = 0;
              form.setValues({
                websiteTrafficElementName: currentYearTraffic
              });
            },
            async: false,
            cache: false
          });
        });

      }

      // Custom Phone Element Code
      var phoneElementName = 'Phone';
      var phoneElement = form.getFormElem().find('#' + phoneElementName);
      if (phoneElement) {
        phoneElement.attr('placeholder', '(555) 555-5555');
        phoneElement.keyup(function(event) {
          if (event.which != 8) {
            var tempValue = this.value.replace(/[^\d]/g, '');
            if (tempValue.length == 10) {
              tempValue = '(' + tempValue.substr(0, 3) + ') ' + tempValue.substr(3, 3) + '-' + tempValue.substr(6);
            } else if (tempValue.length == 11) {
              tempValue = tempValue.substr(0, 1) + ' ' + '(' + tempValue.substr(1, 3) + ') ' + tempValue.substr(4, 3) + '-' + tempValue.substr(6);
            }
            this.value = tempValue;
          }
        });
      }

      if (phoneElement || websiteElement) {
        form.onValidate(function() {
          form.submitable(true);

          if (websiteElement) {
            // Website value should contain a dot for validation
            if (websiteElement.val().indexOf('.') <= -1) {
              form.submitable(false);
              form.showErrorMessage('Please enter a valid URL', websiteElement);
            }
          }
        });
      }

    });
  }

  })(jQuery); // End jQuery <3 Drupal


  (function($) {
    if (document.getElementById('mktoForm_1680')) {
      MktoForms2.loadForm("//app-sj03.marketo.com", "964-WFU-818", 1680, function(form) {
        form.onSuccess(function() {
          var langPathTail = '/view';
          window.location.href = window.location.pathname.split(langPathTail)[0] + langPathTail;
          return false;
        });
      }).whenReady(function(form) {

      });
    }
  })(jQuery); // End jQuery <3 Drupal


  // SIDR
  if ($('#mobile-nav').length > 0) {
    $("#simple-menu").sidr({
      side: "right"
    });
  }


  // REGION PICKER
  (function ($) {

    // Detect which language and hide current from list
    lt = location.pathname.split('/')[1];
    $("#nav-opt li").each(function(){

      // Variables
      // US
      var enus = document.getElementById('en-us');
      var enuslink = document.getElementById('en-us-link');

      // UK
      var engb = document.getElementById('en-gb');
      var engblink = document.getElementById('en-gb-link');
      var engburl = ('/en-GB' + window.location.pathname);

      // JP
      var enjp = document.getElementById('ja-jp');
      var enjplink = document.getElementById('ja-jp-link');
      var enjpurl = ('/ja-JP' + window.location.pathname);

      // DE
      var ende = document.getElementById('de-de');
      var endelink = document.getElementById('de-de-link');
      var endeurl = ('/de-DE' + window.location.pathname);

      // ES
      var enes = document.getElementById('es-es');
      var eneslink = document.getElementById('es-es-link');
      var enesurl = ('/es-ES' + window.location.pathname);

      // NL
      var ennl = document.getElementById('nl-nl');
      var ennllink = document.getElementById('nl-nl-link');
      var ennlurl = ('/nl-NL' + window.location.pathname);

      // FR
      var enfr = document.getElementById('fr-fr');
      var enfrlink = document.getElementById('fr-fr-link');
      var enfrurl = ('/fr-FR' + window.location.pathname);

      // IE
      var enie = document.getElementById('en-ie');
      var enielink = document.getElementById('en-ie-link');
      var enieurl = ('/en-IE' + window.location.pathname);

      // AU
      var enau = document.getElementById('en-au');
      var enaulink = document.getElementById('en-au-link');
      var enauurl = ('/en-AU' + window.location.pathname);

      // IT
      var enit = document.getElementById('it-it');
      var enitlink = document.getElementById('it-it-link');
      var eniturl = ('/it-IT' + window.location.pathname);

      var engbjpurl = document.URL.replace(/en-GB\//, "ja-JP/");
      var engbdeurl = document.URL.replace(/en-GB\//, "de-DE/");
      var engbesurl = document.URL.replace(/en-GB\//, "es-ES/");
      var engbnlurl = document.URL.replace(/en-GB\//, "nl-NL/");
      var engbfrurl = document.URL.replace(/en-GB\//, "fr-FR/");
      var engbieurl = document.URL.replace(/en-GB\//, "en-IE/");
      var engbauurl = document.URL.replace(/en-GB\//, "en-AU/");
      var engbiturl = document.URL.replace(/en-GB\//, "it-IT/");

      var enjpgburl = document.URL.replace(/ja-JP\//, "en-GB/");
      var enjpdeurl = document.URL.replace(/ja-JP\//, "de-DE/");
      var enjpesurl = document.URL.replace(/ja-JP\//, "es-ES/");
      var enjpnlurl = document.URL.replace(/ja-JP\//, "nl-NL/");
      var enjpfrurl = document.URL.replace(/ja-JP\//, "fr-FR/");
      var enjpieurl = document.URL.replace(/ja-JP\//, "en-IE/");
      var enjpauurl = document.URL.replace(/ja-JP\//, "en-AU/");
      var enjpiturl = document.URL.replace(/ja-JP\//, "it-IT/");

      var endejpurl = document.URL.replace(/de-DE\//, "ja-JP/");
      var endegburl = document.URL.replace(/de-DE\//, "en-GB/");
      var endeesurl = document.URL.replace(/de-DE\//, "es-ES/");
      var endenlurl = document.URL.replace(/de-DE\//, "nl-NL/");
      var endefrurl = document.URL.replace(/de-DE\//, "fr-FR/");
      var endeieurl = document.URL.replace(/de-DE\//, "en-IE/");
      var endeauurl = document.URL.replace(/de-DE\//, "en-AU/");
      var endeiturl = document.URL.replace(/de-DE\//, "it-IT/");

      var enesjpurl = document.URL.replace(/es-ES\//, "ja-JP/");
      var enesgburl = document.URL.replace(/es-ES\//, "en-GB/");
      var enesdeurl = document.URL.replace(/es-ES\//, "de-DE/");
      var enesnlurl = document.URL.replace(/es-ES\//, "nl-NL/");
      var enesfrurl = document.URL.replace(/es-ES\//, "fr-FR/");
      var enesieurl = document.URL.replace(/es-ES\//, "en-IE/");
      var enesauurl = document.URL.replace(/es-ES\//, "en-AU/");
      var enesiturl = document.URL.replace(/es-ES\//, "it-IT/");

      var ennljpurl = document.URL.replace(/nl-NL\//, "ja-JP/");
      var ennlgburl = document.URL.replace(/nl-NL\//, "en-GB/");
      var ennlesurl = document.URL.replace(/nl-NL\//, "es-ES/");
      var ennldeurl = document.URL.replace(/nl-NL\//, "de-DE/");
      var ennlfrurl = document.URL.replace(/nl-NL\//, "fr-FR/");
      var ennlieurl = document.URL.replace(/nl-NL\//, "en-IE/");
      var ennlauurl = document.URL.replace(/nl-NL\//, "en-AU/");
      var ennliturl = document.URL.replace(/nl-NL\//, "it-IT/");

      var enfrjpurl = document.URL.replace(/fr-FR\//, "ja-JP/");
      var enfrgburl = document.URL.replace(/fr-FR\//, "en-GB/");
      var enfresurl = document.URL.replace(/fr-FR\//, "es-ES/");
      var enfrnlurl = document.URL.replace(/fr-FR\//, "nl-NL/");
      var enfrdeurl = document.URL.replace(/fr-FR\//, "de-DE/");
      var enfrieurl = document.URL.replace(/fr-FR\//, "en-IE/");
      var enfrauurl = document.URL.replace(/fr-FR\//, "en-AU/");
      var enfriturl = document.URL.replace(/fr-FR\//, "it-IT/");

      var eniejpurl = document.URL.replace(/en-IE\//, "ja-JP/");
      var eniegburl = document.URL.replace(/en-IE\//, "en-GB/");
      var enieesurl = document.URL.replace(/en-IE\//, "es-ES/");
      var enienlurl = document.URL.replace(/en-IE\//, "nl-NL/");
      var eniedeurl = document.URL.replace(/en-IE\//, "de-DE/");
      var enieauurl = document.URL.replace(/en-IE\//, "en-AU/");
      var eniefrurl = document.URL.replace(/en-IE\//, "fr-FR/");
      var enieiturl = document.URL.replace(/en-IE\//, "it-IT/");

      var enaujpurl = document.URL.replace(/en-AU\//, "ja-JP/");
      var enaugburl = document.URL.replace(/en-AU\//, "en-GB/");
      var enauesurl = document.URL.replace(/en-AU\//, "es-ES/");
      var enaunlurl = document.URL.replace(/en-AU\//, "nl-NL/");
      var enaudeurl = document.URL.replace(/en-AU\//, "de-DE/");
      var enauieurl = document.URL.replace(/en-AU\//, "en-IE/");
      var enaufrurl = document.URL.replace(/en-AU\//, "fr-FR/");
      var enauiturl = document.URL.replace(/en-AU\//, "it-IT/");

      var enitjpurl = document.URL.replace(/it-IT\//, "ja-JP/");
      var enitgburl = document.URL.replace(/it-IT\//, "en-GB/");
      var enitesurl = document.URL.replace(/it-IT\//, "es-ES/");
      var enitnlurl = document.URL.replace(/it-IT\//, "nl-NL/");
      var enitdeurl = document.URL.replace(/it-IT\//, "de-DE/");
      var enitieurl = document.URL.replace(/it-IT\//, "en-IE/");
      var enitauurl = document.URL.replace(/it-IT\//, "en-AU/");
      var enitfrurl = document.URL.replace(/it-IT\//, "fr-FR/");


      var engbusurl = document.URL.replace(/en-GB\//, "");
      var enjpusurl = document.URL.replace(/ja-JP\//, "");
      var endeusurl = document.URL.replace(/de-DE\//, "");
      var enesusurl = document.URL.replace(/es-ES\//, "");
      var ennlusurl = document.URL.replace(/nl-NL\//, "");
      var enfrusurl = document.URL.replace(/fr-FR\//, "");
      var enieusurl = document.URL.replace(/en-IE\//, "");
      var enauusurl = document.URL.replace(/en-AU\//, "");
      var enitusurl = document.URL.replace(/it-IT\//, "");


      if ( lt == "en-GB" ) {
        document.getElementById('lang-current').innerHTML="<img src='/assets/flags/gb.png'> UK";
        enuslink.setAttribute('href', engbusurl);
        enjplink.setAttribute('href', engbjpurl);
        endelink.setAttribute('href', engbdeurl);
        eneslink.setAttribute('href', engbesurl);
        ennllink.setAttribute('href', engbnlurl);
        enfrlink.setAttribute('href', engbfrurl);
        enielink.setAttribute('href', engbieurl);
        enaulink.setAttribute('href', engbauurl);
        enitlink.setAttribute('href', engbiturl);
        engb.style.display='none';
      }
      else if ( lt == "ja-JP" ) {
        document.getElementById('lang-current').innerHTML="<img src='/assets/flags/jp.png'> 日本";
        enuslink.setAttribute('href', enjpusurl);
        engblink.setAttribute('href', enjpgburl);
        endelink.setAttribute('href', enjpdeurl);
        eneslink.setAttribute('href', enjpesurl);
        ennllink.setAttribute('href', enjpnlurl);
        enfrlink.setAttribute('href', enjpfrurl);
        enielink.setAttribute('href', enjpieurl);
        enaulink.setAttribute('href', enjpauurl);
        enitlink.setAttribute('href', enjpiturl);
        enjp.style.display='none';
      }
      else if ( lt == "de-DE" ) {
        document.getElementById('lang-current').innerHTML="<img src='/assets/flags/de.png'> Deutschland";
        enuslink.setAttribute('href', endeusurl);
        enjplink.setAttribute('href', endejpurl);
        engblink.setAttribute('href', endegburl);
        eneslink.setAttribute('href', endeesurl);
        ennllink.setAttribute('href', endenlurl);
        enfrlink.setAttribute('href', endefrurl);
        enielink.setAttribute('href', endeieurl);
        enaulink.setAttribute('href', endeauurl);
        enitlink.setAttribute('href', endeiturl);
        ende.style.display='none';
      }
      else if ( lt == "es-ES" ) {
        document.getElementById('lang-current').innerHTML="<img src='/assets/flags/es.png'> España";
        enuslink.setAttribute('href', enesusurl);
        enjplink.setAttribute('href', enesjpurl);
        endelink.setAttribute('href', enesdeurl);
        engblink.setAttribute('href', enesgburl);
        ennllink.setAttribute('href', enesnlurl);
        enfrlink.setAttribute('href', enesfrurl);
        enielink.setAttribute('href', enesieurl);
        enaulink.setAttribute('href', enesauurl);
        enitlink.setAttribute('href', enesiturl);
        enes.style.display='none';
      }
      else if ( lt == "nl-NL" ) {
        document.getElementById('lang-current').innerHTML="<img src='/assets/flags/nl.png'> Nederland";
        enuslink.setAttribute('href', ennlusurl);
        enjplink.setAttribute('href', ennljpurl);
        endelink.setAttribute('href', ennldeurl);
        engblink.setAttribute('href', ennlgburl);
        eneslink.setAttribute('href', ennlesurl);
        enfrlink.setAttribute('href', ennlfrurl);
        enielink.setAttribute('href', ennlieurl);
        enaulink.setAttribute('href', ennlauurl);
        enitlink.setAttribute('href', ennliturl);
        ennl.style.display='none';
      }
      else if ( lt == "fr-FR" ) {
        document.getElementById('lang-current').innerHTML="<img src='/assets/flags/fr.png'> France";
        enuslink.setAttribute('href', enfrusurl);
        enjplink.setAttribute('href', enfrjpurl);
        endelink.setAttribute('href', enfrdeurl);
        engblink.setAttribute('href', enfrgburl);
        eneslink.setAttribute('href', enfresurl);
        ennllink.setAttribute('href', enfrnlurl);
        enielink.setAttribute('href', enfrieurl);
        enaulink.setAttribute('href', enfrauurl);
        enitlink.setAttribute('href', enfriturl);
        enfr.style.display='none';
      }
      else if ( lt == "en-IE" ) {
        document.getElementById('lang-current').innerHTML="<img src='/assets/flags/ie.png'> Ireland";
        enuslink.setAttribute('href', enieusurl);
        enjplink.setAttribute('href', eniejpurl);
        endelink.setAttribute('href', eniedeurl);
        engblink.setAttribute('href', eniegburl);
        eneslink.setAttribute('href', enieesurl);
        ennllink.setAttribute('href', enienlurl);
        enaulink.setAttribute('href', enieauurl);
        enitlink.setAttribute('href', enieiturl);
        enfrlink.setAttribute('href', eniefrurl);
        enie.style.display='none';
      }
      else if ( lt == "en-AU" ) {
        document.getElementById('lang-current').innerHTML="<img src='/assets/flags/au.png'> Australia";
        enuslink.setAttribute('href', enauusurl);
        enjplink.setAttribute('href', enaujpurl);
        endelink.setAttribute('href', enaudeurl);
        engblink.setAttribute('href', enaugburl);
        eneslink.setAttribute('href', enauesurl);
        ennllink.setAttribute('href', enaunlurl);
        enielink.setAttribute('href', enauieurl);
        enitlink.setAttribute('href', enauiturl);
        enfrlink.setAttribute('href', enaufrurl);
        enau.style.display='none';
      }
      else if ( lt == "it-IT" ) {
        document.getElementById('lang-current').innerHTML="<img src='/assets/flags/it.png'> Italia";
        enuslink.setAttribute('href', enitusurl);
        enjplink.setAttribute('href', enitjpurl);
        endelink.setAttribute('href', enitdeurl);
        engblink.setAttribute('href', enitgburl);
        eneslink.setAttribute('href', enitesurl);
        ennllink.setAttribute('href', enitnlurl);
        enielink.setAttribute('href', enitieurl);
        enaulink.setAttribute('href', enitauurl);
        enfrlink.setAttribute('href', enitfrurl);
        enit.style.display='none';
      }
      else if ( lt == "content" ) {
        $(".lang-nav").hide();
      }
      else {
        document.getElementById('lang-current').innerHTML="<img src='/assets/flags/us.png'> USA";
        engblink.setAttribute('href', engburl);
        enjplink.setAttribute('href', enjpurl);
        endelink.setAttribute('href', endeurl);
        eneslink.setAttribute('href', enesurl);
        ennllink.setAttribute('href', ennlurl);
        enielink.setAttribute('href', enieurl);
        enaulink.setAttribute('href', enauurl);
        enitlink.setAttribute('href', eniturl);
        enfrlink.setAttribute('href', enfrurl);
        enus.style.display='none';
      }
    })

    // Clickable Dropdown
    //$('.lang-nav > ul').toggleClass('no-js js');
    //$('.lang-nav .js ul').hide();
    //$('.lang-nav .js').click(function(e) {
    //$('.lang-nav .js ul').slideToggle(200);
    //$('.clicker').toggleClass('active');
    //  e.stopPropagation();
    //});
    //$(document).click(function() {
    //  if ($('.lang-nav .js ul').is(':visible')) {
    //      $('.lang-nav .js ul', this).slideUp();
    //      $('.clicker').removeClass('active');
    //  }
    //});

  })(jQuery);

  if ($('#footer-nav').length > 0) {
    /*<![CDATA[*/
    (function(){var g=573,i=412,j=1,a=false,h=document,l=h.getElementById("_bapw-link"),e=(h.location.protocol=="index.html"),f="https://",c=f+"c.betrad.com/pub/",m=window._bap_p_overrides,k=e||(m&&m.hasOwnProperty(g)&&m[g].new_window);jQuery('#_bapw-link').prepend('<img id="_bapw-icon"/>');function b(n){var d=new Image();d.src=f+"l.betrad.com/pub/p.gif?pid="+g+"&ocid="+i+"&i"+n+"=1&r="+Math.random()}h.getElementById("_bapw-icon").src=c+"icon1.png";l.onmouseover=function(){if(/#$/.test(l.href)){l.href="http://info.evidon.com/pub_info/"+g+"?v=1&nt="+j+"&nw="+(k?"true":"false")}};l.onclick=function(){function d(p,s){var q=h.getElementsByTagName("head")[0]||h.documentElement,o=a,n=h.createElement("script");function r(){n.onload=n.onreadystatechange=null;q.removeChild(n);s()}n.src=p;n.onreadystatechange=function(){if(!o&&(this.readyState=="loaded"||this.readyState=="complete")){o=true;r()}};n.onload=r;q.insertBefore(n,q.firstChild)}if(k){b("c");return true}this.onclick="return "+a;d(f+"ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",function(){d(c+"pub2.js",function(){BAPW.i(l,{pid:g,ocid:i})})});return a};b("i")}());
    /*]]>*/
  }

  // AD GALLERY HEADER
  if ($('#ad-gallery-header').length > 0) {
    require(["app/ad-gallery"], function() {

    });
  }

  // RESOURCES FILTER
  if ($('#resources-content-wrap').length > 0) {
    require(["app/resources-filter"], function() {

    });
  }

  // HOMEPAGE HERO
  if ($('#homepage-hero').length > 0) {
    require(["app/homepage"], function() {

    });
  }

  // SMOOTH SCROLL
  if ($('.smooth-scroll').length > 0) {
    require(["app/scroll"], function() {

    });
  }

  if ($('#ad-gallery-slider').length > 0) {
    require(["app/ad-gallery"], function() {

    });
  }

  if ($('#b2b-dashboard').length > 0) {
    $('#b2b-dashboard a').click(function(){
      $('a').removeClass('clicked');
      $(this).addClass('clicked');
    });
  }

  // NAV CHANGE
  if ($('.nav-wrapper').length > 0) {
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 25)
        $("#desktop-nav-clear").addClass("nav-alternate");
      else
        $("#desktop-nav-clear").removeClass("nav-alternate");
    })
  }

});