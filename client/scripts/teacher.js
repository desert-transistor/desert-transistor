var total=0,
//define the dimensons of our canvas
  width = document.body.offsetWidth,
  height = document.body.offsetHeight,
  nodes = [];

//collection of focal points create function. 
  foci = [
    { 
      x: width/2, 
      y: height/2, 
      title: "confused",
      radius: 200
    },
    { 
      x: 100, 
      y: 100, 
      title: "connected",
      radius: 0
    }
  ];
var colorScale= d3.scale.category10();

//svg container to hold the visualization, specifying a dynamic width/height
var canvas = d3.select("body").append("svg")
  .attr("width",width)
  .attr("height",height);

var visual = d3.layout.force()
  .nodes(nodes)
  .size([width,height])
  .start()
  .on("tick",tick);

//create reference to all svg:circles
var node = canvas.selectAll("circle");

//create text nodes for each group
foci.forEach(function(group,index){
  canvas.append("text")
    .attr("class","title")
    .attr("dx",group.x)
    .attr("dy",group.y)
    .text(group.title)
    .style("text-anchor","start")
    .style("fill", function(d) { return colorScale(index); });
  canvas.append("circle")
    .attr("r",group.radius)
    .attr("cx",group.x)
    .attr("cy",group.y)
    .style("fill","none")
    .style("stroke",function(d) { return colorScale(index); })
});

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

var newConnection = function(){
  nodes.push({
    group: 1
  });

  visual.start();

  node = node.data(nodes);

  node.enter().append("circle")
    .attr("r",10)
    .attr("class","node")
    .attr("cx", function(d) { return d.x; }) // initialized to random x/y by force layout calc
    .attr("cy", function(d) { return d.y; })
    .style("fill", function(d) { return colorScale(d.group); })
    .transition()
      .delay(10000)
      .each("end", function() { 
        nodes.shift();
        d3.select("text").text(--total); 
      })
      .remove();
}


var increaseConfusion = function(){
  nodes[nodes.length-1].group = 1;

  visual.start();

  node = node.data(nodes);

  d3.select("text")
    .text(++total);

  node.enter().append("circle")
    .attr("r",10)
    .attr("class","node")
    .attr("cx", function(d) { return d.x; }) // initialized to random x/y by force layout calc
    .attr("cy", function(d) { return d.y; })
    .style("fill", function(d) { return colorScale(d.group); })
    .transition()
      .delay(10000)
      .attr("r", 1e-6)
      .each("end", function(d,i) { 
        nodes.shift();
        d3.select("text").text(total); 
      })
      .remove();
}

