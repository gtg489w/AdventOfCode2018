const util = require('../lib/util');

var input = util.readInput('input.txt').split('\n');

var canvas = [];
claimDuplicate = 0;

input.forEach(line => {
	let parts = line.split(' @ ');
	let id = parts[0].split('#')[1];
	parts = parts[1].split(': ');
	let coordinates = parts[0];
	let dimensions = parts[1];

	let left = parseInt(coordinates.split(',')[0], 10);
	let top = parseInt(coordinates.split(',')[1], 10);
	let width = parseInt(dimensions.split('x')[0], 10);
	let height = parseInt(dimensions.split('x')[1], 10);
	
	for(let x = left; x < left + width; x++) {
		for(let y = top; y < top + height; y++) {
			if(!canvas[x]) {
				canvas[x] = [];
			}
		   	canvas[x][y] = (canvas[x][y] || 0) + 1;
		}
	}
});

for(var i=0; i<canvas.length; i++) {
	if(canvas[i]) {
		for(var j=0; j<canvas[i].length; j++) {
			if(canvas[i][j] && canvas[i][j] > 1) {
				claimDuplicate++
			}
		}
	}
}

console.log(claimDuplicate)
// 121163