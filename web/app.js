var express = require('express')
var app = express()

app.use(express.static('./web/public'))
app.set('view engine', 'html')
app.set('views', './web/views')
app.engine('html', require('hbs').__express)

var fs = require('fs')

var renderTemplate = require('./lib/renderTemplate')
var getTemplateConfigs = require('./lib/getTemplateConfigs')

/** @type {string} */
const templateStorePath = './resources/templates'

/**
 * @returns {Array}
 */
function getTemplatesContainerConfigs () {
  return getTemplateConfigs(templateStorePath + '/container')
}

/**
 * @param {object} template
 * @returns {string}
 */
function loadHtmlTemplateFile (template) {
  var templatePath = templateStorePath + '/' + template.type + '/' + template.name + '/' + template.name + '.html'
  return fs.readFileSync(templatePath).toString()
}

function renderPage (res, pageConfig) {
  var pageFceConfig = pageConfig.fce
  var fceHtmlString = ''

  pageFceConfig.forEach(function (fceConfig) {
    var fceTemplate = loadHtmlTemplateFile(fceConfig.template)
    var fceHtml = renderTemplate(fceConfig, fceTemplate)

    fceHtmlString = fceHtmlString + fceHtml
  })

  pageConfig.content = fceHtmlString

  var pageTemplate = loadHtmlTemplateFile(pageConfig.template)
  var renderedPageHtml = renderTemplate(pageConfig, pageTemplate)

  res.set('Content-Type', 'text/html')
  res.write(renderedPageHtml)
  res.end()
}

app.get('/api/templates/container', function (req, res) {
  res.send(getTemplatesContainerConfigs())
})

app.get('/', function (req, res) {
  var pageConfig = require('../example-page/config')
  //renderPage(res, pageConfig)

  res.render('index')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
