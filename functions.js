function upperCase(string) {
  return string.toUpperCase();
}
console.log('Uppercase: sgfjk -> ' + upperCase('sgfjk'));

function withinArray(array, comparator) {
  if (array.indexOf(comparator) !== -1) {
    return true;
  } else {
    return false;
  }
}
console.log("Within Array: 'joseph' ['none', 'happiness', 'truth'] -> " + withinArray(['none', 'happiness', 'truth'], 'joseph'));

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("Is Even: 8 -> " + isEven(8));

function isOdd(num) {
  if (num % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
console.log("Is Odd: 8 -> " + isEven(8));
