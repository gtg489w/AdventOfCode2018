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
var sleepyGuard;
var sleepyGuardId;
for (var guardid in guards) {
    if (guards.hasOwnProperty(guardid)) {
		if(!sleepyGuard || guards[guardid]['totalMinutes'] > sleepyGuard['totalMinutes']) {
			sleepyGuard = guards[guardid];
			sleepyGuardId = guardid;
		}
    }
}

// Find that guard's most frequent minute
var sleepyMinute;
var sleepyMinuteMax;
for(var i=0; i<sleepyGuard['minutes'].length; i++) {
	if(sleepyGuard['minutes'][i] && (!sleepyMinute || sleepyGuard['minutes'][i] > sleepyMinuteMax)) {
		sleepyMinute = i;
		sleepyMinuteMax = sleepyGuard['minutes'][i];
	}
}

console.log(parseInt(sleepyMinute, 10) * parseInt(sleepyGuardId, 10));
// 102688
