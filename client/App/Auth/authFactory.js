angular
  .module('authFactory', [])
  .factory('authFactory', [ '$state', function($state) {
  	
    var socket = io();

    var studentName = "";

  	function createName (name) {
  		
      
      this.studentName = name;

      socket.emit("newConnection", function(){
        newStudent: "new student joined"
      })

      $state.go("student"); 
  	}

  	return {
  		studentName: studentName,
  		createName: createName
  	}
  }]);