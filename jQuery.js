$(document).ready(function()
{
	$(".button, .button_square, .button_rect, padded_image").mouseenter(function()
	{
		$(this).fadeTo(100, 0.75);
	});
	$(".button, .button_square, .button_rect, padded_image").mouseleave(function()
	{
		$(this).fadeTo(100, 1);
	});
	$("#PFtabs").tabs();
	$("#menu, #menu2").accordion({collapsible: true, active: false, heightStyle: "content"});
	$("#physicsHeader").load("physicsHeader.html");
	$("#footer").load("footer.html");
	$("#calc").load("calc.html");
	$("#comments").html("[+] Show comments");
	$("#comments").on("click", function()
	{
		var disqus_shortname = "wondergrad";
		$.ajax({type: "GET", url: "http://" + disqus_shortname + ".disqus.com/embed.js", dataType: "script"});
       	$(this).fadeOut();
	});
});

