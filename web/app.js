var express    = require('express');
var app        = express();
var Handlebars = require('handlebars');

app.get('/', function (req, res) {
  var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
               "{{kids.length}} kids:</p>" +
               "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
 var data = { "name": "Alan", "hometown": "Somewhere, TX",
                            "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};

  var template = Handlebars.compile(source);
  var result = template(data);

  res.send(result);
});

/**
TODO:
build entry point for parsing a given data structure
like from the example in folder example-page
*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
