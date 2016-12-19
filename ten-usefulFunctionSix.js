// Ten Useful Functions

//function 6

var str = '95318';
Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join('');