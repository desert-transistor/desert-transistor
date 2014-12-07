var socket = io();

var confusedStudents = [];

socket.on("teacherUpdate", function(data){
    console.log("confusedStudents");
    confusedStudents.push(data);
    increaseConfusion(confusedStudents);
    console.log(confusedStudents);
})
