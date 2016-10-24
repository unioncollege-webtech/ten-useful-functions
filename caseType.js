function kebobCase(string) {
    var newString = string.toLowerCase();
    newString = newString.replace(/\W/g, ' ');
    newString = newString.trim();
    newString = newString.replace(/ /g, "-");
    return newString;
}

function sentenceCase(string) {
    var newString = string.toLowerCase();
    newString = newString.replace(newString[0], newString[0].toUpperCase());
    return newString;
}

module.exports = {
    kebobCase: kebobCase,
    sentenceCase: sentenceCase,
};