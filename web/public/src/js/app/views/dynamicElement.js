import $ from 'jquery'
import Handlebars from 'handlebars'
import Marionette from 'marionette'
import toolbarTemplate from 'text!templates/toolbar.html'

export default Marionette.ItemView.extend({
  events: {
    'click .js-trash-element': 'removeElement',
    'click .js-edit-element': 'editElement',
    'click .js-stop-edit-element': 'saveElement'
  },
  initialize: function () {
    this.$el.addClass('pg-elementId[' + this.model.get('elementId') + ']')

    var templateData = this.model.get('template')
    this.template = Handlebars.compile(templateData.html)
  },
  onRender: function () {
    if (this.model.get('editable')) {
      this.$el.wrapInner('<div class="pg-element  js-editable"></div>')
    }
    this.$el.prepend(toolbarTemplate)
  },
  saveElement: function () {
    var model = this.model
    var fields = this.$el.find('*[data-field]')
    $.each(fields, function () {
      model.set(
        $(this).data('fieldId'),
        $(this).html()
      )
    })

    console.log(model)
    //TODO: update model
    //TODO: deactivate save
    //TODO: activate edit
  },
  editElement: function (oEvent) {
    if (this.model.get('editable')) {
      this.$el.find('.js-editable')
        .addClass('js-editable--active')
        .attr('contentEditable', true)

      $(oEvent.currentTarget).prop( "disabled", true)

      //TODO: enable save icon
    }
  },
  removeElement: function () {
    var model = this.model
    model.collection.remove(model)
  }
})