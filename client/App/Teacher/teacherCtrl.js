console.log("22222222")
angular
	  .module('TeacherController', [])
	  .controller('TeacherController', ['$scope', 'teacherFactory', 'teacherGraphFactory', function($scope, teacherFactory, teacherGraphFactory){

		$scope.confusedStudents = teacherFactory.confusedStudents;

		teacherFactory.updateTeacher();

		teacherGraphFactory.teacherGraph();

		$scope.updateTeacher = teacherFactory.updateTeacher;

	  }])


