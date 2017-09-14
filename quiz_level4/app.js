/*
Quiz Level4
CodeSchool Express Level 4
Create a simple express node app meeting the following requirements
Requirements
Using the level 2/3 app
Add in the ability to add a new city.
City name
Containing city
Should confirm the city and state has values
State should have at least two characters.
City should have at least four characters
Page should update to hide the city
Update page to make the cities links which return the state name
Add ability to remove a city
City should be confirmed prior to removing it
Response should contain the correct status code
Page should update with new info
Additional challenge
Add additional information to the site:
Add the additional data points longitude and latitude
Clickable link should display google maps centered to the longitude and latitude in new tab
Form should confirm that lat lon are numbers.
*/

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

var cities = {
    'Accident': 'Maryland',
    'Chicken': 'Alaska',
    'Experiment': 'Georgia',
    'Whynot': 'North Carolina',
    'Hazard': 'Nebraska',
    'Hell': 'Michigan'
};

console.log("43. cities.length == " + Object.keys(cities).length);
console.log("44. cities == " + Object.keys(cities));
// console.log("34. states == " + Object.values(cities));

// A /cities route that will display all cities. (minimum of 5 cities)
// The /cities route should accept a limit query that will send back:
// a certain number of cities
// All cities if 0 is provided or if limit query is omitted
// return a status error if the limit is higher than the number of cities available in the list

app.get('/cities', function(request, response) {
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
});

// Make sure to also normalize the data sent in the /cities route. The city sent should be sendable in any case and still find the state it’s in. ie Providence and providence should both return Rhode Island.
app.param('name', function(request, response, next) {
    var name = request.params.name;
    var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
    request.cityName = city;
    console.log("78. == " + request.cityName);
    next();
});

// Add a dynamic route to /cities. This should respond with the state that the city resides in.
app.get('/cities/:name', function(request, response) {
    var state = cities[request.cityName];
    if (!state) {
        response.status(404).json('No state found for ' + request.params.name);
    } else {
        console.log("91. state == " + state);    
        response.json(state); 
    }
});

app.post('/cities', parseUrlencoded, function(request, response) {
    var newCity = request.body;
    cities[newCity.city] = newCity.state;
    response.status(201).json(newCity.city);
});

app.delete('/cities/:name', function(request, response){
    if(cities[request.cityName]){
        console.log("101. blockName == " + cities[request.cityName]);
        delete cities[request.cityName];
        response.sendStatus(200);
    } else {
        console.log("101. cityName not found");
        response.sendStatus(404);
    }
});

app.listen(process.env.PORT, function() {
    console.log('Listening on port ' + process.env.PORT + '\n');
});
