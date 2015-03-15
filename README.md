# Encyclopedia

i make this library to masking big object in nodejs. 
you can use this when you have to store a big data in nodejs.
but considering your hardware also :-)

the logic behind this is i make separated object for masking a big object.
example you need to store 100.000 properties and this library is make 100 object
with 1000 properties each object.

default per object is 1 million, but you can set it when create new instance.
example:

```javascript
	var encyclopedia = require('encyclopedia');
	var data = encyclopedia(1000); // 1000 property per object
```



## getting started

```javascript
	var encyclopedia = require('encyclopedia');
	var data = encyclopedia(); // create new instance

	data.set('some key', 'some value');
	data.get('some key'); // return 'some value'
```

### set(k, v)
```javascript
	data.set('some key', 'some value');
```

### get(k)
```javascript
	console.log( data.get('some key') );
```

### has(k)
```javascript
	if(data.has('some key')){
		console.log('gotcha!');
	}else{
		console.log('not found!');
	}
```

### unset(k, v)
```javascript
	data.set('foo', 'bar'); // foo => bar
	data.unset('foo'); // foo deleted 
	data.get('foo') // undefined
```

### walk(callback(k, v){ })
```javascript
	var max = 10;
	for(var i = 0; i < max; i++){
		data.set(i, i);
	}

	data.walk(function(k, v){
		console.log(k + ' => ' + v);
	});
```

note: if callback return FALSE it will break the walk, otherwise walk will continue..

### getLength()
```javascript
	var max = 10;
	for(var i = 0; i < max; i++){
		data.set(i, i);
	}

	console.log('now length: ' + data.getLength()); // 10
```

#### author:
- ryan hs <mr.ryansilalahi@gmail.com>



###### need a lot to be improved
in this early development i just focus on main idea, separated big object..
i think there is a lot to be improved. you are very welcome to contribute :-)
