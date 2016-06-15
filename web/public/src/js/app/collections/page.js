import Backbone from 'backbone'
import TemplateModel from '../models/template'

export default Backbone.Collection.extend({
  model: TemplateModel,
  loadAndAdd: function (model, options) {
    var addOptions = options || null
    var pageCollection = this

    model.loadTemplateHtml()
      .then(function () {
        pageCollection.add(model, addOptions)
      })
  }
})
