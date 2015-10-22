/** factorization.js
*
* Returns an array of the factors of the given number.
* @param {number} [number] The number to be factorized.
* @return {Array} The lowest common factors.
* 
*/

function factorization(number) {
    var factors = [];
    
    for (var i = 2; i <= number; i++) {
        while ((number % i) === 0) {
            factors.push(i);
            number /= i;
        }
    }
    return factors;
}

console.log(factorization(35));