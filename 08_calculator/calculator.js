const add = function(num1,num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(input) {
if(input === undefined || input.length === 0){
  return 0 
}

	const output = input.reduce((total,currentItem)=>{
    return total+currentItem
  }
  )
return output
};

const multiply = function(input) {
  if(input === undefined || input.length === 0){
    return 0 
  }
  
    const output = input.reduce((total,currentItem)=>{
      return total*currentItem
    }
    )
  return output
};

const power = function(num, power) {
	let total = 1
  for( i=0; i<power; i++){
    total = total*num
  }
  return total
};

const factorial = function(num) {
  let total = 1
  for( i=0; i<num; i++){
    total = total*(num-i)
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
