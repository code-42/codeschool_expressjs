var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

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

// app.get('/blocks/:name', function(request, response){
//     var description = blocks[request.params.name];
//     if(!description){
//         response.status(404).json('No description found for ' + request.params.name);
//     } else {
//         response.json(description);
//     }
    
// });

// called for routes which include the :name placeholder
app.param('name', function(request, response, next){
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log("33.block == " + block);
    // can be accessed from other routes in the application
    request.blockName = block;
    next();
});

app.get('/blocks/:name', function(request, response){
    var description = blocks[request.blockName];
    stream.write("43.description == " + description);
    response.json(Object.keys(blocks));
});

// app.get('/locations/:name', function(request, response){
//     var location = locations[request.blockName];
//     response.json(Object.keys(location));
// });

app.listen(process.env.PORT, function(){
    console.log('Listening on port ' + process.env.PORT + '\n');
});


