var express = require('express');
var loadHtmlTemplateFile = require('../lib/loadHtmlTemplateFile')
var getTemplateConfigs = require('../lib/getTemplateConfigs')

var apiRouter = express.Router();

const templateStorePath = './resources/templates'

function getTemplateHtml (req, res) {
  var templateHtml = loadHtmlTemplateFile({
    name: req.param('name'),
    type: req.param('type')
  })

  res.send(templateHtml)
}

function getContainerTemplateConfig (req, res) {
  res.send(getTemplateConfigs(templateStorePath + '/container'))
}

function getPageTemplateConfig (req, res) {
  res.send(getTemplateConfigs(templateStorePath + '/container'))
}

function getContentTemplateConfig (req, res) {
  res.send(getTemplateConfigs(templateStorePath + '/container'))
}

apiRouter.get('/templates/html', getTemplateHtml)
apiRouter.get([
  '/templates/config/container',
  '/templates/config/page',
  '/templates/config/content'
],
  getContainerTemplateConfig,
  getPageTemplateConfig,
  getContentTemplateConfig
)

module.exports = apiRouter
