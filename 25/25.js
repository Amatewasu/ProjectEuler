console.time("algo");

var bn = require("bignumber.js");
var nb = 1;

var a = bn(0);
var b = bn(1);
var c = bn(0);

while (true){
	nb++;

	c = a.plus(b);
	a = b;
	b = c;

	if (b.toString(10).length === 1000){
		console.log(nb);
		break;
	}
}

console.timeEnd("algo");