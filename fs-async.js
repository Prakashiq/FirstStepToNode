var fs = require('fs');

if (fs.existsSync('temp')) {
	console.log('Directory Exists, removing ....');
	if (fs.existsSync('temp/new.txt')) {
		fs.unlinkSync('temp/new.txt');
	}
	fs.rmdirSync('temp');
}
else
{
	console.log('Directory is removed or not created!');
}


fs.mkdir('temp', function(err){
	fs.exists('temp', function(exists) {
		if (exists) {
			process.chdir('temp');
				fs.writeFile('test.txt','This is a test file', function(err){
					fs.rename('test.txt','new.txt',function(err){
						console.log('file size: '+ fs.statSync('new.txt').size +'bytes');
						console.log('file Content: '+ fs.readFileSync('new.txt').toString());					
					});				
				});
		}
	});
});
