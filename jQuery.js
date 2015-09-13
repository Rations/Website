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
});

