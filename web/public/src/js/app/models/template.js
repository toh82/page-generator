import $ from 'jquery'
import Backbone from 'backbone'

export default Backbone.Model.extend({
  loadTemplateHtml: function () {
    var templateData = this.get('template')

    return $.get('/api/templates/html', templateData)
      .then(function (res) {
        templateData.html = res
      })
  }
})
