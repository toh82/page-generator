define([
  'marionette',
  'app',
  'text!apps/elements/template/layout.html'
], function (Marionette, pageCreatorApp, layoutTemplate) {

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
      ElementsApp.regions = new ElementsLayoutView({
        destroyImmediate: true
      })
    })

    ElementsApp.on('start', function () {
      pageCreatorApp.regions.getRegion('elements').show(ElementsApp.regions.render())

      $('.js-close-content-elements').one('click', function () {
        ElementsApp.regions.destroy()
        pageCreatorApp.navigate('')
        ElementsApp.stop()
      })
    })
  })

  return pageCreatorApp.ElementsApp
})
