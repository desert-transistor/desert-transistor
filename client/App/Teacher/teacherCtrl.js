console.log("22222222")
angular
	  .module('TeacherController', [])
	  .controller('TeacherController', ['$scope', 'teacherFactory', function($scope, teacherFactory){

			$scope.confusedStudents = teacherFactory.confusedStudents;

			teacherFactory.updateTeacher();

			$scope.updateTeacher = teacherFactory.updateTeacher;

			// studentFactory.connect();

			// console.log("adfadsf");

			// $scope.confusedStudent = studentFactory.confusedStudent;
	  
	  }])


