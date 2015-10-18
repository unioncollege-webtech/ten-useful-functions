"use strict";
var range = require("./range");
var greaterthan = require("./greaterthan");
var lessthan = require("./lessthan");
var largest = require("./largest");
var sentenceCase = require("./sentenceCase");
var snake_case = require("./snakecase");
var camelcase = require("./camelcase");

 var input = "The moon is our natural satellite. it rotates around the Earth!";
 var bermuda = "Bermuda Love Triangle is Awesome!!";

console.log(camelcase(input));
console.log(camelcase(bermuda));


