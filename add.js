let add = function(numberStringOne, numberStringTwo) { 
  
  if(typeof numberStringOne !== "undefined" && typeof numberStringTwo !== "undefined")
		return numberStringOne + numberStringTwo;
	
  if(numberStringOne.length === 0) 
	  return 0; 
  else
	  return numberStringOne; 
}

module.exports = add;
