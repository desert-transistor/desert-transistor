var socket = io();

var confusedStudents = [];

socket.on("teacherUpdate", function(data){
    confusedStudents.push(data);
    increaseConfusion(confusedStudents);
    console.log(confusedStudents);
    console.log(confusedStudents);
})
