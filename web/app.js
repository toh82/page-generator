var express    = require('express');
var app        = express();
var Handlebars = require('handlebars');
var fs         = require('fs');

const fceStorePath = './content-elements';

function loadFceTemplate (templateName) {
  var fceTemplatePath = fceStorePath + '/' + templateName + '/' + templateName + '.html';
  return fs.readFileSync(fceTemplatePath).toString();
}

function renderFceHtml (fceData, rawFceTemplateString) {
  var template = Handlebars.compile(rawFceTemplateString);
  return template(fceData);
}

function renderPageFce (res, pageFce) {
  res.set('Content-Type', 'text/html');

  pageFce.forEach(function (fceConfig) {
    var fceTemplate = loadFceTemplate(fceConfig.template);
    var fceHtml     = renderFceHtml(fceConfig, fceTemplate);

    res.write(fceHtml);
  });

  res.end();
}

app.get('/', function (req, res) {
  var pageConfig = require('../example-page/config');
  var pageFce    = pageConfig.fce;

  renderPageFce(res, pageFce);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
