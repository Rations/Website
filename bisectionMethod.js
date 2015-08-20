//Runs after user enters text into input box
//Converts user text inputs to JavaScript numbers
//oa: original lower bound x-value
//ob: original upper bound x-value
//t: tolerance
function conduit()
{
	fm = document.forms[1];
	var oa = Number(fm.first.value);
	var ob = Number(fm.second.value);
	var t = Number(fm.tolerance.value);
	//Calls main bisectionMethod method
	fm.root.value = bisectionMethod(oa, ob, t);
}

//Precondition: user input function written in terms of x
//Converts input text to JavaScript expression; evaluates expression using x = n 
//n: desired x-value
function f(n)
{
	fm = document.forms[1];
	var eq = fm.equation.value;
	return Parser.evaluate(eq, {x: n});
}

//Recursively approximates root given starting range of x-values and tolerance
//a: lower bound x-value
//b: upper bound x-value
//t: tolerance
function bisectionMethod(a, b, t)
{
	if (f(a) * f(b) >= 0 || f(a) == f(b))
	{
		return "Please enter two different numbers, one positive, one negative";
	}
	var low = Math.min(a, b);
	var high = Math.max(a, b);
	var mid = (a + b) / 2;
	if (Math.abs(f(mid) - 0) <= t)
	{
		return mid;
	}
	if (f(low) > 0)
	{
		if (f(mid) < 0)
		{
			return bisectionMethod(low, mid, t);
		}
		else
		{
			return bisectionMethod(mid, high, t);
		}
	}
	else
	{
		if (f(mid) > 0)
		{
			return bisectionMethod(low, mid, t);
		}
		else
		{
			return bisectionMethod(mid, high, t);
		}
	}	
}
