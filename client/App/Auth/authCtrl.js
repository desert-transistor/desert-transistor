angular
  .module('AuthController', [])
  .controller('AuthController', ['$scope', 'authFactory', function($scope, authFactory) {
  	$scope.student = authFactory;
  }]);