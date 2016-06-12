requirejs.config({
    baseUrl: 'js/app',
    paths: {
        templates: '../views',
        jquery: '../lib/jquery-2.2.4.min',
        underscore: '../lib/underscore-min',
        backbone: '../lib/backbone-min',
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
        }
    }
})