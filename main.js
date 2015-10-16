var range = require("./range");
var greaterthan = require("./greaterthan");
var lessthan = require("./lessthan");
var largest = require("./largest");
var sentenceCase = require("./sentenceCase");

 var input = "The moon is our natural satellite, i.e. it rotates around the Earth!";
 
 var matches = input.match(/\b[^\s]+\b/gi);
console.log(matches)


