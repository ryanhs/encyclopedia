# Encyclopedia

i make this library to masking big object in nodejs. 
you can use this when you have to store a big data in nodejs.
but considering your hardware also :-)

the logic behind this is i make separated object for masking a big object.
example you need to store 100.000 properties and this library is make 100 object
with 1000 properties each object.


## getting started

<code>var encyclopedia = require('encyclopedia');
var data = encyclopedia(); // create new instance

data.set('some key', 'some value');
data.get('some key'); // return 'some value'
</code>

### set(k, v)
<code>data.set('some key', 'some value');</code>

### get(k)
<code>console.log( data.get('some key') );</code>

### unset(k, v)
<code>data.set('foo', 'bar'); // foo => bar
data.unset('foo'); // foo deleted 
data.get('foo') // undefined
</code>

### walk(callback(k, v){ })
<code>var max = 10;
for(var i = 0; i < max; i++){
	data.set(i, i);
}

data.walk(function(k, v){
	console.log(k + ' => ' + v);
});
</code>

### getLength
<code>var max = 10;
for(var i = 0; i < max; i++){
	data.set(i, i);
}

console.log('now length: ' + data.getLength()); // 10
</code>

in this version there is 4 basic method

#### author:
- ryan hs <mr.ryansilalahi@gmail.com>
