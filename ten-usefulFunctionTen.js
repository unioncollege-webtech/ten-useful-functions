// Ten Useful Functions

//function 10
// this code logs a line for each element of an array .As example show on MDN for forEach() mehod that xecutes a provided function once per array element

function logArrayElements (element, index, array)
{
  console.log('a[' + index + '] =' + element);
  
}
[ 4,2, , 8].forEach(logArrayElements);