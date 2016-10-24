var conversion = require('./conversion');
var sentence = require('./sentence');
var nothing = require('./nothing');
var constReturn = require('./constReturn');
var comparison = require('./comparison');
var caseType = require('./caseType');
var random = require('./random');


console.log(constReturn.constant(12));

console.log(comparison.greaterThan(21, 15));

console.log(comparison.lessThan(21, 15));

console.log(caseType.kebobCase('this string should come out in kebobCase.'));

console.log(caseType.sentenceCase('this string should come out in sentenceCase.'));

console.log(random.getRandomInt(0, 100));

console.log(sentence.newSentence());

console.log(nothing.noop());

console.log(conversion.kmToMi(6));

console.log(conversion.miToKm(2.5));