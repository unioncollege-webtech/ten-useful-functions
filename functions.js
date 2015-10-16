//-- upperCase(string): Return `string` in all CAPITAL LETTERS.
//-- lowerCase(string): Return `string` in all lowercase letters.
//-- capitalize(string): Return `string` with the first letter Capitalized.
//-- sentenceCase:  Return `string` with the first letter capitalized, and convert the rest of the string to lowercase.
//-- titleCase(string): Return `string` with Every Word Capitalized.
//-- camelCase(string): Return `string` converted to camelCase by capitalizing all words but the first, and removing all non-word characters (everything but a–z, A–Z, 0–9, and _ (underscore)). For example: "Bermuda Love Triangle is Awesome!!" would be converted to "bermudaLoveTriangleIsAwesome".
//-- snakeCase(string): Return `string` converted to "snake_case": separate out all "camelCased" words, lowercase all characters, and replace non-word characters (or multiple non-word characters) with a single underscore. Remove beginning or trailing underscores.
//-- kebobCase(string): Return `string` converted to "snake_case": separate out all "camelCased" words, lowercase all characters, and replace non-word characters (or multiple non-word characters) with a hyphen (-). Remove beginning or trailing underscores.

function upperCase(string){
  return string.toUpperCase();
}
function lowerCase(string){
  return string.toLowerCase();
}
function capitalize(string, all){
  if (all){
    return string.split(' ').map(function(a){
      return capitalize(a, false);
    }).join(delimiter);
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
function sentenceCase(string){
  return capitalize(string.toLowerCase(), false);
}
console.log(sentenceCase("THIS IS a teSt."));
