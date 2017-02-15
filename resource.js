var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Resource(m) {
	
var self = this;
	process.nextTick(function() {
		var count =0;
		self.emit('start');
		var t = setInterval(function(){
			self.emit('data',++count);
			if (count === m ){
				self.emit('end', count);
				clearInterval(t);
			}
		},1000);
	});
};

util.inherits(Resource,EventEmitter);

module.exports=Resource;