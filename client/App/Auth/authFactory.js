angular
  .module('authFactory', [])
  .factory('authFactory', [ function() {
  	var studentName = "";

  	function createName (name) {
  		this.studentName = name;
  	}

  	return {
  		studentName: studentName,
  		createName: createName
  	}
  }]);