
requirejs.config({
    baseUrl: 'assets/js',
    locale: 'de',
    paths: {
        'backbone':             'vendor/backbone',
        'marionette':           'vendor/backbone.marionette',
        'jquery':               'vendor/jquery',
        'underscore':           'vendor/underscore',
        'text':                 'vendor/text',
        'json2':                'vendor/json2'
    },
    shim: {
        'jquery': {
            exports:            '$'
        },
        'underscore': {
            deps:               ['jquery'],
            exports:            '_'
        },
        'backbone': {
            deps:               ['jquery', 'underscore', 'json2'],
            exports:            'Backbone'
        },
        'marionette': {
            deps:               ['backbone'],
            exports:            'Marionette'
        }
    }
})

require([
    'app'
], function(pageCreatorApp) {
    pageCreatorApp.start()
})
