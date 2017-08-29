// level 2 How Middleware Works
var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/index.html');
}).listen(process.env.POST);

// using express.static middleware
app.use(express.static('public'));

// when next() is called, processing moves to the next middleware
app.use(function(request, response, next){
    // ...
    next();
})

app.use(function(request, response, next){
    // ...
    response.send('done!');
    next();  // calling next after the response has completed will cause errors
})


// node.js module system follows the CommonJS specification
// in logger.js
module.exports = function(request, response, next){
    var start = +new Date();
    var stream = process.stdout;
    var url = request.url;
    var method = request.method;
    
    response.on('finish', function(){
        var duration = +new Date() - start;
        var message = method + ' to ' + url + 
            '\ntook' + duration + ' ms \n\n';
            stream.write(message);
    });
    next();
}


