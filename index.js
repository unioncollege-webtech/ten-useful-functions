var myString = "where is my mind?";
var value1 = 20;

var st = require("./string-utils.js");
var num = require("./numbers-utils.js");

console.log('Just capitalize the first lettter: ' + st.capitalize(myString));
console.log('Which of these numbers is greater? '+ num.upper(4,12));
console.log('You cant change this number! It will be 50! ' + num.constant(value1));
console.log('Made uppercase: ' + st.upperCase(myString));
console.log('This number is greater than 50?: ' + num.greaterThan(51));
console.log('This number greater than or equal to 50: ' + num.greaterThanOrEqualTo(7));
console.log('This number is equal to 50: '+ num.is(3));
console.log('This number is less than 50: ' + num.lessThan(-5));
console.log('Which of these numbers is the smallest? ' + num.smallest(5,23));
console.log('Is this number less than or equal to 50? ' + num.lessThanOrEqualTo(23));



