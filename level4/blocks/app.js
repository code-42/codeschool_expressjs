// blocks level 4

var express = require('express');
var app = express();

<<<<<<< HEAD
app.use(express.static('public'));

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

=======
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

>>>>>>> level4
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
<<<<<<< HEAD
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
<<<<<<< HEAD
  response.json(Object.keys(blocks));
=======
  response.send(Object.keys(blocks));
>>>>>>> level4
});

// blocks route
app.get('/description', function(request, response){
  // var blocks = ['Fixed', 'Movable', 'Rotating'];
  // returns all in blocks object
  response.json(Object.values(blocks));
=======
// console.log("34. description == " + Object.values(blocks));

app.get('/blocks', function(request, response) {
    if (request.query.limit > Object.keys(blocks).length) {
        console.log("26.blocks.length == " + Object.keys(blocks).length + ", you requested " + request.query.limit);
        response.status(400).json('Error 400. Limit is higher than the number of blocks available in the list');
        response.end();
    } else if (request.query.limit >= 1) {
        console.log("\n30.request.limit == " + request.query.limit);
        var key = '';
        var keys = [];
        for (key in blocks) {
            console.log("63. key == " + key);
            keys.push(key);
        }
        response.json(keys.slice(0, request.query.limit));
    } else {
        console.log("56.request.limit is 0 or omitted");
        response.json(Object.keys(blocks));
    }
>>>>>>> level4
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

app.delete('/blocks/:name', function(request, response){
    console.log("99. inside app.delete()");
    // delete blocks[request.blockName];
    if(blocks[request.blockName]){
        console.log("101. blockName == " + blocks[request.blockName]);
        delete blocks[request.blockName];
        response.sendStatus(200);
    } else {
        console.log("101. blockName not found");
        response.sendStatus(404);
    }
});

// 4.6 Delete Route 250 pts

// Create a Dynamic Route for deleting blocks and handle for blocks that are not in our list.
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

// function parseCityName(name) {
//   var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
//   return parsedName;
// }

app.listen(process.env.PORT, function(){
    console.log('Listening on port ' + process.env.PORT + '\n');
});



// Level 5: routes
// app.route('/blocks')
//     .get(function(request, response){
        
//     })
//     .post(parseUrlencoded, function(request, response){
        
//     });
