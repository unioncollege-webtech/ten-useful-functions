"use strict";
var range = require("./range");
var greaterthan = require("./greaterthan");
var lessthan = require("./lessthan");
var greaterthanequalto = require("./greaterthanequalto");
var lessthanequalto = require("./lessthanequalto");
var largest = require("./largest");
var sentenceCase = require("./sentenceCase");
var snake_case = require("./snakecase");
var camelcase = require("./camelcase");
var kebobcase = require("./kebobcase");

var numRange = range(4,100,6);

var greaterthanFive = greaterthan(5);

var lessthanSix = lessthan(6);

var greaterthanTen = greaterthanequalto(10);

var lessthanequaltoTen =  lessthanequalto(10);

var bigger = largest(17,2);

var base = "A walk to the moon and back.";

var sentence = sentenceCase(base);

var camel = camelcase(base);

var snake = snake_case(camel);

var kebob = kebobcase(camel);

console.log(numRange.reduce(function(a,b){
    return a+b;
},0));

var testArray = range(0,25,1);

console.log(testArray.filter(greaterthanFive));

console.log(testArray.filter(greaterthanTen));

console.log(testArray.filter(lessthanSix));

console.log(testArray.filter(lessthanequaltoTen));

var anotherTestArray = [5,2,16,3,7,0,33,4,100,32,54,63];

console.log(anotherTestArray.reduce(function(a,b)
{
    return largest(a,b);
}));


var functionNames = ["Greater than Eight", "Magical Mystical Code Here!!", "please dont upset the Monkey"];

var sentenceCases = functionNames.map(function(value){
    return sentenceCase(value);
});
console.log(sentenceCases);

var camelCases = functionNames.map(function(value){
    return camelcase(value);
});
console.log(camelCases);

var kebobCases = camelCases.map(function(value){
    return kebobcase(value);
});
console.log(kebobCases);

var snakeCases = camelCases.map(function(value){
    return snake_case(value);
});
console.log(snakeCases);

console.log()