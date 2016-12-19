//this should be working



function finds(string, word) {
    var newString = string.split(" ");
    for(var i = 0; i <= newString.length; i++) {
        if(newString[i] == word) {
            return word;
        } else {
            return "not a word"
        }
    }
    return newString;
}

console.log(finds("the cat in the hat is full of food", "cat"));
