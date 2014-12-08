var studentsConnected = 0; 
//define the dimensons of our canvas
  width = document.body.offsetWidth,
  height = document.body.offsetHeight,
  colorScale= d3.scale.category10();
//collection of focal points create function. 
  foci = [{ 
    x: width/2, 
    y: height/2, 
  }],
  nodes = [];

var radius = 300;

var canvas = d3.select("body").append("svg")
  .attr("width",width)
  .attr("height",height);

var force = d3.layout.force()
  .data(ndoes)
  .size([width,height]);

var newConnection = function(nodeName) {
  var newStudent = {
    group: 0,
    x: foci[0].x,
    y: foci[0].y
  };

  nodes.push(newStudent);

  update();
};

var update = function(nodeName){
  //join new data with old
  var elements = canvas.selectAll(".student").data(nodes);

  force.start();

  //UPDATE
  elements
    .transition()
    .ease("elastic")
    .duration(500)
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })

  //ENTER (position updated)
  elements.enter()
    .append("circle").attr("class", "student")
    .attr("r", 20).attr("fill", "lime")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });

  //EXIT (connection closed)
  elements.exit()
    .remove();
}

// var visual = d3.layout.force()
//   .nodes(nodes)
//   .size([width,height])
//   .start()
//   .on("tick",tick);

// function tick(e) {
//   var k = .1 * e.alpha;

//   // Push nodes toward their designated focus.
//   nodes.forEach(function(o, i) {
//     o.y += (foci[o.group].y - o.y) * k;
//     o.x += (foci[o.group].x - o.x) * k;
//   });

//   node
//     .attr("cx", function(d) { return d.x; })
//     .attr("cy", function(d) { return d.y; });
// }

