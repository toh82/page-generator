define([
    'app',
    'tpl!apps/elements/list/templates/list_template.tpl',
    'tpl!apps/elements/list/templates/list_collection_template.tpl'
], function(pageCreatorApp, ExampleTpl, ExampleCollectionTpl) { 
    pageCreatorApp.module("ElementsApp.List", function(List, pageCreatorApp, Backbone, Marionette, $, _) {

        // EXAMPLE -------------------------------------------------------
        List.ExampleView = Marionette.ItemView.extend({
            template: ExampleTpl,
            tagName: "tr",
            events: {
                "click someElement": "action"
            },
            action: function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.trigger("view:action");
            }
        });

        List.ExampleCollectionView = Marionette.CollectionView.extend({
            tagName: "table",
            template: ExampleCollectionTpl,
            childView: List.ExampleView,
            childViewContainer: "tbody"
        });
    });

    return pageCreatorApp.ElementsApp.List;
});
