import Handlebars from 'handlebars'
import Marionette from 'marionette'

export default Marionette.ItemView.extend({
  initialize: function () {
    var templateData = this.model.get('template')
    this.template = Handlebars.compile(templateData.html)
  }
})
