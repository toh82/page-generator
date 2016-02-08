define([
  'app',
  'text!apps/elements/template/layout.html'
], function (pageCreatorApp, layoutTemplate) {

  pageCreatorApp.module("ElementsApp", function (ElementsApp, pageCreatorApp, Backbone, Marionette, $, _) {
    this.startWithParent = false

    var moduleName = 'content-elements'

    var ElementsLayoutView = Marionette.LayoutView.extend({
      template: _.template(layoutTemplate),
      regions: {
        navigation: '.js-' + moduleName + '__navigation'
      }
    })

    ElementsApp.on('before:start', function () {
      ElementsApp.regions = new ElementsLayoutView

      pageCreatorApp.debug(
        'ElementsApp before:start',
        ElementsApp
      )
    })
  })

  return pageCreatorApp.ElementsApp
})
