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

// 4.6 Delete Route 250 pts

// Create a Dynamic Route for deleting cities and handle for cities that are not in our list.
// Task 1/4 Create a DELETE route that takes the city name as its first argument, followed by a callback that takes a request and response objects as arguments.
// Task 2/4 Use the built-in JavaScript operator delete (see MDN docs) to remove the property for the city passed as an argument. Don't forget to use the attribute set in app.param() to look the city up. 
// Task 3/4 Use sendStatus() to respond back with a status code of 200.
// Task 4/4 Add an if block that checks whether the cityName provided from app.param() has a valid entry before attempting to delete it from the cities object. If a valid city is not found, then respond with a 404 HTTP status code using the sendStatus() function.

var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

app.param('name', function (request, response, next) {
  request.cityName = parseCityName(request.params.name);
});
       
app.delete('/cities/:name', function(request, response){
  if(cities[request.cityName]){
    delete cities[request.cityName];
    response.sendStatus(200);
  } else {
    response.sendStatus(404);
  }

});

app.listen(3000);

function parseCityName(name) {
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}

