// testing with dummy that looks like real, a common profile data with million(s) record

var enc = require('./..');

var data = {},
	data_row = 10;
for(var i = 0; i < data_row; i++){
	data['row_' + i] = 'CIKAN AH NGETEST AJA. CIKAN AH NGETEST AJA. CIKAN AH NGETEST AJA.';
}

console.log("# data:");
console.log(data);


var test = enc();

var max = 1 * 1000 * 1000;


console.log();
console.log();
console.log("# inserting " + max + " data");

var per = max / 10;
for(var i = 0; i < max; i++){
	
	if(i % per == 0 && i > 0)
		console.log(i + "...");
	
	test.set(i, data);
}

console.log('now length: ' + test.getLength());
