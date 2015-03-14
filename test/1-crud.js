var enc = require('./..');
var k = 'foo',
	v = 'bar';
	
exports["set & get"] = function(test){
	var data = enc();
	
	data.set(k, v);
	test.equal(data.get(k), v);
	
	data.set(k, v + 'make it invalid');
	test.notEqual(data.get(k), v);
	
	test.done();
}


exports["unset"] = function(test){
	var data = enc();
	
	data.set(k, v);
	data.unset(k);
	
	test.notEqual(data.get(k), v);
	
	test.done();
}

