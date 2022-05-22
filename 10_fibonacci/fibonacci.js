const fibonacci = function(n) {
if (n < 0) {
    return "OOPS"
} 
let f1 = 0
let f2 = 0
let f3 = 1
if (n == 1 || n == 2){
    return 1
}
while ( n > 1) {
    f1 = f2
    f2 = f3
    f3 = f1 + f2
    n--
}
return f3
};

// Do not edit below this line
module.exports = fibonacci;
