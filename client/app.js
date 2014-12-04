var socket = io('http://localhost:3000');

console.log("getting app.js");

socket.on('connect', function(){
	console.log("socket connected");
});

socket.on('event', function(data){
	console.log("data: " + data);
});

socket.on('disconnect', function(){
	console.log("socket DISconnected");
});