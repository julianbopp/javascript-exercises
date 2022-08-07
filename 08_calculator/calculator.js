const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  if (typeof array === "undefined") {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  return array.reduce(function (total, current) {
    return total + current;
  });



};

const multiply = function(array) {
  if (typeof array === "undefined") {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  return array.reduce(function (total, current) {
    return total * current;
  });

};

const power = function(a, b) {
  return a**b;
	
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else {
    return a * factorial(a-1);
  }
	
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
