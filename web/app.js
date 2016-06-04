var express = require('express')
var app = express()
var Handlebars = require('handlebars')
var fs = require('fs')
var glob = require('glob')

/** @type {string} */
const templateStorePath = './resources/templates'

/** @type {string} */
const templateConfigFileName = 'config.json'

/**
 * @param {string} dir
 * @returns {Array}
 */
function getTemplateConfigs (dir) {
  var files = glob.sync(dir + '/**/' + templateConfigFileName)

  var templateConfigs = []
  files.forEach(function (file) {
    var json = JSON.parse(fs.readFileSync(file, 'utf8'))
    templateConfigs.push(json)
  })

  return templateConfigs
}

/**
 * @returns {Array}
 */
function getTemplatesContainerConfigs () {
  var templateContainerDir = templateStorePath + '/container'
  return getTemplateConfigs(templateContainerDir)
}

/**
 * @returns {Array}
 */
function getTemplatesContentConfigs () {
  var templateContentDir = templateStorePath + '/content'
  return getTemplateConfigs(templateContentDir)
}

/**
 * @returns {Array}
 */
function getTemplatesPageConfigs () {
  var templatePageDir = templateStorePath + '/page'
  return getTemplateConfigs(templatePageDir)
}

/**
 * @param {object} template
 * @returns {string}
 */
function loadHtmlTemplateFile (template) {
  var templatePath = templateStorePath + '/' + template.type + '/' + template.name + '/' + template.name + '.html'
  return fs.readFileSync(templatePath).toString()
}

/**
 * @param {object} fceData
 * @param {string} rawTemplateString
 * @returns {string}
 */
function renderHtmlTemplate (fceData, rawTemplateString) {
  var template = Handlebars.compile(rawTemplateString)
  return template(fceData)
}

function renderPage (res, pageConfig) {
  var pageFceConfig = pageConfig.fce
  var fceHtmlString = ''

  pageFceConfig.forEach(function (fceConfig) {
    var fceTemplate = loadHtmlTemplateFile(fceConfig.template)
    var fceHtml = renderHtmlTemplate(fceConfig, fceTemplate)

    fceHtmlString = fceHtmlString + fceHtml
  })

  pageConfig.content = fceHtmlString

  var pageTemplate = loadHtmlTemplateFile(pageConfig.template)
  var renderedPageHtml = renderHtmlTemplate(pageConfig, pageTemplate)

  res.set('Content-Type', 'text/html')
  res.write(renderedPageHtml)
  res.end()
}

app.get('/', function (req, res) {
  var pageConfig = require('../example-page/config')
  renderPage(res, pageConfig)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
  console.log(getTemplatesContainerConfigs())
})
