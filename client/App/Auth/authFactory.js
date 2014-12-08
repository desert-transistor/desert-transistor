angular
  .module('authFactory', [])
  .factory('authFactory', [ '$state', function($state) {
  	var studentName = "";

  	function createName (name) {
  		this.studentName = name;
  		$state.go("student"); 
  	}

  	return {
  		studentName: studentName,
  		createName: createName
  	}
  }]);