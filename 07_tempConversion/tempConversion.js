const ftoc = function(fahrenheit) {
  let conversion = (fahrenheit - 32) * 5/9;
  let rounded = Math.round(conversion *10) / 10;
return rounded;
};

const ctof = function(celsius) {
let conversion = (celsius * 9/5 ) + 32
let rounded = Math.round(conversion * 10) / 10
return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
