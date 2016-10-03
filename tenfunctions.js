//generates a random number between low and high, inclusive on low, noninclusive on high
function randomNum(low, high) {
    return Math.floor(Math.random() * high + low);
}

//generates a random noun
function randomNoun() {
    var nounArray = ["pancake", "dress", "clown", "watch", "fly", "volcano", 
    "cherry", "toy", "cat", "knife" ];
    return nounArray[randomNum(0, nounArray.length)];
}

//generates a random proper noun
function randomProperNoun() {
    var nounArray = ["Joe Biden", "Donald Trump", "Fred Durst", 
    "Benjamin Barber", "Kanye West", "Charlie Sheen", "Hillary Clinton", 
    "Vermin Supreme", "Colonel Sanders", "Dora the Explorer"];
    return nounArray[randomNum(0, nounArray.length)];
}

//generates a random intransitive verb
function randomIntVerb() {
    var verbArray = ["dance", "sleep", "panic", "sings", "speak", "hide", "fly",
    "leap", "sit", "eat"];
    return verbArray[randomNum(0, verbArray.length)];
}

//generates a random transitive verb
function randomTraVerb() {
    var verbArray = ["watch", "throw", "stab", "destroy", "scold", "hide",
    "hit", "steal", "swallow", "eat"];
    return verbArray[randomNum(0, verbArray.length)];
}

//generates a random prepositional phrase
function randomPreposition() {
    var prepositionArray = ["on Christmas day", "under the bed", "at Walmart",
    "on the internet", "in the shower", "in front of a cop", 
    "on the toilet", "during a flight", "at a bus stop", "in a gas station bathroom"];
    return prepositionArray[randomNum(0, prepositionArray.length)];
}

//returns n - 1 characters from back of string
function back(string, n) {
    return string[string.length - n];
}

//replaces nth character in string with char
function replaceAt(string, n, char) {
    string = string.substr(0, n) + char + string.substr(n + 1);
    return string;
}

//returns whether or not a character is a vowel
function isVowel(char) {
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || 
    char == 'u') {
        return true;
    }
    else {
        return false;
    }
}

//returns the plural of a noun that has a regular plural
function pluralize(noun) {
    if (back(noun, 1) == 's') {
        return noun += 'es';
    }
    else if (back(noun, 1) == 'h' && (back(noun, 2) == 'c' || 
    back(noun, 2) == 's')) {
        return noun += "es";
    }
    else if (back(noun, 1) == 'y' && !isVowel(back(noun, 2))) {
        noun = replaceAt(noun, noun.length - 1, 'i');
        return noun += "es";
    }
    else if (back(noun, 1) == 'o') {
        return noun += "es";
    }
    else if (back(noun, 2) == 'f') {
        noun = replaceAt(noun, noun.length - 2, 'v');
        return noun += 's';
    }
    else {
        return noun += 's';
    }
    
}

//returns the singular third person form of a verb that has a regular 
//singular third person form
function singThirdPerson(verb) {
    return pluralize(verb);
}

//returns the capital of a character or string
function capitalize(char) {
    return char.toUpperCase();
}

//adds a noun to an array
function addNoun(array) {
    var temp = randomNum(0,2);
    if (temp == 1) {
        array.push(randomProperNoun());
        return 1;
    }
    else {
        var temp2 = randomNum(0,3);
        if (temp2 == 0) {
            array.push("a " + randomNoun());
            return 1;
        }
        else if (temp2 == 1) {
            array.push("the " + randomNoun());
            return 1;
        }
        else {
            array.push(randomNum(2,50).toString(), pluralize(randomNoun()));
            return 0;
        }
    }
}

//generates a sentence
function sentenceStructure() {
    var array = [];
    var temp = randomNum(0,2);
    if (addNoun(array) == 0) {
        if (temp == 0) {
            array.push(randomIntVerb());
        }
        else {
            array.push(randomTraVerb());
            addNoun(array);
        }
    }
    else {
        if (temp == 0) {
            array.push(singThirdPerson(randomIntVerb()));
        }
        else {
            array.push(singThirdPerson(randomTraVerb()));
            addNoun(array);
        }
    }
    temp = randomNum(0,2);
    if (temp == 0) {
        array.push(randomPreposition());
    }
    return array;
}

function composeSentence(array) {
    array[0] = replaceAt(array[0], 0, capitalize(array[0][0]));
    array[array.length - 1] += '.';
    return array.join(' ');
}

var array = [];
var array2 = [];
for (var i = 0; i < 10; i++) {
    array.push(i);
}

array.forEach(function(element) {
    randomNum(0, element);
});

console.log(array);

array.forEach(function(element) {
    array2.push(randomTraVerb());
});

console.log(array2);
array = [];

array2.forEach(function(element) {
    array.push(back(element, randomNum(1, element.length)));
});

console.log(array);
array = [];

array2.forEach(function() {
    array.push(randomProperNoun());
});

console.log(array);
array2 = [];

array.forEach(function(element) {
    var num = randomNum(1, element.length - 1);
    array2.push(replaceAt(element, num, back(element, num)));
});

console.log(array2);
//array = [];

array = array.filter(function(element) {
    return(isVowel(back(element, randomNum(1, element.length))));
});

console.log(array);
array = [];

array2.forEach(function() {
    array.push(randomNoun());
});

console.log(array);
array2 = [];

array.forEach(function(element) {
    array2.push(pluralize(element));
});

console.log(array2);
array = [];

array2.forEach(function() {
    array.push(randomIntVerb());
});

console.log(array);
array2 = [];

array.forEach(function(element) {
    array2.push(singThirdPerson(element));
});

console.log(array2);
array = [];

array2.forEach(function(element) {
    array.push(replaceAt(element, 0, capitalize(element[0])));
});

console.log(array);
//array2 = [];

for (var i = 0; i < 10; i++) {
    array[i] =[];
}

array.forEach(function(array) {
    addNoun(array);
});

console.log(array);

//for (var i = 0; i < 10; i++) {
//    array[i] =[];
//}

array = [];

array2.forEach(function() {
    array.push(sentenceStructure());
});

console.log(array);

array.forEach(function(array) {
    console.log(composeSentence(array));
});

//for (var i = 0; i < 10; i++) {
//console.log(composeSentence(sentenceStructure()));
//}
