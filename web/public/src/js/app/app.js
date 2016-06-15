import $ from 'jquery'
import _ from 'underscore'

import TemplateCollection from 'collections/template'
import PageCollection from 'collections/page'

import TemplateModelView from 'views/template'
import PageView from 'views/page'

var templateCollection = new TemplateCollection()
templateCollection.on('sync', function () {
  _.each(this.models, function (model) {
    var templateModelView = new TemplateModelView({
      model: model
    })

    templateModelView.render()
    $('.js-templates-container').append(templateModelView.$el)
  })
})

templateCollection.fetch()

var pageCollection = new PageCollection()
var pageView = new PageView({
  el: '.js-page',
  collection: pageCollection
})

pageView.render()

export default {
  pageCollection: pageCollection
}
