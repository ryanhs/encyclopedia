var enc = require('./..');

var odd = enc();
var even = enc();

var max = 10;
for(var i = 0; i < max; i++){
	
	if(i % 2 == 0)
		even.set(i, i);
	else
		odd.set(i, i);
}

console.log('# walk on odd');
odd.walk(function(k, v){
	console.log(k + ' => ' + v);
});

console.log('# walk on even');
even.walk(function(k, v){
	console.log(k + ' => ' + v);
});
