angular
	  .module('teacherFactory', [])
	  .factory('teacherFactory',[ function(){

		var socket = io();

		var confusedStudents = [];

		function updateTeacher (){

			socket.on("teacher:update", function(data){
			    confusedStudents.push(data);
			    calculateConfusion(confusedStudents);
			})
		}

	  	return {
	  		updateTeacher: updateTeacher,
	  		confusedStudents: confusedStudents
	  	};

	  }]);

