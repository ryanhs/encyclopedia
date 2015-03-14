var enc = require('./..');

var test = enc();

test.set('foo', 'bar');
console.log('foo => ' + test.get('foo'));

console.log('delete foo');

test.unset('foo');
console.log('foo => ' + test.get('foo'));
