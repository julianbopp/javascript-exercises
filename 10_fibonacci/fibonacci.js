const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    var next = 1;
    var prev1 = 1;
    var prev2 = 0;

    for (let i = 0; i < n; i++) {
        next = prev1 + prev2; 
        prev1 = prev2;
        prev2 = next;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
