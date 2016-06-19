var hbs = require('hbs')
var express = require('express')
var app = express()

app.use(express.static('./web/public'))
app.use(express.static('./resources/templates'))
app.set('view engine', 'html')
app.set('views', './web/views')
app.engine('html', require('hbs').__express)

hbs.registerPartials(__dirname + '/views/partials');

// Routes
// ---
app.get('/', function (req, res) {
  res.render('index')
})

app.use('/api', require('./router/api'))
app.get('/editor', function (req, res) {
  res.render('editor')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
