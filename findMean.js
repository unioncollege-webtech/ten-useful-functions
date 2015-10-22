/** findMean.js
*
* Returns the mean of a set of numbers.
* @return {number} The mean.
* 
*/

function findMean() {
    var args = arguments;
    var length = args.length;
    var total = 0;
    var mean;
    
    for (var i = 0; i < length; i++) {
        total = total + args[i]; 
    }
    mean = total / length;
    return mean;
}

console.log(findMean(1, 5, 3, 79, 36));