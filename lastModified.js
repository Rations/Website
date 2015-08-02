var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
var lm = new Date(document.lastModified);
var min = lm.getMinutes();
	if (min < 10)
	{
		min = "0" + min;
	}
var h = lm.getHours();
	if (h < 10)
	{
		h = "0" + h;
	}
var d = lm.getDate();
var m = lm.getMonth();
	m = months[m];
var y = lm.getFullYear();

document.write("Designed for Chrome • Typeset in Roboto • Last modified " + d + " " + m + " " + y + ".");