var spawn = require('child_process').spawn,
	netstart = spawn('net',['start']),
	grep = spawn('findstr', ['primary']);



netstart.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

netstart.stderr.on('data', function(data) {
	console.log('netstart stderr :' + data);
});

grep.stderr.on('data', function(data){
	console.log('grep stderr: ' + data);
});