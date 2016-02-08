define([
  'marionette',
  'backbone',
  'jquery'
], function (Marionette, Backbone, $) {

  var pageCreatorApp = new Marionette.Application({debug: true})
  $.extend(pageCreatorApp, {
    /**
     * @param {string} message
     * @param {object} data
     */
    debug: function (message, data) {
      var isDebugEnabled = Marionette.getOption(pageCreatorApp, 'debug')
      if (isDebugEnabled && window.console) {
        console.log(message, data)
      }
    },

    /**
     * @param {string} route
     * @param {object} options
     */
    navigate: function (route, options) {
      options || (options = {})
      Backbone.history.navigate(route, options)
    },

    /**
     * @returns {string}
     */
    getCurrentRoute: function () {
      if (Backbone.history.fragment === undefined) {
        return ''
      }

      return Backbone.history.fragment
    }
  })

  // Add Layout to Application
  var AppLayoutView = Marionette.LayoutView.extend({
    el: 'body',
    regions: {
      pagePreview: '.js-page__preview',
      elements: '.js-content-elements'
    }
  })

  // Router and Api
  // TODO: instead of router may use even triggers to start sub apps
  pageCreatorApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'elements/': 'startElementsApp'
    }
  })

  var PageCreatorAppController = {
    startElementsApp: function() {

      pageCreatorApp.debug(
        'startElementsApp'
      )
    }
  }

  // Initialization
  pageCreatorApp.on('before:start', function () {
    pageCreatorApp.regions = new AppLayoutView
  })

  pageCreatorApp.listenTo(pageCreatorApp, "start", function () {
    if (Backbone.history) {
      Backbone.history.start()

      new pageCreatorApp.Router({controller: PageCreatorAppController})

      var currentRoute = this.getCurrentRoute()
      // TODO: trigger route when page is opened with a defined route
      //if (currentRoute !== '') {
      //  this.navigate(currentRoute)
      //}

      this.debug(
        'app started',
        {route: currentRoute}
      )
    }
  })

  return pageCreatorApp
})
