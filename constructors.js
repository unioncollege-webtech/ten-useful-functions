var num = require('./randomNum.js');
var word = require('./randomWords.js');
var util = require('./utilities.js');

//adds a noun to an array
exports.addNoun = function addNoun(array) {
    var temp = num.randomNum(0,2);
    if (temp == 1) {
        array.push(word.randomProperNoun());
        return 1;
    }
    else {
        var temp2 = num.randomNum(0,3);
        if (temp2 == 0) {
            array.push("a " + word.randomNoun());
            return 1;
        }
        else if (temp2 == 1) {
            array.push("the " + word.randomNoun());
            return 1;
        }
        else {
            array.push(num.randomNum(2,50).toString(), util.pluralize(word.randomNoun()));
            return 0;
        }
    }
};

//generates a sentence
exports.sentenceStructure = function sentenceStructure() {
    var array = [];
    var temp = num.randomNum(0,2);
    if (exports.addNoun(array) == 0) {
        if (temp == 0) {
            array.push(word.randomIntVerb());
        }
        else {
            array.push(word.randomTraVerb());
            exports.addNoun(array);
        }
    }
    else {
        if (temp == 0) {
            array.push(util.singThirdPerson(word.randomIntVerb()));
        }
        else {
            array.push(util.singThirdPerson(word.randomTraVerb()));
            exports.addNoun(array);
        }
    }
    temp = num.randomNum(0,2);
    if (temp == 0) {
        array.push(word.randomPreposition());
    }
    return array;
};

exports.composeSentence = function composeSentence(array) {
    array[0] = util.replaceAt(array[0], 0, util.capitalize(array[0][0]));
    array[array.length - 1] += '.';
    return array.join(' ');
};