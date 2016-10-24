var num = require('./randomNum.js');
var word = require('./randomWords.js');
var util = require('./utilities.js');
var cons = require('./constructors.js');

var array = [];
var array2 = [];
for (var i = 0; i < 10; i++) {
    array.push(i);
}

array.forEach(function(element) {
    num.randomNum(0, element);
});

console.log(array);

array.forEach(function(element) {
    array2.push(word.randomTraVerb());
});

console.log(array2);
array = [];

array2.forEach(function(element) {
    array.push(util.back(element, num.randomNum(1, element.length)));
});

console.log(array);
array = [];

array2.forEach(function() {
    array.push(word.randomProperNoun());
});

console.log(array);
array2 = [];

array.forEach(function(element) {
    var rnum = num.randomNum(1, element.length - 1);
    array2.push(util.replaceAt(element, rnum, util.back(element, rnum)));
});

console.log(array2);
//array = [];

array = array.filter(function(element) {
    return(util.isVowel(util.back(element, num.randomNum(1, element.length))));
});

console.log(array);
array = [];

array2.forEach(function() {
    array.push(word.randomNoun());
});

console.log(array);
array2 = [];

array.forEach(function(element) {
    array2.push(util.pluralize(element));
});

console.log(array2);
array = [];

array2.forEach(function() {
    array.push(word.randomIntVerb());
});

console.log(array);
array2 = [];

array.forEach(function(element) {
    array2.push(util.singThirdPerson(element));
});

console.log(array2);
array = [];

array2.forEach(function(element) {
    array.push(util.replaceAt(element, 0, util.capitalize(element[0])));
});

console.log(array);
//array2 = [];

for (var i = 0; i < 10; i++) {
    array[i] =[];
}

array.forEach(function(array) {
    cons.addNoun(array);
});

console.log(array);

array = [];

array2.forEach(function() {
    array.push(cons.sentenceStructure());
});

console.log(array);

array.forEach(function(array) {
    console.log(cons.composeSentence(array));
});