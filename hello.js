function hello()
{
	fm = document.forms[0];
	n = fm.name.value.trim();
	nL = n.toLowerCase();
	var c;
	var end = " today!";
	if (nL == "")
	{
		fm.greeting.value = "Hello . . . ?"
	}
	else if (nL.substring(0, 4) == "i am")
	{
		fm.greeting.value = "Hello. " + "You are" + n.substring(4) + "!";
	}
	else if (nL.substring(0, 3) == "i'm")
	{
		fm.greeting.value = "Hello. " + "You're" + n.substring(3) + "!";
	}
	else if (nL == "owen zhang" || nL == "rodion" || nL == "raskolnikov" || nL == "rodia" || nL == "rations" || nL == "rodion raskolnikov" || nL == "rodia raskolnikov")
	{
		fm.greeting.value = "WELCOME, MASTER. SITE STATUS: OPERATIONAL.";
	}
	else if (nL == "master" || nL == "sir" || nL == "god" || nL == "lord" || nL == "boss" || nL == "savior" || nL == "saviour")
	{
		fm.greeting.value = "FATAL ERROR: YOU ARE NOT MY MASTER."
	}
	else
	{
		switch(n[0].toLowerCase())
		{
			case "a":
			c = "affable";
			break;
			case "b":
			c = "blessed";
			break;
			case "c":
			c = "charming";
			break;
			case "d":
			c = "delightful";
			break;
			case "e":
			c = "excellent";
			break;
			case "f":
			c = "fabulous";
			break;
			case "g":
			c = "gorgeous";
			break;
			case "h":
			c = "happy";
			break;
			case "i":
			c = "incredible";
			break;
			case "j":
			c = "jubilant";
			break;
			case "k":
			c = "kindly";
			break;
			case "l":
			c = "lovely";
			break;
			case "m":
			c = "marvelous";
			break;
			case "n":
			c = "nice";
			break;
			case "o":
			c = "outstanding";
			break;
			case "p":
			c = "perfect";
			break;
			case "q":
			c = ". . . quite good";
			break;
			case "r":
			c = "radiant";
			break;
			case "s":
			c = "stupendous";
			break;
			case "t":
			c = "tantalizing";
			break;
			case "u":
			c = "unique";
			break;
			case "v":
			c = ". . . very good";
			break;
			case "w":
			c = "wonderful";
			break;
			case "x":
			c = ". . . Xtraordiary";
			break;
			case "y":
			c = "youthful";
			break;
			case "z":
			c = "zippy";
			break;
			default: 
			c = ". . . fine ";
			end = "I guess?";
		}
		fm.greeting.value = "Hello, " + n + ". You look " + c + end;
	}
}