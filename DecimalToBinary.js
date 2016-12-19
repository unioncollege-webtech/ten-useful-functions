/** DecimalToBinary.js
*
* Returns a string representing a binary number.
* @param {number} [decimal] Which decimal number to convert to binary.
* @return {string} The binary number.
* 
*/

function DecimalToBinary(decimal) {
    var toConvert = decimal;
    if (toConvert >= 0) {
        return toConvert.toString(2);
    }
    else {
        return (~toConvert).toString(2);
    }
}

console.log(DecimalToBinary(42));