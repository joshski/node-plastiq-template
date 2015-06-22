var express = require('express');
var app = express()
var morgan = require('morgan');
app.use(morgan('combined'))
// respond with "hello world" when a GET request is made to the homepage
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(4321);
