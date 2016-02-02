define([
    'app',
    'tpl!apps/elements/show/templates/show_template.tpl'
], function(pageCreatorApp, ExampleTpl) { 
    pageCreatorApp.module("ElementsApp.Show", function(Show, pageCreatorApp, Backbone, Marionette, $, _) {

        // EXAMPLE -------------------------------------------------------
        Show.ExampleView = Marionette.ItemView.extend({
            template: ExampleTpl,
            events: {
                "click someElement": "action"
            },
            action: function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.trigger("view:action");
            }
        });
    });

    return pageCreatorApp.ElementsApp.Show;
});
