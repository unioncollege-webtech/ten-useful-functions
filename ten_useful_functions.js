// JavaScript File
// Separate files for each function, or all together

function DecimalToBinary(decimal) {
    var toConvert = decimal;
    if (toConvert >= 0) {
        return toConvert.toString(2);
    }
    else {
        return (~toConvert).toString(2);
    }
}

function DecimalToHexadecimal(decimal) {
    var toConvert = decimal;
    if (toConvert >= 0) {
        return toConvert.toString(16);
    }
    else {
        return (~toConvert).toString(16);
    }
}

function exponential(number, exponent) {
    var initialNum = number;
    for (var i = 1; i < exponent; i++) {
        number = number * initialNum;
    }
    return number;
}

/*
function primeNumbers(number) {
    //check if number has a remainder
    if ((number % anyNumber) !== 0) return true;
    //check if number is non divisible
}
*/

function factorization() {
    
}

console.log(exponential(3, 5));
console.log(DecimalToBinary(42));
console.log(DecimalToHexadecimal(34));