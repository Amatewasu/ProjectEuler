console.time("algo");

var nbSundays = 0;
var date = new Date(1901, 0, 1);
var dateTo = new Date(2000, 11, 31 + 1).getTime();

while (date.getTime() !== dateTo){
	if (date.getDay() === 0){
		nbSundays++;
	}

	date = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

console.log(nbSundays);

console.timeEnd("algo");