// blocks level 4

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

var blocks = {
    'Fixed': 'Fastened securely in position',
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
};

var locations = {
    'Fixed': 'First floor',
    'Movable': 'Second floor',
    'Rotating': 'Penthouse'
};

console.log("32. blocks.length == " + Object.keys(blocks).length);
console.log("33. blocks == " + Object.keys(blocks));
console.log("34. description == " + Object.values(blocks));

// root route
app.get('/', function(request, response){
  // var blocks = ['Fixed', 'Movable', 'Rotating'];
  // returns all in blocks object
  response.json(Object.keys(blocks));
});

// blocks route
app.get('/blocks', function(request, response){
  // var blocks = ['Fixed', 'Movable', 'Rotating'];
  // returns all in blocks object
  response.send(Object.keys(blocks));
});

// blocks route
app.get('/description', function(request, response){
  // var blocks = ['Fixed', 'Movable', 'Rotating'];
  // returns all in blocks object
  response.json(Object.values(blocks));
});

// called for routes which include the :name placeholder
app.param('name', function(request, response, next){
    var name = request.params.name;
    console.log("28. " + name[0].toUpperCase());
    console.log("29. " + name.slice(1).toLowerCase());
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log("44. block == " + block);
    // can be accessed from other routes in the application
    request.blockName = block;
    next();
});

// dynamic route
app.get('/blocks/:name', function(request, response){
    var description = blocks[request.blockName];
    if(!description){
        response.status(404).json('No description found for ' + request.blockName);
    } else {
        console.log("45. description == " + description);
        // response.json(Object.keys(blocks));
        response.json(description);
    }
});

app.post('/blocks', parseUrlencoded, function (request, response) {
  var newBlock = request.body;
  blocks[newBlock.name] = newBlock.description;
  response.status(201).json(newBlock.name);
});

app.listen(process.env.PORT, function(){
    console.log('Listening on port ' + process.env.PORT + '\n');
});

// 4.6 Delete Route 250 pts

// Create a Dynamic Route for deleting blocks and handle for cities that are not in our list.
// Task 1/4 Create a DELETE route that takes the city name as its first argument, followed by a callback that takes a request and response objects as arguments.
// Task 2/4 Use the built-in JavaScript operator delete (see MDN docs) to remove the property for the city passed as an argument. Don't forget to use the attribute set in app.param() to look the city up. 
// Task 3/4 Use sendStatus() to respond back with a status code of 200.
// Task 4/4 Add an if block that checks whether the cityName provided from app.param() has a valid entry before attempting to delete it from the cities object. If a valid city is not found, then respond with a 404 HTTP status code using the sendStatus() function.

// var express = require('express');
// var app = express();

// var cities = {
//   'Lotopia': 'Rough and mountainous',
//   'Caspiana': 'Sky-top island',
//   'Indigo': 'Vibrant and thriving',
//   'Paradise': 'Lush, green plantation',
//   'Flotilla': 'Bustling urban oasis'
// };

// app.param('name', function (request, response, next) {
//   request.cityName = parseCityName(request.params.name);
// });
       
// app.delete('/cities/:name', function(request, response){
//   if(cities[request.cityName]){
//     delete cities[request.cityName];
//     response.sendStatus(200);
//   } else {
//     response.sendStatus(404);
//   }

// });

// app.listen(process.env.PORT, function(){
//     console.log('Listening on port ' + process.env.PORT + '\n');
// });

// function parseCityName(name) {
//   var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
//   return parsedName;
// }

