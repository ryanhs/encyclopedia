var enc = require('./..');

exports["50,000 data"] = function(test){
	var data = enc();

	var max = 50 * 1000;
	for(var i = 0; i < max; i++){
		data.set(i, i);
	}

	var all_good = true;
	
	for(var i = 0; i < max; i++){
		if(i != data.get(i)){
			all_good = false;
			break;
		}
	}

	test.ok(all_good);
	test.done();
}
