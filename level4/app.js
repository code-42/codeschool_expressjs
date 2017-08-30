// 4.2 Parser Setup 250 pts

// Assume the body-parser middleware is installed. Now, let's use it in our Express application.
// Task 1/5 Require the body-parser npm module and assign it to a variable called bodyParser.
// Task 2/5 The body-parser middleware offers different parsing options. On the bodyParser object, call a function that returns a parser for URL encoded data and store it in a variable called parseUrlencoded. Remember to pass in an option which forces the use of the native querystring Node library.
// Task 3/5 Mount the parser only in the post route.
// Task 4/5 Read the name and description parameters from the payload of the POST request, and pass them as arguments to the createCity function (we've created this one for you). Store the return value on the city variable.
// Task 5/5 Finally, respond back to the client with a 201 HTTP status code and the value stored in city in JSON format using json.

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

app.post('/cities', parseUrlencoded, function (request, response) {
  var newCity = request.body;
  var city = createCity(newCity.name, newCity.description);
  response.status(201).json(city);
});

app.listen(3000);

var createCity = function(name, description){
  cities[name] = description;
  return name; 
};
