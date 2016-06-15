import Marionette from 'marionette'
import Handlebars from 'handlebars'
import PageCollection from 'collections/page'

import DynamicElement from 'views/dynamicElement'

import TemplatePageHtml from 'text!templates/page.html'

export default Marionette.CollectionView.extend({
  template: '',
  collection: PageCollection,
  childView: DynamicElement,

  initialize: function () {
    this.template = Handlebars.compile(TemplatePageHtml)
  }
})
