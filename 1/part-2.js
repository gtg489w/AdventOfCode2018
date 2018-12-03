const util = require('../lib/util');

var input = util.readInput('input.txt').split('\n');
var currentValue = 0;
var frequencyList = {};
var index = 0;
var repeatedFrequency = false;

while(!repeatedFrequency) {
	let changeValue = parseInt(input[index % input.length], 10);
	if(!isNaN(changeValue)) {
		console.log(`Current frequency ${currentValue}, change of ${input[index % input.length]}; resulting frequency ${currentValue + changeValue}`)
		currentValue += changeValue;

		if(frequencyList[currentValue]) {
			console.log('Which has already been seen before');
			repeatedFrequency = true;
		} else {
			frequencyList[currentValue] = true;
		}
	}
	index++;
}