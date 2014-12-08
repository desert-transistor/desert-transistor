angular
	  .module('studentFactory', [])
	  .factory('studentFactory',[ function(){

			var socket = io();

			console.log("getting app.js");

			function connect (){
				socket.on('connect', function(){
					console.log("socket connected");
				});
			
				socket.on('disconnect', function(){
					console.log("socket DISconnected");
				});

				socket.on('event', function(data){
					console.log("data: ");
					console.log(data);
				});
			}

			function confusedStudent (name){

				socket.emit("confusion", {
					lectureID: "RECURSION",
					studentID: name
				}); 
				console.log("I done got clicked.");
			}

			return {
				connect: connect,
				confusedStudent: confusedStudent
			};
	  	
	  }]);



		
		// document.getElementById('confused').addEventListener('click', function() {
		// 	socket.emit("confusion", {
		// 		lectureID: "RECURSION",
		// 		studentID: "THOMAS"
		// 	}); 
		// 	console.log("I done got clicked.");
		// })

		// socket.on('connect', function(){
		// 	console.log("socket connected");
		// });

		// socket.on('event', function(data){
		// 	console.log("data: ");
		// 	console.log(data);
		// });

		// socket.on('disconnect', function(){
		// 	console.log("socket DISconnected");
		// });
