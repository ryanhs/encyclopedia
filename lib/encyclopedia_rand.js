"use strict";

var type,
	m;

// type = alphanumeric | alphabet | numeric
function encyRandChar(type){
	var r = parseInt((Math.random() * 1000) % 150);
	
	switch(type){
		case 'alphabet':
			if((r >= 65 && r <= 90) || (r >= 97 && r <= 122))
				return String.fromCharCode(r);
			break;
		case 'numeric':
			if(r >= 48 && r <= 57)
				return String.fromCharCode(r);
			break;
		default:
			if((r >= 65 && r <= 90) || (r >= 97 && r <= 122) || (r >= 48 && r <= 57))
				return String.fromCharCode(r);
			break;
	}
	
	return encyRandChar(type);
}

// max : 5
// just makesure first char is alphabet for variable name
function encyRandPrefix(m){
	var max = m == undefined || m == NaN ? 5 : parseInt(m);
	var result = '';
	
	for(var i = 0; i < max; i++)
		result += encyRandChar();
	
	return result;
}


exports.encyRandChar = encyRandChar;
exports.encyRandPrefix = encyRandPrefix;
