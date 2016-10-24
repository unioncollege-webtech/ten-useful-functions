module.exports = {
  upperCase: function(string) {
    return string.toUpperCase();
  },
  capitalize: function(string) {
    return string.substring(0, 1).toUpperCase().concat(string.substring(1));
  },
  seperate: function(string, seperator) {
    var out = "";
    for (var i = 0; i < string.length; i++) {
      if (string[i] === seperator) {
        out += " ";
      } else {
        out += string[i];
      }
    }
    return out;
  },
  replaceString: function(string, findStr, replaceStr) {
    return string.replace(findStr, replaceStr);
  }
};
