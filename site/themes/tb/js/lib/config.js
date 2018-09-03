requirejs.config({
  baseUrl: '/site/themes/adroll/js',
  paths: {
    jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
      'jquery-2.2.0.min'
    ],
    jqueryui: [
      '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min',
      'jqueryui-1.10.4'
    ],
    sidr: [
      '//cdn.jsdelivr.net/jquery.sidr/2.2.1/jquery.sidr.min',
      'jquery-sidr-2.2.1.min'
    ],
    jqueryuitouch: '//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min',
    jquerycookie: 'jquery-cookie-1.4.0'
  },
  shim: {
    'jqueryui': ['jquery'],
    'jqueryuitouch': {
      deps:['jquery','jqueryui'],
      exports: 'jqueryuitouch'
    },
    'sidr': ['jquery'],
    'jquerycookie': ['jquery']
  }
});

requirejs(['main']);