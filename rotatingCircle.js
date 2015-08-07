//Sets dimensions of SVG arena
var width = 660;
var height = 660;

//User settings:
var radius = 10;
//Change rotation radius
var R = 100;
//Change period (ms)
var period = 1000; 

function setUserParameters()
{
	var fm = document.forms[0];
	radius = fm.cr.value;
	R = fm.rotationRadius.value;
	period = fm.T.value;
}

//Appends arena to HTML page
var svg = d3.select("#uniformCircle").append("svg")
	.attr("width", width)
	.attr("height", height)
	.append("g");

var circleData = [d3.map()];

//Create circle and move it to initial position
var circle = svg.selectAll("circle")
	.data(circleData)
	.enter()
	.append("circle")
	.attr("r", radius)
	.attr('d', function(d) 
	{
		d.set("x", (width / 2) + R);
		d.set("y", (height / 2));
		return d;
	})
	.attr("transform", function(d) 
	{
		return "translate(" + d.get("x") + "," + d.get("y") + ")";
	});

//Begin execution of timer function
d3.timer(execute);

function execute(t) 
{
	//Process data stored in map
	for (var i = 0; i < circleData.length; i++)
	{
		var circleDatum = circleData[i];
		// Calculate fraction of period complete
		var dt = t / period;

		//Calculate new x and y
		var θ = 2 * Math.PI * dt;
		var x = R * Math.cos(θ);
		var y = R * Math.sin(θ);

		circleDatum.set("x", (width / 2) + x);
		circleDatum.set("y", (height / 2) + y);
	}

	//Move the SVG circles
	var myCircle = svg.selectAll("circle");
	myCircle.attr("transform", function(d){return "translate(" + d.get("x") + "," + d.get("y") + ")";});
}