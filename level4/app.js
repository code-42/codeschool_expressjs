// 4.3 Validation 250 pts

// The way that it is now, we are allowing new cities to be created with a blank description. Let's add some validation so that in order for a city to be created, its description must have a string length greater than 4.
// Task 1/2 Add an if block that checks for a description.length greater than 4, and move our city creation logic into that block. Use json() to send the results from createCity back to the client.
// Task 2/2 If description does not match its minimum length requirements, then set a 400 status code (Bad Request) to the response, and set the response body to Invalid City using json().

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.post('/cities', parseUrlencoded, function (request, response) {
  if(request.body.description.length > 4){
    var city = createCity(request.body.name, request.body.description);
    response.status(201).json(city); 
  } else {
    response.status(400).json('Invalid City');
  }
});

app.listen(3000);
