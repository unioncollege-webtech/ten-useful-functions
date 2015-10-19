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

 var input = "The moon is our natural satellite. it rotates around the Earth!";
 var bermuda = "Bermuda Love Triangle is Awesome!!";

console.log(camelcase(input));
console.log(camelcase(bermuda));

console.log(snake_case(camelcase(input)));
console.log(snake_case(camelcase(bermuda)));

console.log(kebobcase(camelcase(input)));
console.log(kebobcase(camelcase(bermuda)));
