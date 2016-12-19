// ten_useful_functions.js
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


function findMedian(numbers) {
    numbers.sort( function(a,b) {return a - b;} );

    var half = Math.floor(numbers.length/2);

    if(numbers.length % 2)
        return numbers[half];
    else
        return (numbers[half-1] + numbers[half]) / 2.0;
} 


function largest(x, y) {
    return Math.max(x, y);
}


function smallest(x, y) {
    return Math.min(x, y);
}


function upperCase(words) {
    return words.toUpperCase();
}


function lowerCase(words) {
    return words.toLowerCase();
}


//console.log(exponential(3, 5));
//console.log(DecimalToBinary(42));
//console.log(DecimalToHexadecimal(34));
//console.log(primeNumber(5));
//console.log(factorization(35));
//console.log(findMean(1, 5, 3, 79, 36));
//console.log(findMedian([1, 78, 34, 65, 22, 31, 89]));
//console.log(largest(43, 23));
//console.log(smallest(14, 89));
//console.log(upperCase("hi there!"));
//console.log(lowerCase("GOODBYE!"));