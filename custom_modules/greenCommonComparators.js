module.exports = {
  withinArray: function(array, comparator) {
    if (array.indexOf(comparator) !== -1) {
      return true;
    } else {
      return false;
    }
  },
  isEven: function(num) {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  },
  isOdd: function(num) {
    if (num % 2 == 0) {
      return false;
    } else {
      return true;
    }
  },
  larger: function(a, b) {
    return (a>b) ? true : false;
  },
  smaller: function(a, b) {
    return (a<b) ? true : false;
  },
  abrahamLincoln: function(string) {
    if (string.toUpperCase() === 'ABRAHAM LINCOLN') {
      return true;
    } else {
      return false;
    }
  }
};
