angular
	  .module('StudentController', [])
	  .controller('StudentController', ['$scope', 'studentFactory', 'authFactory', function($scope, studentFactory, authFactory){

		studentFactory.connect();

    $scope.student = authFactory;

    $scope.test = function(){
    	console.log($scope.student);
    	console.log($scope.student.studentName);
    }

		$scope.confusedStudent = studentFactory.confusedStudent;
	  
	  }])

