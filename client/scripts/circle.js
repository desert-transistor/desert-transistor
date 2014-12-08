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

var canvas = d3.select("body").append("svg")
  .attr("width",width)
  .attr("height",height);

var visual = d3.layout.force()
  .nodes(nodes)
  .size([width,height])
  .start()
  .on("tick",tick);

function tick(e) {
  var k = .1 * e.alpha;

  // Push nodes toward their designated focus.
  nodes.forEach(function(o, i) {
    o.y += (foci[o.group].y - o.y) * k;
    o.x += (foci[o.group].x - o.x) * k;
  });

  node
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
}

