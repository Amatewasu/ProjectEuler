console.time("algo");

var max = 0;
var longestChain = 1;

function nbCollatzChain (n){
	var nb = 0;

	while (n !== 1){
		nb++;

		if (n % 2 === 0){
			n /= 2
		} else {
			n = (3 * n) + 1;
		}
	}

	return nb;
}

var lastNb = 0;
for (var i = 1; i < 1e6; i++){
	lastNb = nbCollatzChain(i);

	if (lastNb > max){
		max = lastNb;
		longestChain = i;
	}
}

console.log(longestChain);

console.timeEnd("algo");