/*
	Largest palindrome product - Problem 4

	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
	Find the largest palindrome made from the product of two 3-digit numbers.
*/

console.time("algo");

var max = 0;
var a = 0;
var b = "";
var c = [];
var len = halfLen = 0;

for (var i = 0; i < 1000; i++){
	for (var j = 0; j < 1000; j++){
		a = i * j;

		if (a <= max){
			continue;
		}

		b = ""+ a;
		halfLen = Math.floor(b.length / 2);

		c[0] = b.slice(0, halfLen);
		c[1] = b.slice(halfLen, b.length).split("").reverse().join("");

		if (c[0] === c[1]){
			max = a;
		}
	}
}

console.log(max);

console.timeEnd("algo");