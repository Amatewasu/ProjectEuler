console.time("algo");

var nbs = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var decades = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var exceptions = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

// works only if 0 < n <= 1000
function nbToTxt (n){
	var txt = "";
	if (n >= 1000){
		txt = txt + "one thousand";
		n -= 1000;
	}
	if (n >= 100){
		var nbHundred = Math.floor(n / 100);
		txt = txt + nbs[nbHundred - 1] +" hundred";
		n -= nbHundred * 100;
		if (n !== 0){
			txt = txt +" and ";
		}
	}
	if (n > 19 || n === 10){
		var nbDecade = Math.floor(n / 10);
		txt = txt + decades[nbDecade - 1];
		n -= nbDecade * 10;
		if (n !== 0){
			txt = txt +"-";
		}
	}
	if (n > 10){
		var nbException = n - 10;
		txt = txt + exceptions[nbException - 1];
		n -= nbException + 10;
	}
	if (n > 0){
		txt = txt + nbs[n - 1];
	}

	return txt;
}

function countLetters (str){
	return str.split(" ").join("").split("-").join("").length;
}

var sum = 0;
for (var i = 1; i <= 1000; i++){
	sum += countLetters(nbToTxt(i));
}

console.log(sum);

console.timeEnd("algo");