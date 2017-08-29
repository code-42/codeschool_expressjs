// 3.9 Dynamic Routes III 250 pts

// The following code has a Dynamic Route that takes a year as an argument and returns the city created in that year. The problem with our current implementation is that it breaks when invalid data is sent on client requests. Let's add some basic validation.
// Task 1/3 Call a function that intercepts Dynamic Routes with the 'year' param.
// Task 2/3 Inside of that function, use the isYearFormat() function to check whether the year parameter is in a valid format. If so, then move processing to the next function in the stack.
// Task 3/3 If the year parameter is not in a valid format, then respond with a 400 HTTP status code and a JSON message 'Invalid Format for Year'.

var express = require('express');
var app = express();

app.param('year', function(request, response, next){
    if(isYearFormat(request.params.year)){
      next();
     } else {
       response.status(400).json('Invalid Format for Year');
     }
});

var citiesYear = {
  5000: 'Lotopia',
  5100: 'Caspiana',
  5105: 'Indigo',
  6000: 'Paradise',
  7000: 'Flotilla'
};

function isYearFormat(value) {
  var regexp = RegExp(/^d{4}$/);
  return regexp.test(value);
}

app.get('/cities/year/:year', function(request, response) {
  var year = request.params.year;
  var city = citiesYear[year];

  if(!city) {
    response.status(404).json("No City found for given year");
  } else {
    response.json("In " + year + ", " + city + " is created.");
  }
});

app.listen(3000);                                                                                                                                                                                                                                                                                                       
