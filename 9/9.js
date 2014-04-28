/*
	Special Pythagorean triplet - Problem 9

	A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
		a^2 + b^2 = c^2
	For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2
	There exists exactly one Pythagorean triplet for which a + b + c = 1000.
	Find the product abc.
*/

console.time("algo");

var n = m = 2;
var res;
var again = true;

while (again){
	for (m = n - 1; m; m--){
		res = generate(m, n);
		
		if (res.a + res.b + res.c === 1000){
			console.log(res.a * res.b * res.c);
			again = false;
		}
	}

	n++;
}

function generate (m, n){
	// should m < n

	var  a 	= n * n - m * m
		, b = 2 * n * m
		, c = n * n + m * m
		;

	return {
		a 	: a
		, b : b
		, c : c
	};
}

console.timeEnd("algo");