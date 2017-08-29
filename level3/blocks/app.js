var express = require('express');
var app = express();

var blocks = {
    'Fixed': 'Fastened securely in position',
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
};

app.get('/blocks/:name', function(request, response){
    var description = blocks[request.params.name];
    if(!description){
        response.status(404).json('No description found for ' + request.params.name);
    } else {
        response.json(description);
    }
    
});

app.listen(process.env.PORT, function(){
    console.log('Listening on ' + process.env.PORT + '\n');
});


