var value = 25;
var value2 = 03;
var String = "Hello Everyone. This is an excercise about exporting useful functions.";

var str = require("./node_strings.js");
var num = require("./node_numbers.js");

console.log('Uppercase:' + str.UpperCase(String));  
console.log('Which number is bigger?' + num.largerThan(value,value2));
console.log('This is the answer. ' + num.isAnswer(value2));
console.log('Is this an even number? ' + num.isEven(value));
console.log(' Is this number less than 12? ' + num.smallerThan(value, value2));
console.log('Is this an odd number? ' + num.isOdd(value2));
console.log('Lowercase this sentence: '+ str.LowerCase(String));
console.log('Temperature in Fahrenheit: ' + num.toFahrenheit(value));
console.log('Temperature in Celcius: ' + num.toCelcius(value2));
console.log('Convert this number to a string: ' + num.toString(value));
