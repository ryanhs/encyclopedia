var rand = require('./../lib/encyclopedia_rand.js');

exports["encyRandChar"] = function(test){
	// alphabet char
	var r = rand.encyRandChar('alphabet').charCodeAt(0);
	test.ok((r >= 65 && r <= 90) || (r >= 97 && r <= 122));
	
	// numeric char
	var r = rand.encyRandChar('numeric').charCodeAt(0);
	test.ok(r >= 48 && r <= 57);
	
	// numeric char
	var r = rand.encyRandChar('alphanumeric').charCodeAt(0);
	test.ok((r >= 65 && r <= 90) || (r >= 97 && r <= 122) || (r >= 48 && r <= 57));
	
	test.done();
}

exports["encyRandPrefix"] = function(test){
	var m = 9,
		varName = rand.encyRandPrefix(m),
		r;
		
	for(var i = 0; i < m; i++){
		r = varName.charCodeAt(i);
		test.ok((r >= 65 && r <= 90) || (r >= 97 && r <= 122) || (r >= 48 && r <= 57));
	}
	
	test.done();
}
