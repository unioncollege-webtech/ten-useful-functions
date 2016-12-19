"use strict";

module.exports = function(string){
    var output = string.match(/[a-z]+|[A-Z]+[a-z]*/g).map(function(value){
        return value.toLowerCase();
    });
    return output.join("_");
}