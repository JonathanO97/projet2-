let add = function(numberString) { 
  
	var str = numberString.split(',');
	var sum = 0; 

	for(var i = 0; i < str.length; i++){
		var temp = str[i].split("\n");
		for(var j = 0; j < temp.length; j++){
			if(temp[j].length !== 0){
				sum += Number(temp[j]);
			}
		}	
	}
	
	return sum; 
}

module.exports = add;
