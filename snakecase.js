"use strict";
module.exports = function(string){
    var output = "";
    var words = string.match(/\b[^\s]+\b/gi);
    for(let i = 0; i < words.length; i++)
    {
        output+=words[i].toLowerCase();
        if(i < words.length-1)
        {
            output+="_";
        }
    }
    return output;
}