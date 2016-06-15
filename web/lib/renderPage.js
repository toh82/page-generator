module.exports = renderPage

var renderTemplate = require('renderTemplate')
var loadHtmlTemplateFile = require('loadHtmlTemplateFile')

/**
 * @param {object} pageConfig
 * @returns {string}
 */
function renderPage (pageConfig) {
  var pageFceConfig = pageConfig.fce
  var fceHtmlString = ''

  pageFceConfig.forEach(function (fceConfig) {
    var fceTemplate = loadHtmlTemplateFile(fceConfig.template)
    var fceHtml = renderTemplate(fceConfig, fceTemplate)

    fceHtmlString = fceHtmlString + fceHtml
  })

  pageConfig.content = fceHtmlString

  var pageTemplate = loadHtmlTemplateFile(pageConfig.template)

  return renderTemplate(pageConfig, pageTemplate)
}
