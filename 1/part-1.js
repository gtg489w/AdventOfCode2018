const util = require('../lib/util');

var input = util.readInput('input.txt').split('\n');
var currentValue = 0;

input.forEach(line => {
	let changeValue = parseInt(line, 10);
	if(!isNaN(changeValue)) {
		console.log(`Current frequency ${currentValue}, change of ${line}; resulting frequency ${currentValue + changeValue}.`)
		currentValue += changeValue;
	}
});