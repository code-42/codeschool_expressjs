var express = require('express');
var app = express();

app.use(express.static('public'));

// var cities = ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'Lincoln', 'CF'];

var cities = {
    'Accident': 'Maryland',
    'Chicken': 'Alaska',
    'Experiment': 'Georgia',
    'Whynot': 'North Carolina',
    'Zap': 'North Dakota',
    'Hazard': 'Nebraska',
    'Hell': 'Michigan'
};

app.get('/cities', function(request, response){
  // var cities = ['Providence', 'Warwick', 'Cranston', 'Pawtucket'];
  response.json(cities);
});

app.listen(process.env.PORT, function(){
    console.log('Listening on port ' + process.env.PORT + '\n');
});


