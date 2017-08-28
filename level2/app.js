// 2.4 Express Static

// Change the code in app.js to use the express-static middleware instead of the response.sendFile() function.

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/cities', function(req, res){
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  res.send(cities);
});

app.listen(3001);


