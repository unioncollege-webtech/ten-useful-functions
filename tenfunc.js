function cosntant(value) {
    return value;
}

function greaterThan(a, b) {
    return a > b;
}

function lessThan(a, b) {
    return a < b;
}



function kebobCase(string) {
    var newString = string.toLowerCase();
    newString = newString.replace(/\W/g, ' ');
    newString = newString.trim();
    newString = newString.replace(/ /g, "-");
    return newString;
}

function sentenceCase(string) {
    var newString = string.toLowerCase();
    newString.replace(0, newString[0].toUpperCase());
    return newString;
}

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function newSentence() {
    var sentence = "";
    var name = ["Harry", "Jan", "Jim", "Zane", "Andy", "Manny", "Bob", "Sarah"];
    var verb = ["ran to", "sat on", "threw", "jumped over", "stepped on", "walked to", "picked up"];
    var noun = ["library", "school", "hospital", "house", "baseball field", "chair", "table", "stairs"];
    sentence = sentence + name[getRandomInt(0, 7)] + " ";
    sentence = sentence + verb[getRandomInt(0, 6)] + " ";
    sentence = sentence + "the ";
    sentence = sentence + noun[getRandomInt(0, 7)] + ".";
    return sentence;
}

function noop() {
    
}

function kmToMi(value) {
    return value * 0.621371;
}

function miToKm(value) {
    return value * 1.60934;
}


