/*
	Smallest multiple - Problem 5

	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

console.time("algo");

var nb = 0;
var a = 0;
var good = true;

do {
	nb++;
	good = true;

	for (var i = 1; i <= 20; i++){
		a = nb / i;

		if (parseInt(a, 10) !== a){
			good = false;
			break;
		}
	}
} while (!good)

console.log(nb);

console.timeEnd("algo");