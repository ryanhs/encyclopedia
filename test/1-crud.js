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

exports["walk"] = function(test){
	var data = enc();
	
	var max = 10;
	for(var i = 0; i < max; i++){
		data.set(i, i);
	}
	
	var all_good = true;
	var i = 0;
	data.walk(function(k, v){
		i++;
		
		// we put k = v, lets check it
		if(k != v){
			all_good = false;
		}
	});
	
	test.ok(all_good);
	test.ok(i == max);
	
	test.done();
}

