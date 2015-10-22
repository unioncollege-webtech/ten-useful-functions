/** findMedian.js
*
* Returns the median of an array of numbers.
* @param {Array} [numbers] The array of numbers to be sorted.
* @return {number} The median of the set of numbers.
* 
*/

function findMedian(numbers) {
    numbers.sort( function(a,b) {return a - b;} );

    var half = Math.floor(numbers.length/2);

    if(numbers.length % 2)
        return numbers[half];
    else
        return (numbers[half-1] + numbers[half]) / 2.0;
}

console.log(findMedian([1, 78, 34, 65, 22, 31, 89]));