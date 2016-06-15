import Handlebars from 'handlebars'
import Backbone from 'backbone'

import TemplateElementHtml from 'text!templates/template.html'

import App from 'app/app'

export default Backbone.View.extend({
  template: '',
  tagName: 'div',
  className: 'pd-template-element',

  events: {
    'click .js-add': 'addToPage'
  },

  addToPage: function () {
    var templateModel = this.model.clone()
    App.default.pageCollection.loadAndAdd(templateModel)
  },

  initialize: function () {
    this.template = Handlebars.compile(TemplateElementHtml)
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes))
    return this
  }
})
