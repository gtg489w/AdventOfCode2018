module.exports.readInput = (file) => {
	fs = require('fs')
	var data = fs.readFileSync(file, 'utf8');
	return data;
};