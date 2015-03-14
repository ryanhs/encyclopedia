var enc = require('./..');

var test = enc();

var max = 10;
for(var i = 0; i < max; i++){
	test.set(i, i);
}

for(var i = 0; i < max / 2; i++){
	test.unset(i);
}


for(++i; i < max + max; i++){
	test.set(i, i);
}

test.walk(function(k, v){
	console.log(k + ' => ' + v);
});

console.log('now length: ' + test.getLength());


/*
var enc = require('./..');

var test = enc();

var max = 5;
for(var i = 0; i < max; i++){
	test.set(i, i);
}

test.unset(4);
test.unset(5);
test.unset(6);


for(++i; i < max + max; i++){
	test.set(i, i);
}

test.walk(function(k, v){
	console.log(k + ' => ' + v);
});

console.log('now length: ' + test.getLength());
*/
