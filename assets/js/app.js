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
  var RouterOptions = {
    appRoutes: {
      'elements/': 'startElementsApp'
    },
    controller: {
      startElementsApp: function() {
        /**
         * Wäre geil wenn die app files schon geladen wären
         * und der router einer region nurnoch sagt start:[appname]
         * wobei [appname] von der current route abgeleitet wird
         * das module könnte sich dann selbst starten
         */
        require(['apps/elements/elements_app'], function () {
          pageCreatorApp.module('ElementsApp').start()
        })
      }
    }
  }

  // Initialization
  pageCreatorApp.on('before:start', function () {
    pageCreatorApp.regions = new AppLayoutView
    pageCreatorApp.router  = new Marionette.AppRouter(RouterOptions)
  })

  pageCreatorApp.listenTo(pageCreatorApp, "start", function () {
    if (Backbone.history) {
      Backbone.history.start()

      this.debug(
        'app started',
        {
          route: pageCreatorApp.getCurrentRoute(),
          regions: pageCreatorApp.regions
        }
      )
    }
  })

  return pageCreatorApp
})
