/*
	10001st prime - Problem 7

	By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
	What is the 10 001st prime number?
*/

console.time("algo");

var nb = 0;
var i = 2;
var again = true;

while (again){
	if (isPrime(i)){
		nb++;

		if (nb === 10000){
			console.log(i);
			again = false;
		}
	}

	i++;
}


function isPrime (x){
	if (x % 2 === 0){
		return false;
	}

	var max = Math.sqrt(x);
	for (var i = 2; i <= max; i++){
		if (i % 2 === 0){
			continue;
		}

		if (x % i === 0){
			return false;
		}
	}

	return true;
}

console.timeEnd("algo");