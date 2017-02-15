var fork  = require('child_process').fork;

var child = fork(__dirname + '/honnorstudent.js');

child.on('message', function (m) {
	console.log('The Answer is: ', m.answer);
	child.send({cmd: 'done'});
});

child.send({cmd: 'double', number:20});
