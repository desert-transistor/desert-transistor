angular
	  .module('teacherFactory', [])
	  .factory('teacherFactory',[ function(){

		var socket = io();

		var confusedStudents = [];

			socket.on("teacherUpdate", function(data){
			    confusedStudents.push(data);
			    increaseConfusion(confusedStudents);
			    console.log(confusedStudents);
			})
		
	  	return {
	  		confusedStudents: confusedStudents
	  	};

	  }]);

	  		









	  		// updateTeacher: updateTeacher,

		// function updateTeacher (){


		// }
