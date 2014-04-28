console.time("algo");

var BigNumber = require('bignumber.js');

function factorial (n){
	var a = BigNumber(1);

	for (var i = 1; i < n; i++){
		a = a.times(i);
	}

	return a.toString(10);
}

function sumDigits (str){
	var sum = 0;
	for (var i = 0; i < str.length; i++){
		sum += parseInt(str[i], 10);
	}
	return sum;
}

console.log(sumDigits(factorial(100)));

console.timeEnd("algo");