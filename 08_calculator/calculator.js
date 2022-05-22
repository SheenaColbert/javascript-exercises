const add = function(digit, anotherDigit) {
	let sum = digit + anotherDigit;
  return sum;
};

const subtract = function(a , b) {
  let answer = a - b;
  return answer;
	
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++ ) {
    sum += array[i];
  }
	return sum;
};

const multiply = function(arr) {
  let sum = 1;
  for (let i = 0; i < arr.length; i++){
    sum *= arr[i];
  }
  return sum;
};

const power = function(a , b) {
	let answer = a ** b;
  return answer;
};

const factorial = function(n) {
  let product = 1
	for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;

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
