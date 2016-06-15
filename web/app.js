var express = require('express')
var app = express()

app.use(express.static('./web/public'))
app.set('view engine', 'html')
app.set('views', './web/views')
app.engine('html', require('hbs').__express)

var getTemplateConfigs = require('./lib/getTemplateConfigs')

/** @type {string} */
const templateStorePath = './resources/templates'

app.get('/api/templates/container', function (req, res) {
  res.send(getTemplateConfigs(templateStorePath + '/container'))
})

app.get('/', function (req, res) {
  res.render('index')
})

var loadHtmlTemplateFile = require('./lib/loadHtmlTemplateFile')
app.get('/api/templates/html', function (req, res) {
  var templateHtml = loadHtmlTemplateFile({
    name: req.param('name'),
    type: req.param('type')
  })

  res.send(templateHtml)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
