console.time("algo");

// load the big number of the problem
var numbers = require("fs").readFileSync("./number.txt").toString().split("\n");
var bg = require("bignumber.js");

function sumNumbers (nbs){
	var sum = bg(0);
	for (var i = 0; i < nbs.length - 1; i++){
		sum = sum.plus(nbs[i]);
	}
	return sum.toString(10);
}

console.log(sumNumbers(numbers).slice(0, 10));

console.timeEnd("algo");