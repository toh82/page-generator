import Backbone from 'backbone'
import TemplateModel from '../models/template'

export default Backbone.Collection.extend({
  url: '/api/templates/config/container',
  model: TemplateModel
})
