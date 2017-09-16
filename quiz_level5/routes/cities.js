var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

var cities = {
    'Accident': 'Maryland',
    'Chicken': 'Alaska',
    'Experiment': 'Georgia',
    'Whynot': 'North Carolina',
    'Hazard': 'Nebraska',
    'Hell': 'Michigan'
};

router.route('/')
  .get(function (request, response) {
    if (request.query.limit > Object.keys(cities).length) {
        console.log("26.cities.length == " + Object.keys(cities).length + ", you requested " + request.query.limit);
        response.status(400).json('Error 400. Limit is higher than the number of cities available in the list');
        response.end();
    } else if (request.query.limit >= 1) {
        console.log("\n30.request.limit == " + request.query.limit);
        var key = '';
        var keys = [];
        for (key in cities) {
            console.log("63. key == " + key);
            keys.push(key);
        }
        response.json(keys.slice(0, request.query.limit));
    } else {
        console.log("56.request.limit is 0 or omitted");
        response.json(Object.keys(cities));
    }
  })

  .post(parseUrlencoded, function (request, response) {
    // if(request.body.description.length > 4){
    //   var city = createCity(request.body.name, request.body.description);
    //   response.status(201).json(city);
    // }else{
    //   response.status(400).json('Invalid City');
    // }
    
    var newCity = request.body;
    cities[newCity.city] = newCity.state;
    response.status(201).json(newCity.city);
  });
    
router.route('/:name')
    .all(function(request, response, next){
        var name = request.params.name;
        console.log("28. " + name[0].toUpperCase());
        console.log("29. " + name.slice(1).toLowerCase());
        var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
        console.log("44. city == " + city);
        // can be accessed from other routes in the application
        request.cityName = city;
        next();
    })
    .get(function(request, response){
        var state = cities[request.cityName];
        if (!state) {
            response.status(404).json('59. No state found for ' + request.params.name);
        } else {
            console.log("61. state == " + state);    
            response.json(state); 
        }
    })
    .delete(function(request, response){
        if(cities[request.cityName]){
            console.log("101. cityName == " + cities[request.cityName]);
            delete cities[request.cityName];
            response.sendStatus(200);
        } else {
            console.log("101. cityName not found");
            response.sendStatus(404);
        }
    });
    
module.exports = router;    