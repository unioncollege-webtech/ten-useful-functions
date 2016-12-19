"use strict";
var sentenceCase = require("./sentenceCase");
module.exports = function(string){
    var output = string.match(/\b[^\s]+\b/gi).map(function(value){
        return sentenceCase(value);
    });
    output[0] = output[0].toLowerCase();
    return output.join("");
}