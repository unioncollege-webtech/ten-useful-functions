/** primeNumber.js
*
* Returns a boolean determining whether a given number is prime.
* @param {number} [number] The integer to be evaluated.
* @return {boolean} The result of whether the number was or was not prime.
* 
*/

function primeNumber(number) {
   for(var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

console.log(primeNumber(29));