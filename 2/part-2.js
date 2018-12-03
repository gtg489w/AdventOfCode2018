const util = require('../lib/util');

var input = util.readInput('input.txt').split('\n');

input.forEach(key => {
	input.forEach(check => {
		if(check.length < 1 || key.length < 1) {
			return;
		}
		var differenceIndex;
		var match = true;
		for(var i=0; i<key.length; i++) {
			if(key[i] != check[i]) {
				if(!differenceIndex) {
					differenceIndex = i;
				} else {
					match = false;
				}
			}
		}
		if(match && key != check) {
			console.log(key.substring(0, differenceIndex) + key.substring(differenceIndex + 1, key.length));
		}
	});
});
