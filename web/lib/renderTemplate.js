module.exports = renderTemplate

var handlebars = require('handlebars')

/**
 * @param {object} data
 * @param {string} templateHtml
 * @returns {string}
 */
function renderTemplate (data, templateHtml) {
  var template = handlebars.compile(templateHtml)

  return template(data)
}
