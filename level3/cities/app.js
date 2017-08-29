// 3.6 Flexible Routes 250 pts

// Our current route only works when the city name argument matches exactly the properties in the cities object. This is a problem. We need a way to make our code more flexible.
// Task 1/2 Inside our route, call the parseCityName() function passing in the name parameter. Assign the return value to the new variable called cityName.
// Task 2/2 Now, using the city name returned from the parseCityName() function, lookup the corresponding description using the cities object and store it in the correct variable that will make the rest of the function work as intended.


var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

app.get('/cities/:name', function (request, response) {
  var cityName = parseCityName(request.params.name);
  var cityInfo = cities[cityName];

  if(cityInfo) {
    response.json(cityInfo);
  } else {
    response.status(404).json('City not found');
  }
});

function parseCityName(name) {
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}

app.listen(3000);                                                                                                                                                                                                                                                                                                                
