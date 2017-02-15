var request = require('request');


var proxyUrl = "http://" + 'user' + ":" + 'password' + "@" + 'host' + ":" + 'port';

var proxiedRequest = request.defaults({'proxy': proxyUrl});


var s = proxiedRequest('http://google.com/');



s.on('data', function(chunk){
	console.log('data >>' +chunk);
});

s.on('end', function(){
	console.log('*********End of data******');
});