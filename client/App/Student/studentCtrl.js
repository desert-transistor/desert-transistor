angular
	  .module('StudentController', [])
	  .controller('StudentController', ['$scope', 'studentFactory', 'authFactory', function($scope, studentFactory, authFactory){

		studentFactory.connect();

    $scope.student = authFactory;

    $scope.confusedStudent = function() {
			studentFactory.confusedStudent ($scope.student.studentName);   	
    }
	  
	  }])

