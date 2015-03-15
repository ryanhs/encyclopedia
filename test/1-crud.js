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


exports["has & unset"] = function(test){
	var data = enc();
	
	data.set(k, v);
	
	test.ok(data.has(k));
	
	data.unset(k);
	
	test.notEqual(data.get(k), v);
	test.ok(! data.has(k));
	
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
	test.equal(i, max);
	
	test.done();
}

exports["walk interupt"] = function(test){
	var data = enc();
	
	var max = 10;
	for(var i = 0; i < max; i++){
		data.set(i, i);
	}
	
	var interupt_on = 5;
	var i = 0;
	data.walk(function(k, v){
		i++;
		
		if (i == interupt_on){
			return false;
		}
	});
	
	test.equal(i, interupt_on);
	
	test.done();
}

