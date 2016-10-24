var num = require('./randomNum.js');

//generates a random noun
exports.randomNoun = function randomNoun() {
    var nounArray = ["pancake", "dress", "clown", "watch", "fly", "volcano", 
    "cherry", "toy", "cat", "knife" ];
    return nounArray[num.randomNum(0, nounArray.length)];
};

//generates a random proper noun
exports.randomProperNoun = function randomProperNoun() {
    var nounArray = ["Joe Biden", "Donald Trump", "Fred Durst", 
    "Benjamin Barber", "Kanye West", "Charlie Sheen", "Hillary Clinton", 
    "Vermin Supreme", "Colonel Sanders", "Dora the Explorer"];
    return nounArray[num.randomNum(0, nounArray.length)];
};

//generates a random intransitive verb
exports.randomIntVerb = function randomIntVerb() {
    var verbArray = ["dance", "sleep", "panic", "sings", "speak", "hide", "fly",
    "leap", "sit", "eat"];
    return verbArray[num.randomNum(0, verbArray.length)];
};

//generates a random transitive verb
exports.randomTraVerb = function randomTraVerb() {
    var verbArray = ["watch", "throw", "stab", "destroy", "scold", "hide",
    "hit", "steal", "swallow", "eat"];
    return verbArray[num.randomNum(0, verbArray.length)];
};

//generates a random prepositional phrase
exports.randomPreposition = function randomPreposition() {
    var prepositionArray = ["on Christmas day", "under the bed", "at Walmart",
    "on the internet", "in the shower", "in front of a cop", 
    "on the toilet", "during a flight", "at a bus stop", "in a gas station bathroom"];
    return prepositionArray[num.randomNum(0, prepositionArray.length)];
};