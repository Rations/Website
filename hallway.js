d3.timer(
	function(t)
	{
		d3.select(this)
			.attr("x", Math.sin(t))
			.attr("y", Math.cos(t)) 
	});

function dragmove() 
{
	var d = new Date();
	var n = d.getTime();
    d3.select(this)
      .attr("height", Math.sin(n) + 30)
      .attr("width", Math.cos(n) + 40)
}


d3.select("#container").append("svg")
    .attr("height", 300)
    .attr("width", 660)
    .append("rect")
	.attr("id", "draggable")
	.attr("fill", "blue")
        .attr("height", 240)
        .attr("width", 3)
        .call(dragmove)



// function dragmove(d) 
// {
//     d3.select(this)
//       .attr("y", d3.event.y)
//       .attr("x", d3.event.x)
// }

// var drag = d3.behavior.drag()
//     .on("drag", dragmove);

// d3.select("#container").append("svg")
//     .attr("height", 300)
//     .attr("width", 660)
//     .append("rect")
// .attr("id", "draggable")
// .attr("fill", "blue")
//         .attr("height", 240)
//         .attr("width", 3)
//         .call(drag)

