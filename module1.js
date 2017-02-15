var func = function(){
	console.log('Calling from module1.js func object');
};

var count =10 ;

var localcount =40;

module.exports.foo=func;
module.exports.cnt=count;