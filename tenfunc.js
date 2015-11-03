
// STRING FUNCTIONS

// Convert string to upper case
function upperCase(string) {
    return string.toUpperCase();
}

// Convert string to lower case
function lowerCase(string) {
    return string.toLowerCase();
}

// Capitalize first character of string
function capitalize(string) {
    return string.substr(0, 1).toUpperCase() + string.substr(1, string.length);
}

// Convert string to sentence case
function sentenceCase(string) {
    return string.substr(0, 1).toUpperCase() + string.substr(1, string.length).toLowerCase();
}


// NUMBER FUNCTIONS

// Get the smallest number from any number of arguments
function smallestNumber() {
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    
    return min;
}

// Get the largest number from any number of arguments
function largestNumber() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    
    return max;
}

// Add all arguments together
function addNumbers() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

// Square a number
function square(number) {
    return number * number;
}

// Find the average of all arguments
function average() {
    var sum = addNumbers.apply(this, arguments);
    return sum / arguments.length;
}

// Checks if a number is even
function isEven(number) {
    return (number % 2 == 0);
}

var stringArray = ["this is a test", "THIS IS ALL CAPITALS", "test"];
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

console.log(stringArray.map(upperCase));
console.log(stringArray.map(lowerCase));
console.log(stringArray.map(capitalize));
console.log(stringArray.map(sentenceCase));

console.log(numberArray.map(square));
console.log(numberArray.map(isEven));

console.log(smallestNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(largestNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));