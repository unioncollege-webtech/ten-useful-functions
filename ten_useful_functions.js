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

function primeNumber(number) {
   for(var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

function factorization(number) {
    var factors = [];
    
    for (var i = 2; i <= number; i++) {
        while ((number % i) === 0) {
            factors.push(i);
            number /= i;
        }
    }
    return factors;
}

function findMean() {
    var args = arguments;
    var length = args.length;
    var total = 0;
    var mean;
    
    for (var i = 0; i < length; i++) {
        total = total + args[i]; 
    }
    mean = total / length;
    return mean;
}

//console.log(exponential(3, 5));
//console.log(DecimalToBinary(42));
//console.log(DecimalToHexadecimal(34));
//console.log(primeNumber(5));
//console.log(factorization(35));
console.log(findMean(1, 2, 4, 5, 75, 3, 6, 8));