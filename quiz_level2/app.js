var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/cities', function(request, response){
  var citites = ['Providence', 'Warwick', 'Cranston', 'Pawtucket'];
  response.json(citites);
});

app.listen(process.env.PORT, function(){
    console.log('Listening on port ' + process.env.PORT + '\n');
});


