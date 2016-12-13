1

//function 1

var total_count = 0, count = 1;

while (count &lt;= 10)

{

total_count += count;

count += 1;

}

console.log(total_count);

// function 2

var sumArray = function()

{

function add(a,b)

{

return a + b ;

}

return function(sumArray)

{

return sumArray.reduce(add);



};

} ();

//function 3

name();

function name ()

{

console.log (&quot;gee&quot;);

}

//function 4

var stringOne = &quot;you shoud be smiling when you are reading this&quot;;

{

function convertToUpperCase(stringOne)

{

return stringOne.toUpperCase();



}

}

//function 5

var multiplyNumbers = function numbers(x, y) {

return x * y ;

};

//function 6

var str = &#39;95318&#39;;

Array.prototype.map.call(str, function(x) {

return x;

}).reverse().join(&#39;&#39;);

//function 7

var numbers = [1, 4, 9];

var doubles = numbers.map(function(num) {

return num * 2;

});

//function 8

function greaterThan(a,b){

while(true){

if(b==a){

return false;

}

if(b!==a){

return true;

}

a++;

b-- ;

}

}

//function 9

// this code filters out all small values

function bigValues(value) {

return value &gt;= 50;

}

var filtered = [10, 35, 75, 1, 90].filter(bigValues);

//function 10

// this code logs a line for each element of an array .As example show on MDN for

forEach() method that xecutes a provided function once per array element

function logArrayElements (element, index, array)

{

console.log(&#39;a[&#39; + index + &#39;] =&#39; + element);



}

[ 4,2, , 8].forEach(logArrayElements);