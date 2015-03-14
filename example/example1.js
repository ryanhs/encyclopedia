var enc = require('./..');

var test = enc();

var max = 8;
for(var i = 0; i < max; i++){
	test.set(i, i);
}


test.set(2, 'dva');
test.set(5, 'pyat');

test.walk(function(k, v){
	console.log(k + ' => ' + v);
});

console.log('now length: ' + test.getLength());
