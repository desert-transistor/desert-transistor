console.log("1111111")
angular
	  .module('StudentController', [])
	  .controller('StudentController', ['$scope', 'studentFactory', function($scope, studentFactory){

		studentFactory.connect();

		console.log("adfadsf");

		$scope.confusedStudent = studentFactory.confusedStudent;
	  
	  }])

