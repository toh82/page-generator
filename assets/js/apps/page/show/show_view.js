define([
    'app',
    'text!apps/page/show/templates/show-template.html'
], function(pageCreatorApp, ExampleTpl) {
    pageCreatorApp.module("PageApp.Show", function(Show, pageCreatorApp, Backbone, Marionette, $, _) {

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

    return pageCreatorApp.PageApp.Show;
});
