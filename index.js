//Provides comparison functions that return true/false
var gcComp = require('./custom_modules/greenCommonComparators');
//Provides 'modifier' functions that return non-binary values
var gcMod = require('./custom_modules/greenCommonModifiers');

//Resete the console
var lines = process.stdout.getWindowSize()[1];
for(var i = 0; i < lines; i++) {
    console.log('\r\n');
}

//Uppercasing
console.log('Uppercase: sgfjk -> ' + gcMod.upperCase('sgfjk'));
console.log("['sentence', 'array', 'seabiscuit', 'english'] -> " + ['sentence', 'array', 'seabiscuit', 'english'].map(gcMod.upperCase));
console.log('\r\n');

//WithinArray
console.log("Within Array: 'joseph' ['none', 'happiness', 'truth'] -> " + gcComp.withinArray(['none', 'happiness', 'truth'], 'joseph'));
console.log('\r\n');

//IsEven
console.log("Is Even: 8 -> " + gcComp.isEven(8));
console.log("[1,2,3,4,5,6,7,8,9] -> " + [1,2,3,4,5,6,7,8,9].map(gcComp.isEven));
console.log('\r\n');

//IsOdd
console.log("Is Odd: 8 -> " + gcComp.isOdd(8));
console.log("[1,2,3,4,5,6,7,8,9] -> " + [1,2,3,4,5,6,7,8,9].map(gcComp.isOdd));
console.log('\r\n');

//Larger
console.log("Larger: 7>6 -> " + gcComp.larger(7,6));
console.log('\r\n');

//Smaller
console.log("Smaller: 7<6 -> " + gcComp.smaller(7,6));
console.log('\r\n');

//Abraham Lincoln?
console.log("Abraham lincoln: abrAhAm LINcoLN -> " + gcComp.abrahamLincoln('abrAhAm LINcoLN'));
console.log("['sentence', 'array', 'seabiscuit', 'abraham lincoln'] -> " + ['sentence', 'array', 'seabiscuit', 'abraham lincoln'].map(gcComp.abrahamLincoln));
console.log('\r\n');

//Capitalizing
console.log("Capitalize: capitalize me captain! -> " + gcMod.capitalize('Capitalize me captain!'));
console.log("['sentence', 'array', 'seabiscuit', 'english'] -> " + ['sentence', 'array', 'seabiscuit', 'english'].map(gcMod.capitalize));
console.log('\r\n');

//SeperateOn
console.log("Seperate: james;is;casual ';' -> " + gcMod.seperate('james;is;casual', ';'));
console.log('\r\n');

//Replace in string
console.log("Replace String: Joseph is funny and a wonderful man 'Joseph' 'James' -> " + gcMod.replaceString('Joseph is funny and a wonderful man', 'Joseph', 'James'));
console.log('\r\n');
