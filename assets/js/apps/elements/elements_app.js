define([
    'app',
    'apps/elements/show/show_controller',
    'apps/elements/list/list_controller'
], function(pageCreatorApp) {

    // MODULE DEFINITION  ------------------------------------------------------
    pageCreatorApp.module("ElementsApp", function(ElementsApp, pageCreatorApp, Backbone, Marionette, $, _) {
            
        // ROUTER --------------------------------------------------------------
        ElementsApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "example": "action",
                "otherExample": "action2"
            }
        });

        // API -----------------------------------------------------------------
        var API = {
            action: function() {
                pageCreatorApp.ElementsApp.Show.Controller.action();
            },
            action2: function() {
                pageCreatorApp.ElementsApp.Show.Controller.action2();
            }
        };

        // EVENTS --------------------------------------------------------------
        var self = ElementsApp;

        self.listenTo(ElementsApp, "example:action", function() {
            API.action();
        });

        self.listenTo(ElementsApp, "example:otherAction", function() {
            API.action2();
        });

        // INIT ----------------------------------------------------------------
        pageCreatorApp.addInitializer(function() {
            new ElementsApp.Router({
                controller: API
            });
        });
    });

    return pageCreatorApp.ElementsApp;
});
