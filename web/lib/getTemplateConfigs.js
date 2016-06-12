module.exports = getTemplateConfigs

var fs = require('fs')
var glob = require('glob')

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
