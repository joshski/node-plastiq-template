var express = require('express');
var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var app = express();
var morgan = require('morgan');

app.use(sassMiddleware({
    src: __dirname,
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/'
}));
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('hello world');
});
app.listen(4321);
