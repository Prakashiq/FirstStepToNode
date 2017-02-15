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


fs.mkdirSync('temp');
if(fs.existsSync('temp')) {
	process.chdir('temp');
	fs.writeFileSync('test.txt','This is a test file');
	fs.renameSync('test.txt','new.txt');
	console.log('file size: '+ fs.statSync('new.txt').size +'bytes');
	console.log('file Content: '+ fs.readFileSync('new.txt').toString());
}