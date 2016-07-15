var hbs = require('hbs')
var express = require('express')
var app = express()

app.use(express.static('./web/public'))
app.use(express.static('./resources/templates'))
app.set('view engine', 'html')
app.set('views', './web/views')
app.engine('html', require('hbs').__express)

var partialsPath = [__dirname, '/views/partials']
hbs.registerPartials(partialsPath.join(''))

// Routes
// ---
app.use('/api', require('./router/api'))
app.get('/', function (req, res) {
  res.render('index')
})
app.get('/editor', function (req, res) {
  res.render('editor')
})
app.get('/about', function (req, res) {
  res.render('about')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
