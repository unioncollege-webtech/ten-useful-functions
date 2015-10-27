//this should be working

var word = "cat"

function finds(string) {
    var newString = string.split(" ");
    for(var i = 0; i <= string.length; i++) {
        if([i] == word) {
            console.log([i])
        } else {
            console.log("not a word")
        }
    }
    return newString;
}

finds("the cat in the hat is full of food");
