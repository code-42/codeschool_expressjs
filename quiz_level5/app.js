/*
quiz Level 5

CodeSchool Express Level 5
Create a simple express node app meeting the following requirements
Requirements
Continue modifying your existing cities app
Convert all routes to using the router system
System should use function chaining
Extract your cities information into a separate file
File should export the full router item
All features should still work normally.
‘/cities’ should not be present in any of the routes since it should be the root item for the router

*/

var express = require('express');
var app = express();

app.use(express.static('public'));

var cities = require('./routes/cities');

app.use('/cities', cities);

app.listen(process.env.PORT, function() {
    console.log('Listening on port ' + process.env.PORT + '\n');
});
