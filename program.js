var express = require('express');
var path = require('path');
var app = express();
// exercise 1
//app.get('/home', function(req, res) {
//  res.end('Hello World!');
//});
// exercise 2
//app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
// exercise 3
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
