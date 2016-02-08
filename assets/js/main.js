requirejs.config({
  baseUrl: 'assets/js',
  locale: 'de',
  paths: {
    'backbone': 'libs/backbone-min',
    'marionette': 'libs/backbone.marionette',
    'jquery': 'libs/jquery.min',
    'underscore': 'libs/underscore-min',
    'text': 'vendor/text',
    'handlebars': 'libs/handlebars.amd.min'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      deps: ['jquery'],
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'marionette': {
      deps: ['backbone'],
      exports: 'Marionette'
    }
  }
})

require([
  'app'
], function (pageCreatorApp) {
  pageCreatorApp.start()
})
