angular
	  .module('teacherFactory', [])
	  .factory('teacherFactory',[ function(){

		var socket = io();

		var confusedStudents = [];

		function updateTeacher (){

			socket.on("teacherUpdate", function(data){
			    console.log("confusedStudents");
			    confusedStudents.push(data);
			    increaseConfusion(confusedStudents);
			    console.log(confusedStudents);
			})
		}

	  	return {
	  		updateTeacher: updateTeacher,
	  		confusedStudents: confusedStudents
	  	};

	  }]);

