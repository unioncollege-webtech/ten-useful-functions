
function kebobCase(string) {
    var aString = string.split(" ").join("-");
    return aString;
}


console.log(kebobCase("this is kebob case text"));



/*
    console.log(aString)
    for (var i = 0; i <= string.length; i++) {
        if ([i]  != " ") {
            console.log(string[i])
        }else {
        console.log(string[i].replace(" ","-"))
        }
    }
    
    
    var str = 'a b c';
var replaced = str.split(' ').join('+');
*/