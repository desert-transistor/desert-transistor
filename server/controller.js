var confusionModel = require('./model.js');
var path = require('path');
var Q = require('q');

module.exports = {

	addVote: function(req, res, next){
		confusionModel.create(req.body, function(error, data){
			console.log('@@@@@@@@@@@@@@');
			console.log(req.body);
			if(error){
				console.log('error');
				res.send(500);
			}else{
				console.log('success');
				res.send(data);
			}
		})
	},

	getVotes: function(req, res, next){
		confusionModel.find( function(error, data){
			console.log('$$$$$$$$$$$$$$$');
			console.log(req.body);
			if(error){
				console.log('error');
				res.send(500);
			}else{
				console.log('success');
				res.send(data);
			}
		})
	}

}
