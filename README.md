# Encyclopedia

i make this library to masking big object in nodejs. 
you can use this when you have to store a big data in nodejs.
but considering your hardware also :-)

the logic behind this is i make separated object for masking a big object.
example you need to store 100.000 properties and this library is make 100 object
with 1000 properties each object.


## getting started

<code>var encyclopedia = require('encyclopedia');<br/>
var data = encyclopedia(); // create new instance<br/>
<br/>
data.set('some key', 'some value');<br/>
data.get('some key'); // return 'some value'
</code>

### set(k, v)
<code>data.set('some key', 'some value');</code>

### get(k)
<code>console.log( data.get('some key') );</code>

### has(k)
<code>if(data.has('some key')){<br/>
	console.log('gotcha!');<br/>
}else{<br/>
	console.log('not found!');<br/>
}</code>

### unset(k, v)
<code>data.set('foo', 'bar'); // foo => bar<br/>
data.unset('foo'); // foo deleted <br/>
data.get('foo') // undefined
</code>

### walk(callback(k, v){ })
<code>var max = 10;<br/>
for(var i = 0; i < max; i++){<br/>
	data.set(i, i);<br/>
}<br/>
<br/>
data.walk(function(k, v){<br/>
	console.log(k + ' => ' + v);<br/>
});
</code>

note: if callback return FALSE it will break the walk, otherwise walk will continue..

### getLength()
<code>var max = 10;<br/>
for(var i = 0; i < max; i++){<br/>
	data.set(i, i);<br/>
}<br/>
<br/>
console.log('now length: ' + data.getLength()); // 10
</code>

in this version there is 4 basic method

#### author:
- ryan hs <mr.ryansilalahi@gmail.com>



###### need a lot to be improved
in this early development i just focus on main idea, separated big object..
i think there is a lot to be improved. you are very welcome to contribute :-)
