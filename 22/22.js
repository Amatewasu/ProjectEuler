console.time("algo");

var names = require("fs").readFileSync("./names.txt").toString().split('"').join("").split(",").sort();
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var totalScore = 0;

var scoreLetters = 0;
var order = 0;

for (var i = 0; i < names.length; i++){
	scoreLetters = getScoreLetters(names[i]);
	order = names.indexOf(names[i]) + 1;
	totalScore += scoreLetters * order;
}

function getScoreLetters (word){
	var score = 0;
	for (var i = 0; i < word.length; i++){
		score += letters.indexOf(word[i]) + 1;
	}
	return score;
}

console.log(totalScore);

console.timeEnd("algo");