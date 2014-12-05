var express = require('express');
var app = express();
var path = require('path');
var dir = path.resolve(__dirname + '/../client');
var controller = require('./controller');

var mongoose = require('mongoose');  
var bodyParser = require('body-parser');
var morgan = require('morgan');

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
var voteRouter = express.Router();
app.use('/api', voteRouter);

///////to see if it's connected to a database
var mongoUrl = require('./config');
mongoose.connect(mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('hurrraaaaay!!!');
});
//////



io.on('connection', function(socket){
  console.log('a user connected');
  io.emit("event", {it: "works"});
  socket.on('confusion', function(data) {
  	console.log("COOOONNNFUUUSIIIOOOONNNN!");
  	console.log(data);
  	controller.addVote(data);
  })
});

app.use(express.static(dir));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

require('./routes')(voteRouter);

//understand serving static files. Why do you do it?
//store to some persistent area
//test to see that things can to to the database
