/*
	Multiple of 3 ans 5 - Problem 1

	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
	Find the sum of all the multiples of 3 or 5 below 1000.
*/

console.time("algo");

var sum = 0;

var a = b = 0;
for (var i = 999; i; i--){
	a = i / 3;
	b = i / 5;

	if (parseInt(a, 10) === a || parseInt(b, 10) === b){
		sum += i;
	}
}

console.log(sum);

console.timeEnd("algo");