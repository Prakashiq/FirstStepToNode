var request = require('request');
var fs = require('fs');
var zlib = require('zlib');
// var s = request('https://onecognizant.cognizant.com/');

// s.pipe(process.stdout);

//request('https://onecognizant.cognizant.com/').pipe(process.stdout);

//request('https://onecognizant.cognizant.com/').pipe(fs.createWriteStream('onecognizant.html'));

request('https://onecognizant.cognizant.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('onecognizant.html.gz'));