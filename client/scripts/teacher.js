var pulseData = [ 
  {"date":Date.now()-210000,"value":0.0},
  {"date":Date.now()-200000,"value":0.2},
  {"date":Date.now()-150000,"value":0.3},
  {"date":Date.now()-100000,"value":0.4},
  {"date":Date.now(),"value":.55},
];

var decay = function() {
  return pulseData[pulseData.length-1].value * .99;
}

var pulse = function(value) {
  var obj = {"date":Date.now(),"value": pulseData[pulseData.length-1].value + value || decay()};
  return obj;
}

function getDate(d) {
    return new Date(d.date);
}

var width = 1200, height = 660;

var y = d3.scale.linear()
    .domain([0, 1])
    .range([height,0]);

var x = d3.time.scale()
    .domain([getDate(pulseData[pulseData.length-4]),getDate(pulseData[pulseData.length-1])])
    .range([0, width]);

var line = d3.svg.line()
  .x(function(d) { return x(getDate(d)); })
  .y(function(d) { return y(d.value); });

// var area = d3.svg.area()
//     .x(function(d) { return x(getDate(d)); })
//     .y0(height)
//     .y1(function(d) { return y(d.value); });

var svg = d3.select("body").append("svg")
    .attr("width", width + 200) //for clip path
    .attr("height", height);

//clip path 
svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);


var path = svg.append("g")
  .append('path')
    .attr("d", line(pulseData))
    .attr("stroke", "orange")
    .attr("stroke-width", 3)
    .attr("fill", "none");

// x and y axis
svg.append("g")
    .call(d3.svg.axis().scale(x).ticks(d3.time.seconds,20));
// svg.append("g")
//      .call(d3.svg.axis().scale(y).orient("right"));




function socketEvent() {

  pulseData.push(pulse());
  // push a new data point onto the back
  // redraw the line
  x.domain([getDate(pulseData[0]),getDate(pulseData[pulseData.length-1])]);
  // path.transition()
  //     .duration(500)
  //     .ease("elastic")
  //     .attr("d", line(pulseData))
  //     .each("end", socketEvent);

  path
    .attr("d", line(pulseData))
    .attr("transform", null)
  .transition()
    .duration(400)
    .ease("linear")
    .attr("transform", "translate(" + -20 + ",0)")
    .each("end", socketEvent);

  pulseData.shift();

}

socketEvent();
