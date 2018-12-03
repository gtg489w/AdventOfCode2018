const util = require('../lib/util');

var input = util.readInput('input.txt').split('\n');
var doubleCount = 0
var tripleCount = 0

input.forEach(line => {
	var double = false;
	var triple = false;

	while(line.length > 0) {
		let char = line[0];
		let parts = line.split(char);
		if(parts.length == 3) {
			double = true;
		} else if(parts.length == 4) {
			triple = true;
		}
		line = parts.join('');
	}

	if(double) {
		doubleCount++;
	}
	if(triple) {
		tripleCount++;
	}
});

console.log(`checksum: ${doubleCount * tripleCount}`);