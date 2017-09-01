// 
var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello World\n');
});

app.get('/name', function(request, response){
    response.end('Jello Ed\n');
});

app.get('/name', function(request, response){
    response.redirect(301, '/suprise');
});

app.listen(process.env.PORT, function(){
    console.log('Listening on port ' + process.env.PORT + '\n');
});

