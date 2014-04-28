console.time("algo");

var bg = require("bignumber.js");
var sum = bg(0);

for (var i = 1; i <= 1000; i++){
	sum = sum.plus(bg(i).pow(i));
}

sum = sum.toString(10);
console.log(sum.slice(sum.length - 10, sum.length));

console.timeEnd("algo");