var socket = io();

console.log("getting app.js");

document.getElementById('confused').addEventListener('click', function() {
	socket.emit("confusion", {
												lectureID: "NICK",
												studentID: "ash"
											});
	console.log("I done got clicked.");
})

socket.on("teacherUpdate", function(data){
    console.log(data);
})

socket.on('connect', function(){
	console.log("socket connected");
});

socket.on('event', function(data){
	console.log("data: ");
	console.log(data);
});

socket.on('disconnect', function(){
	console.log("socket DISconnected");
});