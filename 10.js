/*
	Summation of primes - Problem 10

	The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
	Find the sum of all the primes below two million.
*/

console.time("algo");

var sum = 0;
for (var i = 2; i <= 2000000; i++){
	if (isPrime(i)){
		sum += i;
	}
}

function isPrime (x){
	if (x === 1){
		return false;
	}

	if (x < 4){ // 2 & 3 are prime
		return true;
	}

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

console.log(sum);

console.timeEnd("algo");