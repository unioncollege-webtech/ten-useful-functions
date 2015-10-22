/** DecimalToHexadecimal.js
*
* Returns a string representing a hexadecimal number.
* @param {number} [decimal] Which decimal number to convert to hexadecimal.
* @return {string} The hexadecimal number.
* 
*/

function DecimalToHexadecimal(decimal) {
    var toConvert = decimal;
    if (toConvert >= 0) {
        return toConvert.toString(16);
    }
    else {
        return (~toConvert).toString(16);
    }
}

console.log(DecimalToHexadecimal(34));