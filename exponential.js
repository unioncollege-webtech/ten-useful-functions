/** exponential.js
*
* Returns a number raised to the nth power.
* @param {number} [number] The base number.
* @param {number} [exponent] The exponent.
* @return {number} The inital number raised to the nth power.
* 
*/

function exponential(number, exponent) {
    var initialNum = number;
    for (var i = 1; i < exponent; i++) {
        number = number * initialNum;
    }
    return number;
}

console.log(exponential(3, 5));