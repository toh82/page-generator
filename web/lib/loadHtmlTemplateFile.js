module.exports = loadHtmlTemplateFile

var fs = require('fs')

/** @type {string} */
const templateStorePath = './resources/templates'

/**
 * @param {object} template
 * @returns {string}
 */
function loadHtmlTemplateFile (template) {
  var templatePath = templateStorePath + '/' + template.type + '/' + template.name + '/' + template.name + '.html'

  return fs.readFileSync(templatePath).toString()
}
