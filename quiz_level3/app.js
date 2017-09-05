// CodeSchool Express Level 3
// Create a simple express node app meeting the following requirements
// Requirements
// Create an express app.
// Uses the cities app you made in level 2
// A /cities route that will display all cities. (minimum of 5 cities)
// The /cities route should accept a limit query that will send back:
// a certain number of cities
// All cities if 0 is provided or if limit query is omitted
// return a status error if the limit is higher than the number of cities available in the list
// Add a dynamic route to /cities. This should respond with the state that the city resides in.
// Dynamic route should return Not Found status code if the requested city is not available.
// Make sure to also normalize the data sent in the /cities route. The city sent should be sendable in any case and still find the state it’s in. ie Providence and providence should both return Rhode Island.
// Your normalizing of the data should use a middleware function.
// Make sure your /cities route still displays while the other routes can only be accessed by curl currently.

var express = require('express');
var app = express();

app.use(express.static('public'));

var cities = {
    'Accident': 'Maryland',
    'Chicken': 'Alaska',
    'Experiment': 'Georgia',
    'Whynot': 'North Carolina',
    'Zap': 'North Dakota',
    // 'Hazard': 'Nebraska',
    'Hell': 'Michigan'
};

console.log("32. cities.length == " + Object.keys(cities).length);
console.log("33. cities == " + Object.keys(cities));
console.log("34. states == " + Object.values(cities));

// A /cities route that will display all cities. (minimum of 5 cities)
// The /cities route should accept a limit query that will send back:
// a certain number of cities
// All cities if 0 is provided or if limit query is omitted
// return a status error if the limit is higher than the number of cities available in the list

app.get('/cities', function(request, response){
  if(request.query.limit > Object.keys(cities).length){
      console.log("26.cities.length == " + Object.keys(cities).length + ", you requested " + request.query.limit);
      response.status(400).json('Error 400. Limit is higher than the number of cities available in the list');
      response.end();
  } else if(request.query.limit >= 1){
      console.log("\n30.request.limit == " + request.query.limit);
      var keys = [];
      for (key in cities){
          keys.push(key);
      }
      response.json(keys.slice(0, request.query.limit));
  }
  else {
      console.log("56.request.limit is 0 or omitted");
      response.json(Object.keys(cities));
  }
});

// Make sure to also normalize the data sent in the /cities route. The city sent should be sendable in any case and still find the state it’s in. ie Providence and providence should both return Rhode Island.
app.param('name', function(request, response, next){
    var name = request.params.name;
    var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
    request.cityName = city;
    console.log("66. == ", request.cityName);
    next();
});

// Add a dynamic route to /cities. This should respond with the state that the city resides in.
app.get('/cities/:name', function(request, response){
    var state = cities[request.cityName];
    console.log("73. == " + state);
    // document.getElementById('state').value = state;
    // $('#state').html(state);
    response.json(state);
    
});

app.listen(process.env.PORT, function(){
    console.log('Listening on port ' + process.env.PORT + '\n');
});
