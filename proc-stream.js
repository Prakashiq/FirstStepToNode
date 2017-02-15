


process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
	process.stdout.write('Data1 -> ' + chunk);
});

process.stdin.on('end',function(){
	process.stderr.write('End!');
});

process.stdin.on('SIGTERM',function(){
	process.stderr.write('URRR Why you are trying to terminate me !!!');
});

console.log('process id' + process.pid);