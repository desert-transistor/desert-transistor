var mongoose = require('mongoose');

var confusionSchema = new mongoose.Schema({
		
		lectureID:  String,
		studentID:  String

	});

module.exports = mongoose.model('confusionDB', confusionSchema);
