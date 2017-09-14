var express = require('express');
var app = express();

app.use(express.static('public'));

var blocks = require('./routes/blocks');
var buildings = require('./routes/buildings');
var users = require('./routes/users');

app.use('/blocks', blocks);
app.use('/buildings', buildings);
app.use('/users', users);


app.listen(process.env.PORT, function() {
    console.log('Listening on port ' + process.env.PORT + '\n');
});
