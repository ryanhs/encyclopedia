var rand = require('./encyclopedia_rand.js');

function encyclopedia(maxElement){
	
	var prefix = 'Encyclopedia_' + rand.encyRandPrefix() + '_';	
	var length = prefix + 'length';
	var length_real = prefix + 'length_real'; // length is just a counter, but length_real make it in order, maxElement per object :-)
	
	// make sure every instance has different prefix
	if(eval('typeof ' + length) != 'undefined') return encyclopedia();
	
	if(typeof maxElement == 'undefined'){
		// i think object with 1,000,000 property is good.. i try 1000 it become slower :-)
		var maxElement = 1 * 1000 * 1000;
	}
	
	eval(length + ' = 0;');
	eval(length_real + ' = 0;');
	eval(prefix + '0 = {};');
	
	var methods = {
		getMaxElement: function(){
			return maxElement;
		},
		
		getLength: function(){
			return eval(length);
		},
		
		set: function(key, value){
			var l = eval(length_real);
			var c = (l - (l % maxElement)) / maxElement;
			var is_new = true;
			
			var search = undefined;
			
			for(var i = 0; i <= c; i++){
				if(eval(prefix + i + '.hasOwnProperty(key);')){
					search = i;
					break;
				}
			}
			
			if(typeof search == 'undefined'){
				var script = prefix + c + '[key] = value;';
			}else{
				var script = prefix + search + '[key] = value;';
				is_new = false;
			}
			eval(script);
			
			if(is_new){
				eval(length_real + '++');
				eval(length + '++');
				if(l % maxElement == maxElement - 1){
					eval(prefix + (c + 1) + ' = {}');
				}
			}
		},
		
		get: function(key){
			var l = eval(length_real);
			var c = (l - (l % maxElement)) / maxElement;
			
			for(var i = 0; i <= c; i++){
				if(eval(prefix + i + '.hasOwnProperty(key);')){
					var script = prefix + i + '[key];';	
					return eval(script);
					
					break;
				}
			}
		},
		
		has: function(key){
			var l = eval(length_real);
			var c = (l - (l % maxElement)) / maxElement;
			
			for(var i = 0; i <= c; i++){
				if(eval(prefix + i + '.hasOwnProperty(key);')){
					return true;
					break;
				}
			}
			
			return false;
		},
		
		unset: function(key){
			var l = eval(length_real);
			var c = (l - (l % maxElement)) / maxElement;
			
			for(var i = 0; i <= c; i++){
				if(eval(prefix + i + '.hasOwnProperty(key);')){
					var script = 'delete ' + prefix + i + '[key];';	
					eval(length + '--');
					return eval(script);
					break;
				}
			}
		},
		
		walk: function(callback){
			if(typeof callback != 'function') return;
			
			var l = eval(length_real);
			var c = (l - (l % maxElement)) / maxElement;
			
			for(var i = 0; i <= c; i++){
				var script = 'for (key in ' + prefix + i + ') { if(callback(key, ' + prefix + i + '[key]) == false) break; }';
				eval(script);
			}
		}
	};
	
	
	return methods;
}

module.exports = encyclopedia;
