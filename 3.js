/*
	Largest prime factor - Problem 3

	The prime factors of 13195 are 5, 7, 13 and 29.
	What is the largest prime factor of the number 600851475143 ?
*/

console.time("algo");

var nb = 600851475143;
var sqrtNb = Math.sqrt(nb);
var primeNumbers = [2];
var max = 1;
var a;

for (var i = 0; primeNumbers[i] <= sqrtNb; i++){
	a = primeNumbers[i];

	if (nb % a === 0){
		max = a;
	}

	genPrimeNumber();
}

function genPrimeNumber (){
	for (var i = primeNumbers[primeNumbers.length - 1] + 1; true; i++){
		if (isPrime(i)){
			primeNumbers.push(i);
			return;
		}
	}
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

console.log(max);

console.timeEnd("algo");