var express = require('express');
var app = express();
var mongoose = require('mongoose');	
var bodyParser = require('body-parser');
var path = require('path');
var dir = path.resolve(__dirname + '/../client');
var morgan = require('morgan');
var voteRouter = express.Router();
var mongoUrl = require('./config');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
mongoose.connect(mongoUrl);

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

//understand serving static files. Why do you do it?
//store to some persistent area
//test to see that things can to to the database
