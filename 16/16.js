console.time("algo");

var bg = require("bignumber.js");

function sumDigits (n){ // n is a string
	var sum = 0;
	for (var i = 0; i < n.length; i++){
		sum += parseInt(n[i], 10);
	}
	return sum;
}

console.log(sumDigits(bg(2).pow(1000).toString(10)));

console.timeEnd("algo");