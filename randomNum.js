//generates a random number between low and high, inclusive on low, noninclusive on high
exports.randomNum = function randomNum(low, high) {
    return Math.floor(Math.random() * high + low);
};