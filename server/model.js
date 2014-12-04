var mongoose = require('mongoose');

var confusionSchema = new mongoose.Schema({
		lectureID:  "lectureID",
		createdAt:  "createdAt",
		studentID:  "studentID"
	});

module.exports = mongoose.model('confusionDB', confusionSchema);
