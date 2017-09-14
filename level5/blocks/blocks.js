var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

var blocks = {
    'Fixed': 'Fastened securely in position',
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
};

router.route('/')
    .get(function(request, response))
    .post(parseUrlencoded, function(request, response))
    
router.route('/:name')
    .all(function(request, response, next){
        var name = request.params.name;
        console.log("28. " + name[0].toUpperCase());
        console.log("29. " + name.slice(1).toLowerCase());
        var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
        console.log("44. block == " + block);
        // can be accessed from other routes in the application
        request.blockName = block;
        next();
    })
    .get(function(request, response){
        var state = cities[request.cityName];
        if (!state) {
            response.status(404).json('No state found for ' + request.params.name);
        } else {
            console.log("91. state == " + state);    
            response.json(state); 
        }
    })

    .delete(function(request, response){
        if(cities[request.cityName]){
            console.log("101. blockName == " + cities[request.cityName]);
            delete cities[request.cityName];
            response.sendStatus(200);
        } else {
            console.log("101. cityName not found");
            response.sendStatus(404);
        }
    });
    
module.exports = router;    