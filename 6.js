/*
	Sum square difference - Problem 6

	The sum of the squares of the first ten natural numbers is,
		1^2 + 2^2 + ... + 10^2 = 385
	The square of the sum of the first ten natural numbers is,
		(1 + 2 + ... + 10)^2 = 552 = 3025
	Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
	Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

console.time("algo");

// Find the "(1 + 2 + ... + 10)^2"
var a = 0;
for (var i = 0; i <= 100; i++){
	a += i;
}
a = a * a;

// Find the "1^2 + 2^2 + ... + 10^2"
var b = 0;
for (var i = 0; i <= 100; i++){
	b += i * i;
}


// Print the difference
console.log(a - b);

console.timeEnd("algo");