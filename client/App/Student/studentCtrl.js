
angular
	  .module('app')
	  .controller('StudentController', studentController)

StudentController.$inject = ['$scope', 'studentFactory'];

function StudentController($scope, studentFactory){

	$scope.connect = studentFactory.connect;

	$scope.confusedStudent = studentFactory.confusedStudent;
}
