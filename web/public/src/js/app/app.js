import $ from 'jquery'
import TemplateCollection from 'collections/template'
import TemplateModelView from 'views/template'
import _ from 'underscore'

var templateCollection = new TemplateCollection
templateCollection.on('sync', function() {
    _.each(this.models, function (model) {
        var templateModelView = new TemplateModelView({model: model})
        templateModelView.render()
        console.log()
        $('.js-templates-container').append(templateModelView.$el)
    })
})

templateCollection.fetch()
