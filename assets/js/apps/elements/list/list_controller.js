define([
    'app',
    'apps/elements/list/list_view'
], function(pageCreatorApp) {
    pageCreatorApp.module("ElementsApp.List", function(List, pageCreatorApp, Backbone, Marionette, $, _) {
        var Controller = Marionette.Controller.extend({
            action: function() {
                var self = List.Controller;

                // FETCH RESULTS FROM ENTITY -----------------------------------
                var fetchRequest = pageCreatorApp.request("example:entities");

                $.when(fetchRequest).done(function(fetchedCollection) {
                    var exampleView = new List.ExampleView({
                        collection: fetchedCollection
                    });

                    // VIEW EVENTS ---------------------------------------------
                    self.listenTo(exampleView, "view:action", function() {
                        pageCreatorApp.ElementsApp.trigger("example:otherAction");
                    });

                    pageCreatorApp.mainRegion.show(exampleView);
                }).fail(function(response, model) {
                    // If the rerouting is not done in the entity, then pass the response here and call the redirect method you want according to the response status (401, 403, 422, etc)

                });
            },

            action2: function() {
                // do operations here
            }
        });

        List.Controller = new Controller();
    });

    return pageCreatorApp.ElementsApp.List;
});
