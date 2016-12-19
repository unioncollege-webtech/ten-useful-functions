// Ten Useful Functions

//function 9
// this code filters out all small values

function bigValues(value) {
  return value >= 50;
}
var filtered = [10, 35, 75, 1, 90].filter(bigValues);