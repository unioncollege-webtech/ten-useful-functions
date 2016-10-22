var value = 50;

exports.lessThanOrEqualTo = function lessThanOrEqualTo(a) {
   if (a <= value) {
    return true;
    } else {
    return false}
};

exports.lessThan = function lessThan(a) {
   if (a  < value ) {
    return true;
    } else {
    return false}
};

exports.smallest = function smallest(a, b) {
   if (a > b) {
    return b;
    } else {
    return a}
};

exports.upper = function largest(a, b) {
   if (a > b) {
    return a;
    } else {
    return b}
};

exports.is = function is(a) {
   if (a ===5 ) {
    return true;
    } else {
    return false}
};

exports.greaterThan = function greaterThan(a) {
   if (a  > value ) {
    return true;
    } else {
    return false}
};

exports.greaterThanOrEqualTo =function greaterThanOrEqualTo(a) {
   if (a >= value) {
    return true;
    } else {
    return false}
};

exports.constant = function constant(a) {
   return value;
};