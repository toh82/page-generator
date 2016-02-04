
var copyFile = require('copyfiles')

var deps = [
  './node_modules/backbone/backbone-min.js',
  './node_modules/backbone.marionette/lib/backbone.marionette.js',
  './node_modules/handlebars/dist/handlebars.amd.min.js',
  './node_modules/requirejs/require.js',
  './node_modules/underscore/underscore-min.js',
  './node_modules/jquery/dist/jquery.min.js',

  // to folder
  './assets/js/libs'
]

copyFile(deps, true, function (error) {
  if (typeof error !== 'undefined') {
    console.log(error)
  }

  console.log('copied the files!')
})
