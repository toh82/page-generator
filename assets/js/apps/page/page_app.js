define([
    'app',
    'apps/page/show/show_controller',
    'apps/page/list/list_controller'
], function(pageCreatorApp) {

    // MODULE DEFINITION  ------------------------------------------------------
    pageCreatorApp.module("PageApp", function(PageApp, pageCreatorApp, Backbone, Marionette, $, _) {
            
        // ROUTER --------------------------------------------------------------
        PageApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "example": "action",
                "otherExample": "action2"
            }
        });

        // API -----------------------------------------------------------------
        var API = {
            action: function() {
                pageCreatorApp.PageApp.Show.Controller.action();
            },
            action2: function() {
                pageCreatorApp.PageApp.Show.Controller.action2();
            }
        };

        // EVENTS --------------------------------------------------------------
        var self = PageApp;

        self.listenTo(PageApp, "example:action", function() {
            API.action();
        });

        self.listenTo(PageApp, "example:otherAction", function() {
            API.action2();
        });

        // INIT ----------------------------------------------------------------
        pageCreatorApp.addInitializer(function() {
            new PageApp.Router({
                controller: API
            });
        });
    });

    return pageCreatorApp.PageApp;
});
