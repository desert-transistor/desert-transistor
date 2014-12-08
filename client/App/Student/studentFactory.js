angular
	  .module('app')
	  .factory('studentFactory', studentFactory)

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

		function confusedStudent (){

			socket.emit("confusion", {
				lectureID: "RECURSION",
				studentID: "THOMAS"
			}); 
			console.log("I done got clicked.");
		}


		
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
