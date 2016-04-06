var express = require('express');
//var path = require('path');
//var bodyparser = require('body-parser')

var app = express();
// exercise 1
//app.get('/home', function(req, res) {
//  res.end('Hello World!');
//});
// exercise 2
//app.use(require('stylus').middleware(process.argv[3]))
//app.use(express.static(process.argv[3]));
// exercise 3
//app.set('views', path.join(__dirname, 'templates'));
//app.set('view engine', 'jade');
//app.get('/home', function(req, res) {
//  res.render('index', {date: new Date().toDateString()});
//});

//exercise 4
//app.use(bodyparser.urlencoded({extended: true}))
//app.post('/form', function(req, res) {
//  res.end(req.body.str.split('').reverse().join(''));
//});
//exercise 5
//app.use(require('stylus').middleware(process.argv[3]))
//app.use(express.static(process.argv[3]));

//exercise 6 param
//app.put('/message/:id', function(req, res){
// var id = req.params.id;
// var str = require('crypto')
//  .createHash('sha1')
//  .update(new Date().toDateString() + id)
//  .digest('hex');
// res.send(str);
//});

//exercise 7 query string
app.get('/search', function(req, res){
  res.send(req.query);
});

app.listen(process.argv[2]);
