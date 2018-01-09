let add = function(numberString) { 
  
	var str = numberString.split(',');
	var sum = 0; 

	for(var i = 0; i < str.length; i++){
		if(str[i].length !== 0){
			sum += Number(str[i]);
		}
	}
	
	return sum; 
}

module.exports = add;
