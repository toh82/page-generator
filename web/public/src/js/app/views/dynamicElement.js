import Handlebars from 'handlebars'
import Marionette from 'marionette'
import toolbarTemplate from 'text!templates/toolbar.html'

export default Marionette.ItemView.extend({
  initialize: function () {
    this.$el.addClass('pg-elementId[' + this.model.get('elementId') + ']')

    var templateData = this.model.get('template')
    this.template = Handlebars.compile(templateData.html)
  },
  onRender: function () {
    this.$el.prepend(toolbarTemplate)
  }
})
