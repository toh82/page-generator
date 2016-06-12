import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
import TemplateElementHtml from 'text!templates/template.html'

export default Backbone.View.extend({
    template: '',
    tagName: 'div',
    className: 'pd-template-element',
    initialize: function() {
        this.template = _.template(TemplateElementHtml)
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes))
        return this
    }
})