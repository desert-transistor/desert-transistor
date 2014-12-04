var express = require('express');
var app = express();
var mongoose = require('mongoose');	
var bodyParser = require('body-parser');
var path = require('path');
var dir = path.resolve(__dirname + '/../client');
var morgan = require('morgan');
var voteRouter = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/voteDatabase')

///////to see if it's connected to a database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('hurrraaaaay!!!');
});
//////

app.use(morgan('dev'));
app.use(express.static(dir));

app.use('/api', voteRouter);

var server = app.listen(3000, function(){

	var host = server.address().address;
	var port = server.address().port;

	console.log('Student Confusion app is listening at http://%s:%s', host, port);

})


require('./routes')(voteRouter);

