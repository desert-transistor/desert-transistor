////// ++++ attach to socket even on student connect! 
var students = 0; 
//define the dimensons of our canvas
  width = document.body.offsetWidth,
  height = document.body.offsetHeight,
  nodes = d3.range(0,360,360/students),
  colorScale= d3.scale.category10();
//collection of focal points create function. 
  foci = { 
    x: width/2, 
    y: height/2, 
  },
  nodes = [];

var radius = 300;

var newConnection = function() {
  students++;
  var angle = d3.random(0,360,360/students);
  node = 
      x : foci.x + radius * Math.cos(angle),
      y : foci.y + radius * Math.sin(angle)
    }
  nodes.push(node);
}





