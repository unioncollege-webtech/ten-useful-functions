//returns n - 1 characters from back of string
exports.back = function back(string, n) {
    return string[string.length - n];
};

//replaces nth character in string with char
exports.replaceAt = function replaceAt(string, n, char) {
    string = string.substr(0, n) + char + string.substr(n + 1);
    return string;
};

//returns whether or not a character is a vowel
exports.isVowel = function isVowel(char) {
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || 
    char == 'u') {
        return true;
    }
    else {
        return false;
    }
};

//returns the plural of a noun that has a regular plural
exports.pluralize = function pluralize(noun) {
    if (exports.back(noun, 1) == 's') {
        return noun += 'es';
    }
    else if (exports.back(noun, 1) == 'h' && (exports.back(noun, 2) == 'c' || 
    exports.back(noun, 2) == 's')) {
        return noun += "es";
    }
    else if (exports.back(noun, 1) == 'y' && !exports.isVowel(exports.back(noun, 2))) {
        noun = exports.replaceAt(noun, noun.length - 1, 'i');
        return noun += "es";
    }
    else if (exports.back(noun, 1) == 'o') {
        return noun += "es";
    }
    else if (exports.back(noun, 2) == 'f') {
        noun = exports.replaceAt(noun, noun.length - 2, 'v');
        return noun += 's';
    }
    else {
        return noun += 's';
    }
    
};

//returns the singular third person form of a verb that has a regular 
//singular third person form
exports.singThirdPerson = function singThirdPerson(verb) {
    return exports.pluralize(verb);
};

//returns the capital of a character or string
exports.capitalize = function capitalize(char) {
    return char.toUpperCase();
};