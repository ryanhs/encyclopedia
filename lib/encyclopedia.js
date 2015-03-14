var vm = require('vm');
var rand = require('./encyclopedia_rand.js');

function encyclopedia(){
	
	var prefix = 'Encyclopedia_' + rand.encyRandPrefix() + '_';	
	var length = prefix + 'length';
	var length_real = prefix + 'length_real'; // length is just counter, but length_real make it in order max_element per object :-)
	
	// make sure every encyclopedia has different prefix
	if(eval('typeof ' + length) != 'undefined') return encyclopedia();
	
	// i think object with 1,000,000 property is good.. i try 1000 it become slower :-)
	var max_element = 1 * 1000 * 1000;
	
	eval(length + ' = 0;');
	eval(length_real + ' = 0;');
	eval(prefix + '0 = {};');
	
	var methods = {
		
		getLength: function(){
			return eval(length);
		},
		
		set: function(key, value){
			var l = eval(length_real);
			var c = (l - (l % max_element)) / max_element;
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
				if(l % max_element == max_element - 1){
					eval(prefix + (c + 1) + ' = {}');
				}
			}
		},
		
		get: function(key){
			var l = eval(length_real);
			var c = (l - (l % max_element)) / max_element;
			
			for(var i = 0; i <= c; i++){
				if(eval(prefix + i + '.hasOwnProperty(key);')){
					var script = prefix + i + '[key];';	
					return eval(script);
					
					break;
				}
			}
		},
		
		unset: function(key){
			var l = eval(length_real);
			var c = (l - (l % max_element)) / max_element;
			
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
			var c = (l - (l % max_element)) / max_element;
			
			for(var i = 0; i <= c; i++){
				var script = 'for (key in ' + prefix + i + ') { callback(key, ' + prefix + i + '[key]); }';
				eval(script);
			}
		}
	};
	
	
	return methods;
}

module.exports = encyclopedia;
