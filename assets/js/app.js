define([
    'marionette'
], function(Marionette) {

    var pageCreatorApp = new Marionette.Application()

    // REGIONS -----------------------------------------------------------------
    pageCreatorApp.addRegions({
        pageRegion:     '.js-page',
        elementsRegion: '.js-elements__navigation'
    })

    // NAVIGATION --------------------------------------------------------------
    pageCreatorApp.navigate = function(route, options) {
        options || (options = {})
        Backbone.history.navigate(route, options)
    };

    pageCreatorApp.getCurrentRoute = function() {
        if (Backbone.history.fragment === undefined) return ''
        return Backbone.history.fragment
    };

    // EVENTS ------------------------------------------------------------------
    pageCreatorApp.listenTo(pageCreatorApp, "action:execute", function(action, params) {
        // execute your code here for app wide events received for action "action:execute"
    })

    // INIT --------------------------------------------------------------------
    pageCreatorApp.listenTo(pageCreatorApp, "start", function() {
        if (Backbone.history) {
            Backbone.history.start()

            if (this.getCurrentRoute() === "") {
                // call default action here for when the url is empty of options
            }
        }
    })

    return pageCreatorApp
})
