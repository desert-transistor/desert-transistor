var express = require('express');
var app = express();
var path = require('path');
var dir = path.resolve(__dirname + '/../client');

var mongoose = require('mongoose');  
var bodyParser = require('body-parser');
var morgan = require('morgan');

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

io.on('connection', function(socket){
  console.log('a user connected');
  io.emit("event", {it: "works"});
});

app.use(express.static(dir));

http.listen(3000, function(){
  console.log('listening on *:3000');
});



