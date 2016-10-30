exports.largerThan = function largerThan(a, b) {
    return (a>b) ? true : false;
  }

exports.isAnswer = function isAnswer(attempt){
  if (attempt == 03){
    return true;
  } else {
    return false;
  }
}

exports.isEven =function isEven(num){
    if(num % 2 == 0){
        return true;
    } else {
        return false;
    }
}

exports.isOdd = function isOdd(num){
        if(num % 2 == 0){
                return false;
        } else{
                return true;
        }        
}

exports.smallerThan = function smallerThan(a, b) {
    return (a<b) ? true : false;
  }

exports.toCelcius =function toCelsius(f){
    return (5/9) * (f-32);
}

exports.toFahrenheit = function toFahrenheit(c){
    return c * (9/5) + 32;
}

exports.toString = function toString(code){
    return code.toString();
}