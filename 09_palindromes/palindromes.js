const palindromes = function (variable) {
    variable = variable.toLowerCase();
    variable = variable.replace(/[^A-Z0-9]/ig, "");
    variable = Array.from(variable);

    const n = variable.length;

    for (let i = 0; i < n/2; i++) {
        if (variable[i] !== variable[n-i-1]) {
            return false;
        }
    }
    
    return true;
};

// Do not edit below this line
module.exports = palindromes;
