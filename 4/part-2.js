const util = require('../lib/util');

var input = util.readInput('input.txt').split('\n');
input.sort();

var guard;
var guards = {};

input.forEach(line => {
	var datetime = line.split('] ')[0].substring(1);
	var action = line.split('] ')[1];

	var [hours, minutes] = datetime.split(' ')[1].split(':');
	var [year, month, day] = datetime.split(' ')[0].split('-');

	minutes = parseInt(minutes, 10);
	hours = parseInt(hours, 10);

	if(action.indexOf('begins shift') > -1) {
		guard = action.split('#')[1].split(' ')[0];
	} else if(action.indexOf('falls asleep') > -1) {
		asleepHours = hours;
		asleepMinutes = minutes;
	} else if(action.indexOf('wakes up') > -1) {
		if(!guards[guard]) {
			guards[guard] = {
				totalMinutes: 0,
				minutes: []
			};
		}
		var sleepTime = minutes - asleepMinutes;
		guards[guard]['totalMinutes'] += sleepTime;
		for(var i=0; i<sleepTime; i++) {
			guards[guard]['minutes'][asleepMinutes + i] = (guards[guard]['minutes'][asleepMinutes + i] || 0) + 1;
		}
	}
});

// Find guard who slept the most
var sleepyGuardId;
var sleepyMinute;
var sleepyMinuteMax;

for (var guardid in guards) {
    if (guards.hasOwnProperty(guardid)) {
		for(var i=0; i<guards[guardid]['minutes'].length; i++) {
			var minutes = guards[guardid]['minutes'][i];

			if(minutes && (!sleepyMinute || minutes > sleepyMinuteMax)) {
				sleepyMinute = i;
				sleepyMinuteMax = minutes;
				sleepyGuardId = guardid
			}
		}
    }
}

console.log(parseInt(sleepyGuardId, 10) * parseInt(sleepyMinute, 10));
// 56901