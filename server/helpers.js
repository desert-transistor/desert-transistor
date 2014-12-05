var confusionModel = require('./model.js');

	

exports.addVote = function (data, callback) {
	callback = callback || function () {};
	confusionModel.create(data, function (err, data) {
		if (err) throw err;
		callback(data);
	})	
}


getVotes: function(data, callback){
	callback = callback || function () {};
		confusionModel.find( function(err){
			if(error) throw err;
			callback(data);
			}
		})
	}
				// res.send(500);