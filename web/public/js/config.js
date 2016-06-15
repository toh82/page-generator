requirejs.config({
  baseUrl: 'js/app',
  paths: {
    templates: '../views',
    jquery: '../lib/jquery-2.2.4.min',
    underscore: '../lib/underscore-min',
    backbone: '../lib/backbone-min',
    wreqr: '../lib/backbone.wreqr',
    babysitter: '../lib/backbone.babysitter',
    marionette: '../lib/backbone.marionette',
    handlebars: '../lib/handlebars.amd',
    text: '../lib/text',
    app: '../app'
  },
  shim: {
    underscore: {
      deps: ['jquery'],
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['backbone', 'wreqr', 'babysitter'],
      exports: 'marionette'
    },
    handlebars: {
      deps: ['jquery']
    }
  }
})
